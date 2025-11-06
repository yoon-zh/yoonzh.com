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

## Navier-stokes

Given an incompressible fluid (density $$\rho$$ is constant) and the velocity field $$V(x,y,z) = u\vec{i} + v\vec{j} + w\vec{k}$$, where $$u,\ v,\ w$$ represent the velocity field in the $$x,\ y,\ z$$ axis respectively:

> $$\rho \frac{DV}{Dt} = - \nabla \rho + \rho g + \mu \nabla^2 V$$
>
> $$\rho \left(\frac{\partial V}{\partial t} + V \cdot \nabla V \right) = - \nabla \rho + \rho g + \mu \nabla^2 V$$

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
- \frac{\partial P}{\partial x}
+ \rho g_x
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
- \frac{\partial P}{\partial x}
+ \rho g_x
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

> Steady:
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

## Reynolds number

$$\text{Re} = \frac{\rho V L}{\mu}$$

Where
- $$\text{Re}$$ is Reynold's number
- $$V$$ is velocity
- $$L$$ is 
- $$\mu$$ is viscosity

The bigger $$\text{Re}$$ is, the more turbulent the flow is.

If we have a plane with a very smooth surface, it has less air resistance but it causes the air to be more turbulent, since the viscous forces become smaller.