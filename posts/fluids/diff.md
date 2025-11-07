---
layout: post
title: diff
card_title: "Fluids Differential Analysis"
math: true
url: /posts/fluids/diff
excerpt: "navier"
date: 2025-11-06
tech_stack: [Fluids]
---

Given a 3D velocity field $$\vec{V}(x, y, z) = u\hat{i} + v\hat{j} + w\hat{k}$$:

| Property                        | Equation                                                                              | Type      |
|---------------------------------|---------------------------------------------------------------------------------------|-----------|
| Acceleration $$a$$              | $$a = \frac{d\vec{V}}{dt}$$                                                           | Vector    |
| Vorticity $$\zeta$$             | $$\zeta = \nabla \times \vec{V}$$                                                     | Vector    |
| Angular Velocity $$\omega$$     | $$\omega = \frac{1}{2} \zeta$$                                                        | Vector    |
| Angular Deformation $$\Omega$$  | $$\Omega_{xy} = \frac{\partial v}{\partial x} + \frac{\partial u}{\partial y}$$       | 2D Scalar |
| Dilatation rate                 | $$\nabla \cdot \vec{V}$$                                                              | Scalar    |
| Continuity Eq                   | $$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{V}) = 0$$                | Scalar    |
| Stream Function                 | $$u = \frac{\partial \Psi}{\partial y},\quad v = -\frac{\partial \Psi}{\partial x}$$  | 2D Scalar |
| Navier-Stokes                   | $$\rho \frac{D\vec{V}}{Dt} = -\nabla P + \rho g + \mu \nabla^2 V$$                | Vector    |


## Acceleration

> $$a = \frac{d\vec{V}}{dt}$$
>
>$$a =
\frac{\partial \vec{V}}{\partial t}
+ u\frac{\partial \vec{V}}{\partial x}
+ v\frac{\partial \vec{V}}{\partial y}
+ w\frac{\partial \vec{V}}{\partial z}
$$

