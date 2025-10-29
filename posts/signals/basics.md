---
layout: post
title: basics
card_title: "Signals: The basics"
math: true
url: /posts/signals/basics
excerpt: "1, 2, 3: Basic properties, operations, and simple signals"
date: 2025-10-16
tech_stack: [Signals]
---

## Properties

Continuous (CT) vs discrete (DT)

### Periodicity

- CT $$x(t + nT) = x(t)$$ for all $$t$$
  - Frequency $$f = \frac{1}{T}$$ where $$T$$ is the period
- DT $$x[n + kN] = x[n]$$ for all $$n$$

The domain of a periodic signal is $$(-\infty, \infty)$$

See example exercises [here](#type-1-continuous-periodic-signals)

### Deterministic vs random

If the signal can be represented by an equation (ex: sin, cos vs random data)

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

> Any complex signal (with imaginary number) can be broken down into a conjugate-symmetric and conjugate-antisymmetric (CS, CA):
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

$$P_x = \frac{1}{T_0} \int_{t_1}^{t_1 + T_0} \left| {x(t)} \right|^2 = \frac{1}{T_0} E$$

$$P_x = \frac{1}{N_0} \sum_{n_1}^{n_1 + N_0 -1} \left| {x[n]} \right| ^2 = \frac{1}{N_0} E$$

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
- Given a function $$f(t)$$:
  - The product $$f(t) \delta(t) = f(0) \delta(t)$$
  - General form: $$f(t) \delta(t - t_0) = f(t_0) \delta(t - t_0)$$
- The integral $$\int_{-\infty}^{\infty}\delta (t) = 1$$

$$u(t)$$ and $$\delta (t)$$ are related:

> $$\delta (t) = \frac{du(t)}{dt}$$
>
> $$u(t) = \int_{-\infty}^{t}\delta(\tau)d\tau$$

***

# Problems

## Type 1: Continuous Periodic Signals

Given:
- Some continuous time equation $$x(t)$$

Find:
- The fundamental period $$T$$, if periodic

Process:

1. Solve for $$nT$$:

$$
x(t + nT) = x(t)
$$

The $$t$$ should cancel out in the process, leaving an equation in terms of $$nT$$.

IF ($$t$$ remains, or $$T \leq 0$$):  
  => $$x(t)$$ is non-periodic

IF x(t) is of type sin, cos:
- Rewrite in structure $$\sin(\omega t + 2\pi k) = \sin(\omega t + \omega nT)$$
- Get $$2\pi k = \omega nT$$
- Let $$k = n$$, then $$T = \frac{2\pi}{\omega}$$

IF ($$x(t) = a(t) + b(t)$$ where $$a,\ b$$ are both periodic):  
=> $$T_x = LCM(T_a,\ T_b)$$ (least common multiple)  
NOTE: $$T_x$$ from the LCM may be irrational ($$\pi, \sqrt{2}$$), but the multipliers of $$T_a,\ T_b$$ MUST be integers to reach the LCM

If T applies for all n (where n is an int):  
=> $$x(t)$$ is periodic, with period T

### Type 1 Examples

Answers in the [bottom](#answers).

$$e^{it}$$

$$e^t$$

$$ln \mid t \mid$$

$$\sin \sqrt{2}t$$

$$\sin t + \sin \pi t$$

$$\sin{t^2}$$

$$e^{j(2t+7)}$$

$$5\cos(3\pi t) + 3\cos(5\pi t)$$

***

## Type 2: Discrete Periodic Signals

Given:
- Some discrete time equation $$x[n]$$

Find:
- The fundamental period $$N$$, if periodic

Process:

1. Model $$x[n]$$ as continuous $$x(t)$$

2. Follow steps in continuous model [above](#type-1-continuous-periodic-signals)

IF ($$x(t)$$ is non-periodic):  
  => $$x[n]$$ is non-periodic

IF ($$T$$ is non-integer):  
  => $$x[n]$$ is non-periodic

IF ($$T$$ is a positive integer):  
  => $$x[n]$$ is periodic with period $$N = T$$

### Type 2 Examples

Try [Type 1 examples](#type-1-examples), considering the functions as DT.

***

## Answers

### Type 1, 2

| Function                          | Period $$T$$ (CT) | Period $$N$$ (DT) |
|-----------------------------------|-------------------|-------------------|
| $$e^{it}$$                        | $$T = 2\pi$$      | Non-periodic      |
| $$e^t$$                           | Non-periodic      | Non-periodic      |
| $$ln \mid t \mid$$                | Non-periodic      | Non-periodic      |
| $$\sin t\sqrt{2}$$                | $$T = \pi \sqrt{2}$$ | Non-periodic   |
| $$\sin t + \sin \pi t$$           | Non-periodic      | Non-periodic      |
| $$\sin{t^2}$$                     | Non-periodic      | Non-periodic      |
| $$e^{j(2t+7)}$$                   | $$T = \pi$$       | Non-periodic      |
| $$5\cos(3\pi t) + 3\cos(5\pi t)$$ | $$T = 2$$         | $$N = 2$$         |
