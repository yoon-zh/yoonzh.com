---
layout: post
title: pzt
card_title: "Simulating a Piezostack in Ansys"
math: true
url: /posts/ansys/pzt
excerpt: "How to set up the basic simulation including material conditions and some circuit params"
date: 2026-04-22
tech_stack: [Ansys]
---

## 1. Material Definition

Depending on the piezostack to use, see if its material is already defined in Ansys. If yes, use it and jump to part 2. Or if not sure what material to use, pick something like PZT-5H.

If you must define the material, then the key properties you need are:
- Density
- Anisotropic Elasticity (elastic compliance)
- Relative Permittivity
- Piezoelectric Charge Constants

First look up the datasheet. I will use a PK4GYP2, with the datasheet [here](https://media.thorlabs.com/globalassets/items/p/pk/pk4/pk4gyp2/doc-100483.pdf).

Your datasheet might not contain the properties we mentioned above. If this is the case, you will have to contact the manufacturer asking for them.

My manufacturer gave me these values:
- Number of layers: 386
- Single-layer thickness: 70μm - 75μm (top and bottom layers are thicker for protection)
- Density $$\rho = 7.85 \times 10^3$$ kg/m³
- Elastic compliance
  - $$S_{11} = 17 \times 10^{-12}$$ m²/N
  - $$S_{33} = 23 \times 10^{-12}$$ m²/N
- Relative dielectric constant (permittivity): 4500


## Ansys steps

I use PK4GYP2 as an example here.

1. Create an Engineering Data item
2. Create a new material, name it `PK4GYP2`
3. Add the following properties:
  - `Density` (in Physical Properties)
  - `Anisotropic Elasticity` (in Linear Elastic)
  - `Anisotropic Relative Permittivity` (in Electric)
  - `Piezoelectric Matrix` (in Piezoelectric)
4. Assign Density: `7850` (kg m^-3)
5. In Anisotropic Elasticity:
  - Set Matrix Type to `Compliance`
  - Set Format to `IEEE`
  - Set Point Group to `6mm`
  - Open the table, put the following data (in Pa^-1):
    - $$S_{11}$$: `17e-12`
    - $$S_{33}$$: `23e-12`
    - $$S_{44}$$: `4.34782609e-11`
    - $$S_{66}$$: `4.42e-11`
    - $$S_{12}$$: `-5.1E-12`
    - $$S_{13}$$: `-6.9E-12`
6. In Anisotropic Relative Permittivity:



## Explanation

This is a thorough explanation on what each material property means, and how we get the numbers.

### Anisotropic Elasticity

This is basically the elastic parameters of the material, aka the Young's Modulus and Poisson Ratio.

> As discussed [here](https://en.wikipedia.org/wiki/Hooke%27s_law#Matrix_representation_stiffness_tensor), we define a stiffness tensor $$C$$ to express Hooke's law as:
>
> $$[\sigma]= [C][\epsilon]$$
>
> We can also define it the other way around by inverting the stiffness tensor:
>
> $$C^{-1} = s$$
>
> Where $$s$$ is the compliance matrix. Then:
>
> $$[\epsilon] = [s][\sigma]$$

- For the compliance matrix $$s$$, the diagonals represent the inverse of Young's and Shear Modulus, in this order: `X, Y, Z, YZ, XZ, XY`
- The point group refers to the material inner geometry, as discussed [here](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v252/en/wb_eda/eda_point_group.html). In our example, we assume the piezostack material properties to be symmetric in X and Y. The `6mm` setting basically represents this, more properly known as "transversely isotropic" as discussed in [this paper](https://doi.org/10.1063/1.340167).
- The IEEE and MAPDL formats order the diagonal items differently. I believe `X, Y, Z, YZ, XZ, XY` is the IEEE format, while in MAPDL it changes to `X, Y, Z, XY, YZ, XZ`. I assume this from the matrix definitions in Anisotropic Viscosity Example 5.1 in [here](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/ans_mat/mat_electricmagnet.html)

> As explained [here](https://en.wikipedia.org/wiki/Hooke%27s_law#Transversely_isotropic_materials), we can define the compliance matrix for transversely isotropic materials (z as the symmetry axis) as:
>
> $$
> \begin{bmatrix}
> \frac{1}{E_x} & -\frac{\nu_{yx}}{E_y} & -\frac{\nu_{zx}}{E_z} & 0 & 0 & 0 \\
> -\frac{\nu_{xy}}{E_x} & \frac{1}{E_y} & -\frac{\nu_{zy}}{E_z} & 0 & 0 & 0 \\
> -\frac{\nu_{xz}}{E_z} & -\frac{\nu_{yz}}{E_z} & \frac{1}{E_z} & 0 & 0 & 0 \\
> 0 & 0 & 0 & \frac{1}{G_{yz}} & 0 & 0 \\
> 0 & 0 & 0 & 0 & \frac{1}{G_{xz}} & 0 \\
> 0 & 0 & 0 & 0 & 0 & \frac{1}{G_{xy}}
> \end{bmatrix}
> $$

- For the PK4GYP2 example, we assume $$E_y = E_x$$, since the manufacturer did not provide $$S_{22}$$. Then, $$S_{11} = S_{22}$$.
- Since we do not have the coupling compliances, we assume a Poisson ratio of 0.3 (for all axis), as many piezoelectric materials in [here](https://www.fujicera.co.jp/wpkanri/wp-content/uploads/2023/11/The-material-characteristics-of-piezoceramics_2023.11E.pdf) are around this value. Then using the matrix above, we can obtain $$S_{12}$$ and $$S_{13}$$.
- For the PK4GYP2, we do not know the shear compliances $$S_{44},\ S_{55}$$. Since our focus here is to just compress the piezostack, we can simply recycle the shear compliances from another piezo material definition. In this case I refer to the PZT-5H as defined in Ansys.
- Since the piezostack is isotropic in the x-y plane, we can actually calculate $$S_{66} = \frac{2(1 + \nu_{xy})}{E_x} = 2(S_{11} - S_{12})$$

With all this, we can define the compliance matrix like this:

```matlab
%% From Manufacturer
S11 = 17e-12;
S33 = 23e-12;

%% From PZT-5H in Ansys
PZT_5H_C44 = 2.3e10;

%% Assumptions
S22 = S11; % transversely isotropic for x, y
nu = 0.3; % poisson ratio, estimated from other piezo materials

S44 = 1/PZT_5H_C44; % Use this as a default value 
S55 = S44; % transversely isotropic for x, y
S66 = S11*2*(1 + nu); % transversely isotropic for x, y

%% Calculations
S12 = -S11 * nu;
S13 = -S33 * nu;

fprintf('Put these values in Ansys:\n');
fprintf('S_{11} = %.8e \n', S11);
fprintf('S_{33} = %.8e \n', S33);
fprintf('S_{44} = %.8e \n', S44);
fprintf('S_{66} = %.8e \n', S66);
fprintf('S_{12} = %.8e \n', S12);
fprintf('S_{13} = %.8e \n', S13);

fprintf('The rest should be automatically filled\n');
```

Make sure to select Format: `IEEE`, Point group: `6mm`
