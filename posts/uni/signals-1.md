---
layout: post
title: signals-1
card_title: "Signals: The basics"
math: true
url: /posts/uni/signals-1
date: 2025-10-16
---

## Properties

Continuous (CT) vs discrete (DT)

### Periodicity

- CT $$x(t + nT) = x(t)$$ for all $$t$$
  - Frequency $$f = \frac{1}{T}$$
- DT $$x[n + kN] = x[n]$$ for all $$n$$

### Deterministic vs random

If the signal can be represented by an equation (ex: sin, cos)

### Symmetry - Even, Odd

> Even: $$x_e (t) = x_e (-t)$$
>
> Odd: $$x_o (t) = -x_o (-t)$$

Say we have two functions $$f, g$$. Then

| Function types | $$f+g$$ | $$f \times g$$ |
|----------------|---------|----------------|
| $$f, g$$ even      | Even    | Odd  |
| $$f, g$$ odd       | Odd     | Even |
| one even, one odd  | Neither | Odd  |

> Any function can be broken down into an even and odd component:
>
> $$x(t) = x_e (t) + x_o (t)$$
>
> $$x_e(t) = \frac{1}{2} (x(t) + x(-t))$$
>
> $$x_o(t) = \frac{1}{2} (x(t) - x(-t))$$

> Any signal can be broken down into a conjugate-symmetric and conjugate-antisymmetric (CS, CA):
>
> $$x(t) = x_{CS} (t) + x_{CA} (t)$$
>
> $$x_{CS} (t) = \frac{x(t) + x^* (-t)}{2}$$
>
> $$x_{CA} (t) = \frac{x(t) - x^* (-t)}{2}$$
>
> This is useful for functions with complex values, like $$e^{jt}$$

### Energy

CT

$$E = \int_{T_1}^{T_2} \left| {x(t)} \right|^2 dt$$

DT

$$E = \sum_{n=N_1}^{N_2} \left| {x[n]} \right| ^2$$

For total energy, the time interval is $$(-\infty, \infty)$$

### Power

$$P_x = \frac{1}{T_0} \int_{t_1}^{t_1 + T_0} \left| {x(t)} \right|^2$$

$$P_x = \frac{1}{N_0} \sum_{n_1}^{n_1 + N_0 -1} \left| {x[n]} \right| ^2$$

Which is basically the average of energy in some time (the above is average power).

> A signal with finite energy has 0 power, and a signal with finite power has $$\infty$$ energy

***

## Operations

Time shifting $$x(t-T)$$

Time scaling $$x(kt)$$

> For DT, time scaling $$x[kn]$$ creates or deletes values from the signal:
>
> if (k > 1) => y[n] = x[kn] retains values only from the scale (x[0], x[M], x[2M]...), and other values in between are removed.
>
> if (k < 1) => y[n] = x[kn] interpolates from original values to create the new ones

Time reversal $$x(-t)$$ mirror y-axis

Combined operations $$x(at + b) = x(a(t + \frac{b}{a}))$$, first scale then shift

***

## Elementary Signals

Unit step $$u(t) = 1$$ if $$t > 0$$, otherwise 0

Rectangular pulse $$rect(\frac{t}{\tau}) = 1$$
if $$|t| < \frac{\tau}{2}$$

Signum (sign) $$sgn(t)$$ is 1 times the sign of $$t$$, or 0 if $$t = 0$$

Ramp $$r(t) = tu(t)$$

Sines $$A\sin(\omega t + \theta)$$
- Angular frequency $$\omega = 2\pi f$$

Sinc $$sinc(kt) = \frac{\sin(kt)}{kt}$$

Exponential $$e^{j\omega t}$$

Unit impulse $$\delta (t) = 1$$ only at $$t=0$$, and 0 otherwise

### Unit impulse $$\delta (t)$$

- $$\delta (t) = \delta (-t)$$ (even)
- Given a function $$f(t)$$, the product $$f(t) \delta(t) = f(0) \delta(t)$$
- The integral $$\int_{-\infty}^{\infty}\delta (t) = 1$$

$$u(t)$$ and $$\delta (t)$$ are related:

> $$\delta (t) = \frac{du(t)}{dt}$$
>
> $$u(t) = \int_{-\infty}^{t}\delta(\tau)d\tau$$