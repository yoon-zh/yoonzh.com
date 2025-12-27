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

> For cantilevers, concentrated load $$P$$:
>
> $$V_x = P,\quad M_x = P(L - x)$$
>
> For cantilevers, uniform load $$q$$:
>
> $$V_x = q(L - x),\quad M_x = \frac{q(L - x)^2}{2}$$

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

***

# Problem Type 10

An element is under plane stress.
Given:
- Stress profile $$\sigma_x,\ \sigma_y,\ \tau_{xy}$$

Find:
- Principal stresses $$\sigma_1,\ \sigma_2$$
- Maximum shear stress $$\tau_{\text{max}}$$
- Draw the principal stresses on a properly oriented plane
- Draw the max shear stress on a properly oriented plane

## Solution

### 1. Find $$\sigma_{\text{avg}}$$, $$sigma_{\text{diff}}$$:

> $$\sigma_{\text{avg}} = \frac{\sigma_x + \sigma_y}{2}$$
>
> $$\sigma_{\text{diff}} = \sigma_x - \sigma_y$$


### 2. Find $$\tau_{\text{max}}$$:

> $$\tau_{\text{max}} = \sqrt{\frac{\sigma_{\text{diff}}^2}{4} + \tau_{xy}^2}$$


### 3. Find the principal stresses

> $$\sigma_1 = \sigma_{\text{avg}} + \tau_{\text{max}}$$
>
> $$\sigma_2 = \sigma_{\text{avg}} - \tau_{\text{max}}$$

Note: $$\tau_{\text{max}} = \frac{\sigma_1 - \sigma_2}{2}$$. AND $$\sigma_x + \sigma_y = \sigma_1 + \sigma_2$$. Use these to verify your values.


### 4. Find the angles for the drawing

> $$\theta_p = \frac{1}{2} \arctan \frac{2\tau_{\text{xy}}}{\sigma_{\text{diff}}}$$
>
> $$\theta_s = \frac{1}{2} \arctan \frac{\sigma_{\text{diff}}}{2\tau_{\text{xy}}}$$


### 5. Assign principal angles

To verify which angle is for $$\sigma_1$$ and $$\sigma_2$$, the safe way is to replace in the typical transformation equation. For example:

> $$\sigma_{x1} =\sigma_{\text{avg}} + \frac{\sigma_{\text{diff}}}{2} \cos{2\theta_p} + \tau_{\text{xy}} \sin{2\theta}$$
>
> If $$\sigma_{x1} = \sigma_{1}$$, then $$\theta_{p1} = \theta_p$$ and $$\theta_{p2} = \theta_p + 90°$$.
>
> Otherwise, $$\theta_{p2} = \theta_p$$ and $$\theta_{p1} = \theta_p + 90°$$.

Verify that $$\theta_s = \theta_{p1} \pm 45°$$.

## Example

```matlab
%% Inputs
sigma_x = 86; % MPa
sigma_y = -28; % MPa
tau_xy = -32; % MPa

% Positive => tensile
% negative => compressive

% For shear stress
% Positive => points to (+)(+) and (-)(-) quadrants
% negative => points to (-)(+) and (+)(-) quadrants
%% Calculations
sigma_diff = sigma_x - sigma_y;

sigma_avg = (sigma_x + sigma_y)/2;
tau_max = sqrt((sigma_diff^2)/4 + tau_xy^2);

sigma_1 = sigma_avg + tau_max;
sigma_2 = sigma_avg - tau_max;

theta_p = 0.5*atand(2*tau_xy/sigma_diff);
theta_s = 0.5*atand(-sigma_diff/(2*tau_xy));

% Assign principal angles
theta_1 = theta_p;
theta_2 = theta_p;

sigma_test = sigma_avg + (sigma_diff/2)*cosd(2*theta_p) + tau_xy*sind(2*theta_p);
if (abs(sigma_1 - sigma_test) < 1e-6)
    theta_2 = theta_2 + 90;
else
    theta_1 = theta_1 + 90;
end

%% Print
disp("\sigma_1 = " + sigma_1 + " MPa")
disp("\sigma_2 = " + sigma_2 + " MPa")
disp("\tau_{max} = " + tau_max + " MPa")

disp("\theta_p = " + theta_p + " deg")
disp("\theta_s = " + theta_s + " deg")

disp("\theta_1 = " + theta_1 + " deg")
disp("\theta_2 = " + theta_2 + " deg")
```