Where 
- $$a$$ is acceleration field (vector) in $$m/s^2$$
- $$\frac{d\vec{V}}{dt} = \frac{D\vec{V}}{Dt}$$ is the [material derivative](fluid-dynamics-basics.html#:~:text=Material,derivative) of $$\vec{V}$$, viewed from a Lagrangian POV[^1] (vector)
- $$\frac{\partial \vec{V}}{\partial t}$$ is the local acceleration (variation of velocity at a fixed point)
- $$u\frac{\partial \vec{V}}{\partial x} + v\frac{\partial \vec{V}}{\partial y} + w\frac{\partial \vec{V}}{\partial z}$$ is the acceleration from spatial variations

In steady-state: $$\frac{\partial \vec{V}}{\partial t} = 0$$


## Vorticity

> $$\zeta = \nabla \times \vec{V}$$

Where 
- $$\zeta$$ is vorticity (vector) in rad/s
- $$\nabla \times \vec{V} = \text{curl}\ \vec{V}$$ (read [curl](../math/3d.html#:~:text=Curl,-cur))

We say the fluid is irrotational (does not rotate) when $$\zeta = 0$$.

### Angular velocity

$$\omega = \frac{1}{2} \zeta$$

Where
- $$\omega$$ is angular velocity (vector) in rad/s
- $$\zeta$$ is vorticity (vector)


## Angular deformation

> $$\Omega_{xy} = \frac{\partial v}{\partial x} + \frac{\partial u}{\partial y}$$
>
> $$\Omega_{xz} = \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}$$
>
> $$\Omega_{yz} = \frac{\partial w}{\partial y} + \frac{\partial v}{\partial z}$$

Where $$\Omega$$ is the angular deformation (scalar) in rad/s. Note $$\Omega$$ is calculated in a 2D plane.


## Dilatation rate

> $$\text{dilatation rate} = \nabla \cdot \vec{V}$$
>
> $$\text{dilatation rate} = \frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z}$$

Where 
- The dilatation rate (scalar) is in Hz ($$s^{-1}$$)
- $$\nabla \cdot \vec{V} = \text{div}\ \vec{V}$$ (read [div](../math/3d.html#:~:text=F-,Div))

Dilatation rate tells whether a fluid is expanding or compressing (volume is changing).

If fluid is incompressible: $$\nabla \cdot \vec{V} = 0$$


## Continuity Equation

> $$\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \vec{V}) = 0$$
>
> $$\frac{\partial \rho}{\partial t} + \frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} + \frac{\partial (\rho w)}{\partial z} = 0$$

Where $$\rho$$ is [density](properties.html#:~:text=Density)

In steady-state: $$\frac{\partial \rho}{\partial t} = 0$$


## Stream Function

For incompressible 2D flow, from continuity equation:

$$\frac{\partial (\rho u)}{\partial x} + \frac{\partial (\rho v)}{\partial y} = 0$$

We can define a function $$\Psi$$ that describes $$u,\ v$$ to define streamlines:

> $$u = \frac{\partial \Psi}{\partial y},\quad v = -\frac{\partial \Psi}{\partial x}$$

Using some basic 3D calc we can get $$\Psi(x,y)$$. We define streamlines as $$\Psi(x,y) = k$$, where $$k$$ is any constant.

***

## Navier-Stokes

Given an incompressible fluid (density $$\rho$$ is constant) and the velocity field $$V(x,y,z) = u\hat{i} + v\hat{j} + w\hat{k}$$, where $$u,\ v,\ w$$ represent the velocity field in the $$x,\ y,\ z$$ axis respectively:

> $$\rho \frac{DV}{Dt} = - \nabla P + \rho g + \mu \nabla^2 V$$
>
> $$\rho \left(\frac{\partial V}{\partial t} + V \cdot \nabla V \right) = -\nabla P + \rho g + \mu \nabla^2 V$$

Where
- $$\rho$$ is [density](properties.html#:~:text=Density) in $$kg/m^3$$
- $$\frac{DV}{Dt}$$ is the [acceleration](#acceleration) in $$m/s^2$$
- $$\nabla P$$ is the [gradient](../math/3d.html#:~:text=Scalar-,Gradient) of pressure, in Pa/m
- $$\rho g$$ is the force due to gravity (may replace if an external force applies), in $$kg/m^3 \cdot m/s^2 = Pa/m$$
- $$\mu \nabla^2 V$$ is the viscous diffusion of momentum, in $$Pa\cdot s \cdot m/s \cdot 1/m^2 = Pa/m$$


Per component:

$$u: \quad 
\rho \left(
  \frac{\partial u}{\partial t} 
  + u \frac{\partial u}{\partial x} 
  + v \frac{\partial u}{\partial y} 
  + w \frac{\partial u}{\partial z}
\right) = 
- \frac{\partial P}{\partial x}
+ \rho g_x
+ \mu \left(
  \frac{\partial^2 u}{\partial x^2}
  + \frac{\partial^2 u}{\partial y^2}
  + \frac{\partial^2 u}{\partial z^2}
\right)$$

$$v: \quad 
\rho \left(
  \frac{\partial v}{\partial t} 
  + u \frac{\partial v}{\partial x} 
  + v \frac{\partial v}{\partial y} 
  + w \frac{\partial v}{\partial z}
\right) = 
- \frac{\partial P}{\partial y}
+ \rho g_y
+ \mu \left(
  \frac{\partial^2 v}{\partial x^2}
  + \frac{\partial^2 v}{\partial y^2}
  + \frac{\partial^2 v}{\partial z^2}
\right)$$

$$w: \quad 
\rho \left(
  \frac{\partial w}{\partial t} 
  + u \frac{\partial w}{\partial x} 
  + v \frac{\partial w}{\partial y} 
  + w \frac{\partial w}{\partial z}
\right) = 
- \frac{\partial P}{\partial z}
+ \rho g_z
+ \mu \left(
  \frac{\partial^2 w}{\partial x^2}
  + \frac{\partial^2 w}{\partial y^2}
  + \frac{\partial^2 w}{\partial z^2}
\right)$$

Also:

> Given incompressible flow:
>
> $$\text{div}\ V = 0$$
> 
> $$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} + \frac{\partial w}{\partial z} = 0$$

Where
- The component $$\frac{\partial V}{\partial t} = \frac{\partial u}{\partial t} + \frac{\partial v}{\partial t} + \frac{\partial w}{\partial t}$$

### Diffusion term $$\mu \nabla^2 V$$

Consider a 1D problem about shear stress:

$$\tau_{xy} = \mu \frac{\partial u}{\partial y}$$

Then the force per volume is:

$$\frac{\partial \tau_{xy}}{dy} = \mu \frac{\partial^2 u}{\partial y^2}$$

In 3D we consider forces from all direction, thus 

***

## Simplifying Navier-Stokes

> Steady:
>
> All time derivatives are 0.
>
> $$\frac{\partial V}{\partial t} = 0$$
>
> Per component:
>
> $$\frac{\partial u}{\partial t} = \frac{\partial v}{\partial t} = \frac{\partial w}{\partial t} = 0$$

> Flow along a specific axis (for example, $$x$$):
>
> $$u \neq 0,\ v = 0,\ w = 0$$
>
> If flow is incompressible, then also:
>
> $$\text{div}\ V = 0$$
>
> $$\frac{\partial^n u}{\partial x^n} = \frac{\partial^n v}{\partial y^n} = \frac{\partial^n w}{\partial z^n} = 0$$
>
> Each component of the div is 0 if flow along a specific axis + incompressible. Then any of its derivatives of order n is also 0.

Navier-Stokes is solvable by hand (analytically) for steady laminar flow between stationary parallel plates.


## Reynold's number

$$\text{Re} = \frac{\rho V L}{\mu}$$

Where
- $$\text{Re}$$ is Reynold's number
- $$V$$ is velocity
- $$L$$ is 
- $$\mu$$ is viscosity

The bigger $$\text{Re}$$ is, the more turbulent the flow is.

If we have a plane with a very smooth surface, it has less air resistance but it causes the air to be more turbulent, since the viscous forces become smaller.

## Dict

[^1]: Lagrangian point of view: From the perspective of the moving material (fluid), different from the perspective of an exterior observer (Eulerian).