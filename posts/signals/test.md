---
layout: hidden
title: signalst
card_title: "signals test"
math: true
url: /posts/signals/test
excerpt: "tgest"
date: 2025-12-30
tech_stack: [Signals]
---

- Basics
- Given x(t) (eq or graph), energy/power, draw signal and shiftings
- Given a block diagram of h_i(t), find H(j\Omega)
- Classification

# Type 1: Basics

Given:
- $$x(t)$$ (equation or graph)

Find:
1. Graph from eq (or viceversa)
2. Period $$T$$
3. Even, odd part of $$x(t)$$
4. Shifted, expanded signal $$x(at + b)$$
5. Whether $$x(t)$$ is finite energy or finite power signal

## Solution

### 1. Graph/Eq

Remember [elementary signals](basics.html#:~:text=Elementary,Signals) (particularly $$u(t),\ \delta(t)$$)

### 2. Period $$T$$

> For a signal to be periodic, it must fulfill the condition: 
>
> $$x(t + nT) = x(t)$$

See step by step [here](basics.html#:~:text=Problems)

Some highlights:
IF ($$x(t) = a(t) + b(t)$$ where $$a,\ b$$ are both periodic):  
=> $$T_x = LCM(T_a,\ T_b)$$ (least common multiple)  
NOTE: $$T_x$$ from the LCM may be irrational ($$\pi, \sqrt{2}$$), but the multipliers of $$T_a,\ T_b$$ MUST be integers to reach the LCM

### 3. Even, odd

From [basics](basics.html#:~:text=Symmetry):

> Any function can be broken down into an even and odd component:
>
> $$x(t) = x_e (t) + x_o (t)$$
>
> $$x_e(t) = \frac{1}{2} (x(t) + x(-t))$$
>
> $$x_o(t) = \frac{1}{2} (x(t) - x(-t))$$

The fundamental you MUST remember: $$e^{j\omega}$$

$$\text{Even} (e^{j\omega}) = \cos{\omega}$$

$$\text{Odd} (e^{j\omega}) = j\sin{\omega}$$

In such way,

$$\cos{\omega} = \frac{1}{2}(e^{j\omega} + e^{-j\omega})$$

$$\sin{\omega} = -\frac{j}{2}(e^{j\omega} - e^{-j\omega})$$

### 4. Shifted, Expanded signal $$x(at + b)$$

From [basics](basics.html#:~:text=Combined,operations): First scale then shift

$$x(at + b) = x \left(a \left(t + \frac{b}{a} \right) \right)$$

### 5. Energy, Power

From [basics](basics.html#:~:text=Energy):

$$E = \int_{T_1}^{T_2} \left| {x(t)} \right|^2 dt$$

$$E = \sum_{n=N_1}^{N_2} \left| {x[n]} \right| ^2$$

$$P_x = \frac{1}{T_0} E$$

Where the T, N mean to consider only one period.

> A signal with finite energy has 0 power, and a signal with finite power has $$\infty$$ energy

## Example

1. Period of $$x[n] = \cos(\frac{a}{b} \pi n) + \cos(\frac{c}{d} \pi n)$$

***

# Type 2: System Properties

Given 1 of the 2:
- Relationship $$y(t) = f(x(t))$$ (CT/DT)
- $$h(t)$$ (CT/DT)

Find:
1. Classification (causal, stable, linear, time-invariant)
2. $$h(t)$$ if not provided
3. Given an expression for $$x(t)$$, the resultant $$y(t)$$

## Solution

### 1. Classification

| Property | Condition for $$y = f(x(t))$$ | Condition for $$h(t)$$ |
|---|---|---|
| Linearity | $$T\{ax_1(t) + bx_2(t)\} = ay_1(t) + by_2(t)$$ | Yes (Intrinsic to convolution definition) |
| Time-Invariance | $$x(t) => y(t), \quad x(t + T) = y(t + T)$$ | Yes (Intrinsic to convolution definition) |
| Causality | $$y(t)$$ depends only on $$x(\tau)$$ for $$\tau \le t$$ | $$h(t) = 0$$ for all $$t < 0$$ |
| Stability (BIBO) | $$y(t)$$ converges for any non-infinity $$x(t)$$ | $$\int_{-\infty}^{\infty} \mid h(t) \mid dt < \infty$$ (Absolutely Integrable) |

### 2. Impulse Response $$h(t)$$

In $$y(t) = f(x(t))$$ replace x with $$\delta(t)$$ (impulses).

### 3. Output $$y(t)$$

Simply replace the given $$x(t)$$ in the relationship $$y(t) = f(x(t))$$. If $$x(t)$$ is something like a sum of unit step functions, do not try to simplify it.

## Example

| System | Linear - TI - Causal - Stable |
|--------|--------|
| $$y(t) = x(at)$$                          | |
| $$y(t) = \mid x(t) \mid$$                 | |
| $$y[n] = x[an - b]$$                      | |
| $$y(t) = \int_{-\infty}^t x(\tau) d\tau$$ | |
| $$y(t) = \cos(t) x(t)$$                   | |
| $$y(t) = \frac{dx(t)}{dt}$$               | |
| $$y[n] = e^{x[n]}$$                       | |
| $$y[n] = x[n^2]$$                         | |
| $$y[n] = 2x[k] - 2x[-k + 2]$$             | |
| $$y(t) = x(t + 1) + x(t) + x(t - 1)$$     | |
| $$y(t) = 2\cos(x(t)) + 3\sin(x(t)) + 5$$  | |
| $$h[n] = u[n + 1] + u[n - 1]$$            | |
| $$h(t) = e^{-t} u(t)$$                    | |

Answers [here](#type-2-example) (bottom of page)

***

# Type 3: Impulse Response Properties

Given:
- Impulse responses $$h_1(t),\ h_2(t)$$
- Test input $$x(t)$$ (expression)

Find:
1. Overall response if connected in series/parallel
2. Non-zero range of output

## Solution

### 1. Overall response

> In series: $$h_1(t) * h_2(t)$$
>
> In parallel: $$h_1(t) + h_2(t)$$

### 2. Non-zero range

Let the non-zero range of 

## Example


***

# Type 4: Fourier Series/Transform

Given:
- $$x(t)$$ (CT/DT) (equation or graph)

Find:
- FS coefficients $$a_k$$
- FT when $$t = 0$$

## Solution

## Example

***

# Type 5: Impulse Response

Given:
- $$x(t)$$
- $$H(\omega)$$ graph

Find:
- $$y(t)$$

## Solution

## Example

***

# Type 6: LCCDE

Given:
- LCCDE
- Expression of $$x(t)$$
- Initial conditions $$y(0),\ y'(0)$$

Find:
- Zero-input response
- Zero-state response
- Overall response $$y(t)$$

## Solution

## Example

***

# Type 7: DTFT

Given:
- $$x[n]$$

Find:
- DTFT of $$x[n]$$
- For given $$\omega$$, find value of $$X(e^{j\omega})$$ without calculating its transform

## Solution

## Example

***

# Type 8: DT Convolution

Given:
- $$x[t]$$
- $$h[t]$$

Find:
- Linear convolution
- Circular convolution

## Solution

## Example

***

# Q2

- CTFS-FT x2
- Impulse response
- LTI properties (causal, stable?)

# Q3

- Laplace x2
- Pole-zero plot, ROC, sketch magnitude of H(\omega)
- Given laplace, determine where it is stable

# Q4

- Sampling x3
- Convolution (linear, circular) x2
- Nyquist rate
- Minimum and maximum sampling rate
- CT convolution

# Q5

- Z transform x2
- DTLTI to H(e^jw) x2
- Properties (causal, stable?)
- Z transform obscure properties

***

# Q. Type a: Impulse Response

Given a system with 2 of the following 3:
- $$x(t)$$
- $$h(t)$$
- $$y(t)$$

Find:
- The non-given

## Solution

## Example

***

# Q. Type e: LTI System, Z-transform

Given:
- Transfer function $$H(z)$$ of LTI system

Find:
- Is it causal, stable?
- Zero-pole plot
- Possible ROCs
- Magnitude, phase
- Pass type (low, band, high, all)

## Solution

## Example

***

# Answers

## Type 2 Example

| System                                    | Linear | TI     | Causal | Stable |
|-------------------------------------------|---|---|---|---|
| $$y(t) = x(at)$$                          | Y | N | N | Y |
| $$y(t) = \mid x(t) \mid$$                 | N | Y | Y | Y |
| $$y[n] = x[an - b]$$                      | Y | N | N | Y |
| $$y(t) = \int_{-\infty}^t x(\tau) d\tau$$ | Y | Y | Y | N |
| $$y(t) = \cos(t) x(t)$$                   | Y | N | Y | Y |
| $$y(t) = \frac{dx(t)}{dt}$$               | Y | Y | Y | N |
| $$y[n] = e^{x[n]}$$                       | N | Y | Y | Y |
| $$y[n] = x[n^2]$$                         | Y | N | N | Y |
| $$y[n] = 2x[n] - 2x[-n + 2]$$             | Y | N | N | Y |
| $$y(t) = x(t + 1) + x(t) + x(t - 1)$$     | Y | Y | N | Y |
| $$y(t) = 2\cos(x(t)) + 3\sin(x(t)) + 5$$  | N | Y | Y | Y |
| $$h[n] = u[n + 1] + u[n - 1]$$            | Y | Y | N | N |
| $$h(t) = e^{-t} u(t)$$                    | Y | Y | Y | Y |

* $$a, b$$ is any real number except 0 and 1

***

List
01. TYPE:1 BASICS given x(t) as graph/eq, find eq/graph, even/odd, transformations x(at + b), periodicity, energy/power
02. TYPE:2 PROPERTIES given relation y(t) = f(x(t)), find is it causal, stable, linear, time-invariant?
03. TYPE:2 IMPULSE Given x(t), relationship between y and x, find h(t) and y(t) for a given expression of x
04. TYPE:3 IMPULSE Given impulse response in series/parallel, find non-zero range of y(t)
05. TYPE:4 F-SERIES Given x(t), find its FS, coefficients ak !IMPORTANT
06. TYPE:4 F-TRANSFORM Given x(t), find/sketch its FT, find FT when t = 0 !IMPORTANT
07. 000000 SIMILAR:4 Given impulse response in series/parallel, find frequency response, is it causal/stable? !IMPORTANT
08. 000000 LAPLACE Given H(s) OR ODE, find zero-pole plot, ROC, h(t), sketch magnitude/phase, is it causal/stable? !IMPORTANT
09. 000000 LCCDE Given transfer function H(s), find LCCDE
10. TYPE:5 LCCDE Given LCCDE, expression of x(t), initials of y(0) y'(0), find y(t) (zero-input, zero-state, overall) !IMPORTANT
11. 000000 SAMPLING given FT of x(t) as graph, frequency, find maximum sampling period (avoid info loss/aliasing), sketch FT of x[n]
12. 000000 SAMPLING Given FT graph of x(t), conditions of sampled signal x[n], find/sketch spectrum of y[n], sketch reconstructed y_r(t)
13. TYPE:7 DTFT given x[n], find its DTFT (see dtft properties)
14. TYPE:8 CONVOLUTION given x[n], h[n], find linear/circular convolution !IMPORTANT
15. 000000 Z-TRANSFORM Given H(z) OR ODE, find zero-pole plot, ROCs, sketch magnitude/phase, classify low/band/high/all pass, is it causal/stable? !IMPORTANT
16. 000000 B-DIAGRAM Given H(z), separate into H1 and H2 in series/parallel, draw block diagram
17. 000000 F-TRANSFORM Given H(e^jw) OR ODE, and expression of x, find y, sketch magnitude/phase, classify low/band/high/all pass !IMPORTANT
18. 000000 F-TRANSFORM Given x(t), sketch of magnitude/phase of H(Omega), find y !IMPORTANT
19. 000000 SIMILAR:11,3 SAMPLING Given x(t) or relation y(t) = f(x(t)), find its Nyquist rate
20. 000000 SIMILAR:15 Z-TRANSFORM Given H(z) or ODE, find impulse response (causal/stable matters)
21. 000000 B-DIAGRAM Given H, draw direct form I and II, canonic form of block diagrams
22. 000000 CONVOLUTION CT calculate convolution of two functions
23. 000000 LAPLACE Given ULT X(s), find x(0^+) and x(inf)
24. 000000 B-DIAGRAM Given some poles and zeroes, draw block diagram (consider series/parallel, first/second order)
25. 000000 Z-TRANSFORM Prove some properties of z transform.
26. 000000 SIMILAR:15 Z-TRANSFORM Given H(z) and zero-pole plot, consider geometric interpretation of FT, classify low/band/high/all pass