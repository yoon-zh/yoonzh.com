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

> Note: if you have a first-order polynomial equation where the non-zero range is symmetrical around the y-axis:
> - Even part $$x_e(t)$$ is the part with the constant
> - Odd part $$x_o(t)$$ is the part with the variable t
>
> Example:
>
> $$x(t) = (0.5t + 1.5)(u(t + 3) - u(t - 3))$$
>
> This function is non-zero from (-3, 3). Then,
>
> $$x_e(t) = 1.5(u(t + 3) - u(t - 3))$$
>
> $$x_o(t) = 0.5t(u(t + 3) - u(t - 3))$$

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

### 1. Classify

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

### 2. Find impulse response

$$y(t) = x(t-1) + 2x(t-3)$$

$$y(t) = x(t+5) + x(t) + x(t-5)$$

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

> An important property you might need:
> - $$x(t) * \delta(t- t_0) = x(t - t_0)$$ (Unit impulse shifting)

### 2. Non-zero range

Let the non-zero range of $$x(t)$$ be $$(x_o,\ x_f)$$, and the range of $$h(t)$$ be $$(h_o,\ h_f)$$. Then the non-zero range of $$y(t)$$ is

$$(y_o,\ y_f) = (x_o + h_o,\ x_f + h_f)$$

For example, if the non-zero range of $$x(t)$$ goes from -1 to 1, and $$h(t)$$ goes from 0 to infinity, then $$y(t)$$ goes from -1 to infinity.

## Example

### 1. Find output

- Find $$y(t)$$ given: 
    - Impulse response $$h(t) = e^{-3t}u(t)$$
    - Input signal $$x(t) = \delta(t+1) + 3\delta(t-2) + 2\delta(t-6)$$
- Find overall response given two systems in series:
    - First $$h_1(t) = \delta(t + 2) - \delta(t) + \delta(t - 1)$$
    - Second $$h_2(t) = t u(t)$$

### 2. Non-zero range

- For a system given:
    - The input $$x(t) = u(t + 1) - u(t - 1)$$
    - The impulse response $$h(t) = 2u(t) - (u(t - 1) + u(t - 2))$$
- For the overall response of two systems in series, where:
    - The systems are $$h_1(t) = \delta(t + 2) - \delta(t) + \delta(t - 1)$$ and $$h_2(t) = t u(t)$$
    - The input is $$x(t) = (0.5t + 1.5)(u(t + 3) - u(t - 3))$$

Answers [here](#type-3-example) (bottom of page)

***

# Type 4: Fourier Series/Transform

Given:
- $$x(t)$$ (CT) (equation or graph)
- $$x(t)$$ has a Fourier transform $$X(\omega)$$ (expression not given)

Find:
1. FS coefficients $$a_k$$
2. FT when $$t = 0$$
3. The integral $$\int_{-\infty}^{\infty} X(\omega) d\omega$$
4. FT expression

## Solution

### 1. FS coefficients $$a_k$$

See detailed solution process [here](fourier-series.html#:~:text=%5Bn%5D-,Problems,-Type%201%3A%20Find)


### 2. FT when $$t = 0$$

The way of calculating a CTFT is:

$$X(\omega) = X(j\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$$

If we want it when $$\omega = 0$$, this is simply the integral of x:

$$X(0) = \int_{-\infty}^{\infty} x(t) e^{-j (0) t} dt$$

$$X(0) = \int_{-\infty}^{\infty} x(t) dt$$

So if you are asked for $$X(0)$$, just integrate the signal.


### 3. The integral $$\int_{-\infty}^{\infty} X(\omega) d\omega$$

Look at the inverse Fourier Transform definition (synthesis):

$$x(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} d\omega$$

To turn the above into $$\int_{-\infty}^{\infty} X(\omega) d\omega$$, we set the $$e^{j\omega t}$$ to be 1. For this, we simply set $$t = 0$$:

$$x(0) = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) d\omega$$

$$\int_{-\infty}^{\infty} X(\omega) d\omega = 2\pi x(0) $$


### 4. FT expression

If asked for the full expression, try using properties from the table first. You would rarely need to use the definition [(here)](fourier-transform.html#:~:text=Definition) to calculate it.


## Example

$$
x(t) = {
    -1, 0 < t < 1
    0, 1 < t < 2
    1, 2 < t < 3
}
$$

With period $$T = 3$$

$$
a_k = \frac{1}{3} (-1 + e^{-jk\omega_0} + e^{-2jk\omega_0} - e^{-3jk\omega_0})
$$

***

# Type 5: Frequency Response

Given:
- Block diagram with different impulse responses $$h_1(t),\ h_2(t),\ ...,\ h_n(t)$$

Find:
1. Frequency response $$H(\omega)$$
2. Classify $$H(\omega)$$, is it causal and stable?

## Solution

### 1. Frequency response $$H(\omega)$$

Some key points:

> In series: $$h_1(t) * h_2(t)$$
>
> In parallel: $$h_1(t) + h_2(t)$$
>
> $$h_1(t) * h_2(t) \Longrightarrow H_1(\omega) \times H_2(\omega)$$ 
>
> If x(t) is directly connected as an input (say, parallel to an $$h_n(t)$$), model it as an impulse $$\delta(t)$$, then its Fourier transform is a 1


### 2. Classify $$H(\omega)$$

Remember:

> - Causal if $$h(t) = 0$$ when $$t < 0$$
>
> For $$H(\omega)$$, consider the time-domain functions given and apply the causal rule.
>
> If all $$h_n(t)$$ are causal, then $$H(\omega)$$ is causal. If at least one of the $$h_n(t)$$ is non-causal, the whole system $$H(\omega)$$ is non-causal.

> For stability, consider the poles of $$H(\omega)$$.
>
> All poles must have a negative real part (to the left in complex plane) to be stable.


***

# Type 6: LCCDE - Laplace

Given:
- Transfer function $$H(s)$$
- Classification (causal, stable?)

Find:
1. Zero-pole plot
2. ROCs
3. Impulse response $$h(t)$$
4. Classify as low/band/high pass
5. Sketch its magnitude response $$\mid H(\omega) \mid$$

## Solution

### 1. Zero-pole plot

Usually, $$H(s)$$ is a fraction. The zeros are when $$s = 0$$ on the numerator, and the poles are when $$s = 0$$ on the denominator. Then, draw a Re-Im graph and mark the zeros with a circle, and poles with an x.

### 2. ROCs

The ROC is parallel to the $$j\omega$$ (vertical) axis, and is defined by the poles of $$H(s)$$ (it cannot contain any).

So if there are n poles, there are n + 1 possible ROCs.

> Causal: The ROC is to the right of the rightmost pole
>
> $$\text{ROC: } \Re(s) > \text{pole}_{\text{max}}$$

> Stable: The ROC contains $$\Re(s) = 0$$, which allows the variable change $$H(s) \Longleftrightarrow H(j\omega)$$

### 3. Impulse response $$h(t)$$

Most of the times, you are given a few common transform pairs and are expected to use them along separating the fraction of $$H(s)$$ by partial fraction expansion (PFE).

> Simple way of doing PFE:
>
> 1\. Separate into the form:
>
> $$H(s) = \frac{A}{s - a} + \frac{B}{s - b} + ...$$
>
> 2\. For each constant, remove the zero-expression and evaluate:
>
> $$A \Rightarrow s = a$$
>
> $$A = \frac{1}{s - a} H(a)$$
>
> In other words, grab the original function $$H(s)$$, remove the $$s - a$$ term in the denominator that makes it zero, and evaluate for $$s = a$$. Then you get A. Repeat that for all terms.

### 4. Classify as low/band/high pass

A quick inspection method can be used for fractions. Let $$N(s)$$ be the numerator, and $$D(s)$$ be the denominator of $$H(s)$$. Focus on the power of each polynomial.
- If $$N(s)$$ is a constant (no s present), it is low-pass
- If $$N(s),\ D(s)$$ have the same power of s, it is high-pass
- If $$N(s)$$ has lower power than $$D(s)$$ (with s present on both), it is band-pass

A bit more formal of a way would be by testing the value when s is 0 and infinity. In short:

| Filter type | $$s = 0$$ | $$s = \infty$$ |
|-------------|-----------|----------------|
| Low pass    | $$H(0) \neq 0$$ (Passes) | $$H(0) = 0$$ (Blocks)    |
| High pass   | $$H(0) = 0$$ (Blocks)    | $$H(0) \neq 0$$ (Passes) |
| Band pass   | $$H(0) = 0$$ (Blocks)    | $$H(0) = 0$$ (Blocks)    |
| All pass    | $$H(0) \neq 0$$ (Passes) | $$H(0) \neq 0$$ (Passes) |


### 5. Sketch its magnitude response $$\mid H(\omega) \mid$$

Assuming $$H(s)$$ is stable (ROC contains $$\Re(s) = 0$$), its Fourier transform exists, and we can simply change the variable $$s$$ to $$j\omega$$:

$$H(\omega) = H(s) \bigg |_{s = j\omega}$$

A simple way to sketch the magnitude response is to rewrite $$H(s)$$ as $$H(\omega)$$ and plot its zero-pole plot, where the horizontal axis is the real part, and vertical axis is imaginary $$j\omega$$. Then, imagine $$\omega$$ runs across this vertical axis.
- When it gets close to a pole, the magnitude $$\mid H(\omega) \mid$$ goes up
- When it gets close to a zero, the magnitude $$\mid H(\omega) \mid$$ goes down

Of course, if it touches a pole or a zero, it goes to infinity and to zero respectively.

With this, draw a graph with horizontal axis $$\omega$$ and vertical axis $$\mid H(\omega) \mid$$. The points of interest you should mark in the sketch are when $$\omega$$ approaches a zero or a pole.


***

# Type 7: LCCDE - Laplace

Given:
- LCCDE or $$H(s)$$
- Expression of $$x(t)$$
- Initial conditions $$y(0),\ y'(0)$$

Find:
1. LCCDE if not given
2. Zero-input response
3. Zero-state response
4. Overall response $$y(t)$$

## Solution

### 1. LCCDE


### 2. Zero-input response


### 3. Zero-state response


### 4. Overall response $$y(t)$$


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


# Type X: Frequency Response

Given:
- $$x(t)$$
- $$H(\omega)$$ graph

Find:
- $$y(t)$$

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

\*$$a, b$$ is any real number except 0 and 1

- For $$y(t) = x(t-1) + 2x(t-3)$$, the impulse response $$h(t) = \delta(t-1) + 2\delta(t-3)$$ 
- For $$y(t) = x(t+5) + x(t) + x(t-5)$$, the impulse response $$h(t) = \delta(t+5) + \delta(t) + \delta(t-5)$$

***

## Type 3 Example

### 1. Find output

> - Find $$y(t)$$ given: 
>    - Impulse response $$h(t) = e^{-3t}u(t)$$
>    - Input signal $$x(t) = \delta(t+1) + 3\delta(t-2) + 2\delta(t-6)$$
>
> Remember: $$x(t) * \delta(t- t_0) = x(t - t_0)$$ (Unit impulse shifting)
>
> Then:
>
> $$y(t) = x(t) * h(t)$$
>
> $$y(t) = e^{-3(t + 1)} u(t + 1) + 3e^{-3(t + 2)} u(t + 2) + 2e^{-3(t - 6)} u(t - 6)$$

> - Find overall response given two systems in series:
>    - First $$h_1(t) = \delta(t + 2) - \delta(t) + \delta(t - 1)$$
>    - Second $$h_2(t) = t u(t)$$
>
> Remember:
> - Two systems in series $$h_f(t) = h_1(t) * h_2(t)$$
> - $$x(t) * \delta(t- t_0) = x(t - t_0)$$ (Unit impulse shifting)
>
> Then:
>
> $$h_f(t) = (t + 2) u(t + 2) - tu(t) + (t - 1) u(t - 1)$$

### 2. Non-zero range

> - For a system given:
>    - The input $$x(t) = u(t + 1) - u(t - 1)$$
>    - The impulse response $$h(t) = 2u(t) - (u(t - 1) + u(t - 2))$$
>
> For $$x(t)$$, the non-zero range is $$(-1, 1)$$.
>
> For $$h(t)$$, the non-zero range is $$(0, 2)$$.
>
> Then, for $$y(t)$$ the non-zero range is $$(-1, 3)$$.

> - For the overall response of two systems in series, where:
>    - The systems are $$h_1(t) = \delta(t + 2) - \delta(t) + \delta(t - 1)$$ and $$h_2(t) = t u(t)$$
>    - The input is $$x(t) = (0.5t + 1.5)(u(t + 3) - u(t - 3))$$
>
> First we find the impulse response of the whole system (done above):
>
> $$h_f(t) = (t + 2) u(t + 2) - tu(t) + (t - 1) u(t - 1)$$
>
> The non-zero range of $$h_f(t)$$ is $$(-2, \infty)$$.
>
> The non-zero range of $$x(t)$$ is $$(-3, 3)$$.
>
> Then the non-zero range of $$y(t)$$ is $$(-5, \infty)$$.


***

List
01. TYPE:1 BASICS given x(t) as graph/eq, find eq/graph, even/odd, transformations x(at + b), periodicity, energy/power
02. TYPE:2 PROPERTIES given relation y(t) = f(x(t)), find is it causal, stable, linear, time-invariant?
03. TYPE:2 IMPULSE Given x(t), relationship between y and x, find h(t) and y(t) for a given expression of x
04. TYPE:3 IMPULSE Given impulse response in series/parallel, find non-zero range of y(t)
05. TYPE:4 F-SERIES Given x(t), find its FS, coefficients ak !IMPORTANT
06. TYPE:4 F-TRANSFORM Given x(t), find/sketch its FT, find FT when t = 0 !IMPORTANT
07. TYPE:5 SIMILAR:4 Given impulse response in series/parallel, find frequency response, is it causal/stable? !IMPORTANT
08. TYPE:6 LAPLACE Given H(s) OR ODE, find zero-pole plot, ROC, h(t), sketch magnitude/phase, is it causal/stable? !IMPORTANT
09. TYPE:7 LCCDE Given transfer function H(s), find LCCDE
10. TYPE:7 LCCDE Given LCCDE, expression of x(t), initials of y(0) y'(0), find y(t) (zero-input, zero-state, overall) !IMPORTANT
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
22. TYPE:3 SIMILAR:4 CONVOLUTION CT calculate convolution of two functions
23. 000000 LAPLACE Given ULT X(s), find x(0^+) and x(inf)
24. 000000 B-DIAGRAM Given some poles and zeroes, draw block diagram (consider series/parallel, first/second order)
25. 000000 Z-TRANSFORM Prove some properties of z transform.
26. 000000 SIMILAR:15 Z-TRANSFORM Given H(z) and zero-pole plot, consider geometric interpretation of FT, classify low/band/high/all pass