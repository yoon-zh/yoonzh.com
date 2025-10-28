---
layout: post
title: fluid-streamlines
card_title: "Streamlines"
math: true
url: /posts/fluids/fluid-streamlines
excerpt: "Structural statics, but with fluids"
date: 2025-10-25
---

## Streamlines

> $$\frac{dx}{v_x} = \frac{dy}{v_y} = \frac{dz}{v_z}$$

Where
- $$dx,\ dy,\ dz$$ are components of the fluid location vector
- $$v_x,\ v_y,\ v_z$$ are components of the velocity vector

If you receive a vector equation of velocity, treat $$dx,\ dy,\ dz$$ as differential elements and integrate to get the streamline equation. The result should have a constant, which creates the multiple beautiful streamlines you see in pictures. If 2D, rewrite as $$y(x)$$ if possible.

### Pathlines

> $$\frac{dx}{dt} = v_x,\quad \frac{dy}{dt} = v_y,\quad \frac{dz}{dt} = v_z$$

Where
- $$dx,\ dy,\ dz$$ are components of the fluid location vector
- $$v_x,\ v_y,\ v_z$$ are components of the velocity vector

If you need the equation for a pathline, treat $$dx,\ dy,\ dz$$ as differential elements like with streamlines. There should be separate equations $$x(t),\ y(t),\ z(t)$$ for each coordinate.

Streamlines, pathlines, and streaklines are basically the same in steady state.

### Material derivative

Say we have a velocity and pressure fields, where each equation only has coordinate variables but no time. Remember this:

$$
a_x = \frac{\partial v_x}{\partial t} + v_x \frac{\partial v_x}{\partial x} + v_y \frac{\partial v_x}{\partial y} + v_z \frac{\partial v_x}{\partial z}
$$

$$
a_y = \frac{\partial v_y}{\partial t} + v_x \frac{\partial v_y}{\partial x} + v_y \frac{\partial v_y}{\partial y} + v_z \frac{\partial v_y}{\partial z}
$$

$$
a_z = \frac{\partial v_z}{\partial t} + v_x \frac{\partial v_z}{\partial x} + v_y \frac{\partial v_z}{\partial y} + v_z \frac{\partial v_z}{\partial z}
$$

Then,

$$
\frac{d?}{d t} = \frac{\partial ?}{\partial t} + v_x \frac{\partial ?}{\partial x} + v_y \frac{\partial ?}{\partial y} + v_z \frac{\partial ?}{\partial z}
$$

Replace the (?) with your param (pressure, temperature, etc).

In short, derivate per variable with respect to all other vars, and multiply them by the corresponding velocity components.

## Volume flow rate

> $$Q = AV$$

Where
- $$Q$$ is volume flow rate
- $$A$$ is area (of tube, where the fluid flows)
- $$V$$ is velocity (normal to the area A)

## Mass flow rate

> $$\dot m = \rho Q$$

Where
- $$\dot m$$ is mass flow rate
- $$\rho$$ is [density](fluids-1.html#:~:text=Density)
- $$Q$$ is [volume flow rate](#volume-flow-rate)

If we assume conservation of mass ($$\dot m_{in} = \dot m_{out}$$), we have the following equation:

$$\rho_1 A_1 V_1 = \rho_2 A_2 V_2$$

Where
- $$\rho$$ is [density](fluids-1.html#:~:text=Density)
- $$A$$ is area (of tube, where the fluid flows)
- $$V$$ is velocity (normal to the area A)

In many cases (like a fluid through a pipe), $$\rho_1 = \rho_2$$ in which case $$A_1 V_1 = A_2 V_2$$. This can be useful along with the equation [below](#bernoulli-equation).

***

## Bernoulli Equation

Within a streamline:

> $$p + \frac{1}{2} \rho V^2 + \gamma h = k$$

Where
- $$p$$ is fluid pressure (static)
- $$\rho$$ is [density](fluids-1.html#:~:text=Density)
- $$V$$ is velocity
- $$\gamma$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight)
- $$h$$ is height
- $$k$$ is a constant

Bernoulli Eq assumes 3 conditions:
1. Steady, laminar flow
2. Energy is conserved along streamline (inviscid, frictionless)
3. Fluid is incompressible (constant density through different pressure/temperature)

Consider this equation as a child of the [pressure distribution equation](fluid-statics.html#:~:text=Pressure,Distibution), but now we add the term $$\frac{1}{2} \rho V^2$$ as the dynamic pressure. Watch [this video](https://www.youtube.com/watch?v=DW4rItB20h4) to understand the equation better.

### Stagnation Pressure

> $$p_s = p_{\infty} + \frac{1}{2} \rho V_{\infty}^2$$

Where
- $$p_s$$ is stagnation pressure
- $$p_{\infty}$$ is static pressure
- $$\rho$$ is [density](fluids-1.html#:~:text=Density)
- $$V_{\infty}$$ is upstream velocity

Stagnation means velocity is 0.