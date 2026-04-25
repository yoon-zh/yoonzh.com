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

My manufacturer gave me these values for the PK4GYP2:
- Material: Lead zirconate titanate (PZT)
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

7. In Piezoelectric Matrix:

## Explanation

This is a thorough explanation on what each material property means, and how we get the numbers. *For a full in-depth explanation, you can check these two resources [here](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v242/en/ans_thry/thy_coup2.html) and [here](http://rfc.nop.hu/ieee2/ANSI-IEEE%20Std%20176-1987.pdf).*

### Piezoelectric Constitutive Equations

The characteristic of a piezoelectric material is the coupling of mechanical and electrical physics. In short, we combine Hooke's law with the charge equations of electrostatics, as discussed [here](http://rfc.nop.hu/ieee2/ANSI-IEEE%20Std%20176-1987.pdf):

> $$T_{ij} = c_{ijkl}^E S_{kl} - e_{kij} E_k$$
>
> $$D_i = e_{ikl} S_{kl} + \varepsilon_{ij}^S E_k$$
>
> Where
> - $$T_{ij}$$ is stress tensor
> - $$S_{kl}$$ is strain tensor
> - $$c_{ijkl}^E$$ is elastic stiffness constant at constant electric field
> - $$e_{kij},\ e_{ikl}$$ are piezoelectric constants
> - $$E_k$$ is electrid field
> - $$D_i$$ is electric displacement field
> - $$\varepsilon_{ij}^S$$ is dielectric constant (permittivity) at constant strain

Going step by step:

The first equation calculates the stress tensor $$T_{ij}$$ as a result of the mechanical strain $$c_{ijkl}^E S_{kl}$$ and electric field $$e_{kij} E_k$$.
- The mechanical term $$c_{ijkl}^E S_{kl}$$ is simply [Hooke's law](https://en.wikipedia.org/wiki/Hooke%27s_law) in tensor notation.
  - $$c_{ijkl}^E$$ is the stiffness matrix. The superscript $$E$$ means this is measured at a constant electric field (for example, when the piezoelectric is shorted).
- The electrical term $$e_{kij} E_k$$ is the piezoelectric stress.
  - Since the material is anisotropic (polarized), applying an electric field $$E_k$$ in a certain direction induces a mechanical stress.
  - The piezoelectric constant $$e_{kij}$$ is a measured value that tells how much stress is induced given an electric field.
  - The negative sign implies a positive electric field tries to expands the material. If the material is clamped and cannot expand ($$S_{kl} = 0$$), it will result in a negative stress, which means an inner compressive stress.

The second equation is the electric displacement field $$D_i$$ in terms of the strain $$e_{ikl} S_{kl}$$ and the electric field $$\varepsilon_{ij}^S E_k$$.
- $$D_i$$ basically means how the charge is being distributed across the material.
- The mechanical term $$e_{ikl} S_{kl}$$ is the piezoelectric effect in the electric displacement field.
  - Since the material is anisotropic, there are more electrons in a certain side. Then, if the material is stretched or compressed, the electrons move a bit closer or farther from each other, thus concentrating a charge in a specific side.
  - $$e_{ikl}$$ is the piezoelectric constant matrix, exactly the same as in the first equation $$e_{kij}$$. The difference in subscripts is a convention technicality, which you can safely ignore.
  - The strain $$S_{kl}$$ is the same from the first equation of stress.
- The electrical term $$\varepsilon_{ij}^S E_k$$ is the original standard form of the electric displacement field $$D = \varepsilon E$$, as discussed [here](https://www.iue.tuwien.ac.at/phd/holzer/node46.html) and [here](https://en.wikipedia.org/wiki/Electric_displacement_field).
  - In simple terms, this equation means how the charge is distributed across the material when subject to an electric field. The permittivity $$\varepsilon$$ is the material property to distribute the charge. Think of it as the "insulation" property, whether charges move around easily (like in copper) or not (like in rubber).

For this model, $$T_{ij}$$ and $$S_{kl}$$ are 3x3 tensors.

> We can rewrite these equations in an informal way for a simpler understanding: 
>
> $$T = c S - e E$$
>
> $$D = e S + \varepsilon E$$
>
> Where
> - $$T$$ is stress
> - $$S$$ is strain
> - $$c$$ is elastic stiffness
> - $$e$$ is the piezoelectric coupling constant
> - $$E$$ is electrid field
> - $$D$$ is electric displacement field
> - $$\varepsilon$$ is dielectric constant (permittivity)

You may notice that both equations are written as a function of the strain $$S$$ and the electric field $$E$$. We can rewrite them to use a known stress instead and solve for the strain, as discussed [here](https://support.onscale.com/hc/en-us/articles/360002073378-Calculating-Piezoelectric-Material-Properties-from-Material-Datasheet):

> $$S = s T + d E$$
>
> $$D = d T + \varepsilon E$$
>
> Where
> - $$s = c^{-1}$$ is the compliance (inverse of the stiffness, as discussed [here](https://www.weizmann.ac.il/chembiophys/bouchbinder/sites/chemphys.bouchbinder/files/uploads/Courses/2023/TA/TA3-Linear_elasticity-I.pdf))
> - $$d = e c^{-1}$$ is the piezoelectric strain constant (replacing the piezoelectric stress constant $$e$$, where $$e = dc$$)

The formal definitions of these values as defined [here (section 2.6)](http://rfc.nop.hu/ieee2/ANSI-IEEE%20Std%20176-1987.pdf):
- Compliance: $$c_{pr}^E s_{qr}^E = \delta_{pg}$$
- Piezoelectric strain constant: $$e_{ip} = d_{iq} c_{qp}^E$$

From these equations, we can define whether to solve for the strain or the stress. Each pair of equations require different definitions of materials:

> For the stress-charge form:
>
> $$T = c S - e E$$
>
> $$D = e S + \varepsilon E$$
>
> We must define in the material properties:
> - Elastic stiffness $$c$$
> - Piezoelectric stress matrix $$e$$
> - Dielectric permittivity $$\varepsilon$$

> For the strain-charge form:
>
> $$S = s T + d E$$
>
> $$D = d T + \varepsilon E$$
>
> We must define in the material properties:
> - Compliance $$s$$
> - Piezoelectric strain matrix $$d$$
> - Dielectric permittivity $$\varepsilon$$

A brief summary of the quantities from these equations, with their dimensions:

| Property | Meaning | Units | Dimensions |
|----------|---------|-------|------------|
| $$T$$ | Stress | MPa | 3x3 |
| $$S$$ | Strain | Dimensionless | 3x3 |
| $$E$$ | Electric Field | V/m = N/C | 3x3 |
| $$D$$ | Electric Displacement Field | F/m | 3x3 |
| $$c$$ | Elastic Stiffness | N/m^2 | 6x6 |
| $$s$$ | Compliance | m^2/N | 6x6 |
| $$e$$ | Piezoelectric stress constant | C/m^2 | 3x6 |
| $$d$$ | Piezoelectric strain constant | m/V C/N | 3x6 |
| $$\varepsilon$$ | Dielectric permittivity | F/m | 3x3 |

In Ansys, we can define the 3 material properties by inserting the following:
- Anisotropic Elasticity (in Linear Elastic)
- Anisotropic Relative Permittivity (in Electric)
- Piezoelectric Matrix (in Piezoelectric)

Note we also need to define the density of the material, to calculate stress and strain.

Throughout this analysis, we will use the strain-charge form of the equations, since the manufacturer provided me the compliance values instead of the stiffness.


### Assumptions

For the PK4GYP2 piezostack, consider the z axis to be the vertical (the 36mm side). Then, the x-y plane is parallel to the 7x7mm piezostack layers.

The assumptions done in this analysis are:

1\. The piezostack is transversely isotropic around the z axis.
- This means the x, y properties are the same. For example, the compliance $$s$$ and permittivity $$\varepsilon$$ in the x and y direction are the same.
- We assume this because the main axis of interest is the z-axis, which will be the direction of the applied load. Additionally, the manufacturer did not provide specific properties for x and y. Since the layers are geometrically symmetric in x and y, we can safely treat them as isotropic. 

2\. The Poisson ratio for all axis to be 0.3.
- The manufacturer did not specify the coupling compliances nor the Poisson ratio, so we must assume it to calculate the compliance matrix.
- We know the PK4GYP2 is made of lead zirconate titanate. In [this datasheet](https://www.fujicera.co.jp/wpkanri/wp-content/uploads/2023/11/The-material-characteristics-of-piezoceramics_2023.11E.pdf), we find that similar materials have a Poisson ratio around 0.3.
- This value $$\nu = 0.3$$ is used exclusively to calculate $$s_{12}$$ and $$s_{13}$$.

3\. The shear compliances $$s_{44},\ s_{55}$$ are set as 4.34782609e-11 m^2/N.
- The manufacturer did not specify the shear compliances $$s_{44},\ s_{55}$$.
- In our design, the shear stresses are expected to be small as the load is applied in the z-axis, aiming to keeping the load as vertical as possible since the piezostack is fragile at bending.
- To complete the compliance matrix, we can reuse the shear compliance values of a different PZT. In this case I refer to the PZT-5H as defined in Ansys.
- This implies the Young's modulus $$E_{55} = 2.3 \text{e+10}$$ N/m^2.
- Since we assume transversely isotropic, then $$s_{44} = s_{55}$$


### Anisotropic Elasticity

This is basically the elastic parameters of the material, aka the Young's Modulus and Poisson Ratio.

> As discussed [here](https://en.wikipedia.org/wiki/Hooke%27s_law#Matrix_representation_stiffness_tensor), we define a stiffness tensor $$c$$ to express Hooke's law as:
>
> $$[T]= [c][S]$$
>
> Where $$T$$ is stress, and $$S$$ is strain.
>
> We can also define it the other way around by inverting the stiffness tensor:
>
> $$s = c^{-1}$$
>
> Where $$s$$ is the compliance matrix. Then:
>
> $$[S] = [s][T]$$

- For the compliance matrix $$s$$, the diagonals represent the inverse of Young's and Shear Modulus, in this order: `X, Y, Z, YZ, XZ, XY`
- In Ansys, the `point group` setting refers to the material inner geometry, as discussed [here](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v252/en/wb_eda/eda_point_group.html). In our example, we assume the piezostack to be transversely isotropic in X and Y. The `6mm` setting basically represents this, as discussed in [this paper](https://doi.org/10.1063/1.340167).
- The IEEE and MAPDL formats order the diagonal items differently. I believe `X, Y, Z, YZ, XZ, XY` is the IEEE format, while in MAPDL it changes to `X, Y, Z, XY, YZ, XZ`. I assume this from the matrix definitions in Anisotropic Viscosity Example 5.1 in [here](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v251/en/ans_mat/mat_electricmagnet.html)

> As explained [here](https://en.wikipedia.org/wiki/Hooke%27s_law#Transversely_isotropic_materials) and [here](https://support.onscale.com/hc/en-us/articles/360002073378-Calculating-Piezoelectric-Material-Properties-from-Material-Datasheet), we can define the compliance matrix for transversely isotropic materials (z as the symmetry axis) as:
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

- Since we assume the piezostack is transversely isotropic, we assume $$E_y = E_x$$. Then, $$s_{11} = s_{22}$$.
- We assume a Poisson ratio of 0.3 for all axis, to calculate $$s_{12}$$ and $$s_{13}$$.
- For the shear compliances $$s_{44},\ s_{55}$$, we use the values from PZT-5H as defined in Ansys.
- Since the piezostack is isotropic in the x-y plane, we can actually calculate $$s_{66} = \frac{2(1 + \nu_{xy})}{E_x} = 2(s_{11} - s_{12})$$

With all this, we can define the compliance matrix:

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
fprintf('s_{11} = %.8e \n', S11);
fprintf('s_{33} = %.8e \n', S33);
fprintf('s_{44} = %.8e \n', S44);
fprintf('s_{66} = %.8e \n', S66);
fprintf('s_{12} = %.8e \n', S12);
fprintf('s_{13} = %.8e \n', S13);

fprintf('The rest should be automatically filled\n');
```

In Ansys, make sure to select:
- Format `IEEE`
- Point group `6mm`

If you need to define the elasticity for a different piezoelectric material, I recommend checking [this link](https://en.wikipedia.org/wiki/Hooke%27s_law#Transversely_isotropic_materials).


### Anisotropic Relative Permittivity

As defined [here](https://courses.cit.cornell.edu/ece303/Lectures/lecture17.pdf), the electric displacement field is proportional to the electric field by the equation:

$$D = \varepsilon E$$

Ansys uses a relative permittivity matrix $$\varepsilon_r$$ to calculate the material permittivity from the relationship mentioned [here](https://en.wikipedia.org/wiki/Relative_permittivity):

$$\varepsilon_r = \frac{\varepsilon}{\varepsilon_0}$$

Where $$\varepsilon_0 = 8.854 \times 10^{-12}$$ F/m is the permittivity of free space, as defined [here](http://rfc.nop.hu/ieee2/ANSI-IEEE%20Std%20176-1987.pdf).

Since the piezostack is anisotropic, the material permittivity is not a scalar but a 3x3 matrix:

> $$
> \begin{bmatrix}
> \varepsilon_{xx} & \varepsilon_{xy} & \varepsilon_{xz} \\
> \varepsilon_{yx} & \varepsilon_{yy} & \varepsilon_{yz} \\
> \varepsilon_{zx} & \varepsilon_{zy} & \varepsilon_{zz}
> \end{bmatrix}
> $$

> Important: The permittivity may be measured at a constant strain $$\varepsilon^S$$ or at a constant stress $$\varepsilon^T$$. Double check which one you have, and configure Ansys to the correct version.


Sources:
- [IEEE Standard on Piezoelectricity](http://rfc.nop.hu/ieee2/ANSI-IEEE%20Std%20176-1987.pdf)
- [Waves in Anisotropic Media](https://courses.cit.cornell.edu/ece303/Lectures/lecture17.pdf)
- [Anisotropic dielectric permittivity](https://www.doitpoms.ac.uk/tlplib/anisotropy/dielectric.php)
- [Thorlabs: Piezoelectric Basic Background and Operation Tutorial](https://www.thorlabs.com/piezoelectric-tutorial?tabName=Operational%20Theory)
- [Ansys: Piezoelectrics](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v242/en/ans_thry/thy_coup2.html)
- [Ansys: Piezoelectric Analysis](https://ansyshelp.ansys.com/public/account/secured?returnurl=/Views/Secured/corp/v242/en/ans_cou/Hlp_G_COU3_piezo.html)
- [Ansys: Anisotropic Relative Permittivity Tensors](https://ansyshelp.ansys.com/public/Views/Secured/Electronics/v251/en/Subsystems/HFSS/HFSS.htm#HFSS/AnisotropicRelativePermittivityTensors.htm)
- [Ansys: Defining Anisotropic Relative Permittivity Tensors](https://ansyshelp.ansys.com/public/Views/Secured/Electronics/v242/en/Subsystems/Maxwell/Content/DefiningAnisotropicRelativePermittivityTensors.htm)
- [Autodesk: How Piezoelectricity Works to Make Crystals Conduct Electric Current](https://www.autodesk.com/products/fusion-360/blog/piezoelectricity/)
- [OnScale: Calculating Piezoelectric Material Properties from Material Datasheet](https://support.onscale.com/hc/en-us/articles/360002073378-Calculating-Piezoelectric-Material-Properties-from-Material-Datasheet)
- [Electrical Permittivity (Stefan Holzer)](https://www.iue.tuwien.ac.at/phd/holzer/node46.html)
- [MIT: Displacement current. Maxwell’s equations](https://web.mit.edu/sahughes/www/8.022/lec19.pdf)
- [Wikipedia: Hooke's Law](https://en.wikipedia.org/wiki/Hooke%27s_law#Transversely_isotropic_materials)
- [Wikipedia: Stiffness Matrix](https://en.wikipedia.org/wiki/Stiffness_matrix)
- [Wikipedia: Capacitor](https://en.wikipedia.org/wiki/Capacitor)
- [Wikipedia: Permittivity](https://en.wikipedia.org/wiki/Permittivity)
- [Wikipedia: Relative Permittivity](https://en.wikipedia.org/wiki/Relative_permittivity)
- [Wikipedia: Electric Displacement Field](https://en.wikipedia.org/wiki/Electric_displacement_field)
- [Wikipedia: Maxwell Equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations)