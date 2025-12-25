---
layout: post
title: test
card_title: "test"
math: true
url: /posts/mechanics/test
excerpt: "mytest"
date: 2025-12-25
tech_stack: [Mechanics]
---

# Problem Type 5

A simply supported beam with a uniform shape (rectangular, circular) holds a weight (uniformly distributed or concentrated). A point X in the beam is of interest.

Given:
- Load: q (distributed, N/m) or P (concentrated, N)
- Point X coordinates (x, y)
- Beam dimensions (width, height, diameter...)
- No axial (horizontal) load

Find:
- Stresses at point X

## Solution

### 1. Find internal force and moment in point X

Let internal force be $$V_x$$, moment $$M_x$$.

> For concentrated load $$P$$ at distance $$m$$ from origin:
>
> $$V_x = \frac{P(L - m)}{L}, \quad M_x = \frac{Px(L - m)}{L}, \quad 0 < x < m$$
>
> $$V_x = -\frac{Pm}{L}, \quad M_x = \frac{Pm}{L}(L - x), \quad m < x < L$$

> For uniformly distributed load:
>
> $$V_x = \frac{qL}{2} - qx, \quad M_x = \frac{qLx}{2} - \frac{qx^2}{2}$$

### 2. Find moment of inertia

> For rectangular cross section, width $$b$$, height $$h$$:
>
> $$I = \frac{bh^3}{12}$$

> For circular cross section, diameter $$d$$:
>
> $$I = \frac{\pi d^4}{64}$$

### 3. Calculate stresses

> $$\sigma_x = -\frac{M_x y}{I}$$

> For rectangular beam:
>
> $$\tau_x = \frac{V_x}{2I} \left( \frac{h^2}{4} - y^2 \right)$$

For $$\sigma_x < 0$$, the stress is compressive.


## Example

```matlab
%% Inputs
y = 25e-3; % m (distance from point to neutral axis)
q = 28e+3; % N/m (distributed load)
L = 1; % m (length of beam)
x = L - 0.2; % m (x coord of point)
b = 25e-3; % m (beam width)
h = 100e-3; % m (beam height)
% Here the beam is rectangular.

%% Calculations
Vc = (q*L)/2 - q*x;
Mc = (1/2)*q*L*x - (1/2)*q*(x^2);
I = (b*(h^3))/12;
omega = -(Mc*y)/I;
Tc = (Vc/(2*I)) * ((h^2)/4 - y^2);

%% Print
disp("Mc = " + Mc + " N*m")
disp("I = " + I + " m^4")
disp("omega_c = " + omega + " N/m^2")
disp("tau_c = " + Tc + " N/m^2")
```