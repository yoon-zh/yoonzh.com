---
layout: post
title: fourier-series
card_title: "Fourier Series"
math: true
url: /posts/signals/fourier-series
excerpt: "6: Simple definition in exponential form, obtaining the coefficients"
date: 2025-10-30
tech_stack: [Signals]
---

## Eigen stuff

Say we have an [LTI system](lti-systems).

Given an input $$x(t) = \phi(t)$$,
If the output $$y(t) = k\ \phi(t)$$, where $$k$$ is a constant, then $$\phi(t)$$ is an eigen-function.

The constant $$k$$ is the eigen-value. It can be understood as some amplitude factor.

> In the context of LTI signals, we know $$y(t) = x(t) * h(t)$$.
>
> A known eigenfunction for these LTI systems is $$\phi(t) = e^{j \omega t}$$, such that:
>
> $$\phi(t) * h(t) = H(\omega) \phi(t)$$
>
> Where
> - $$\phi(t) = e^{j \omega t}$$ is an eigen-function
> - $$h(t)$$ is the [impulse response](lti-systems.html#:~:text=Impulse%20Response)
> - $$H(\omega) = \int_{-\infty}^{\infty} h(\tau) e^{-j \omega \tau} d\tau$$ is the eigen-value, which is a function of the frequency $$\omega$$

We can use this to define the Fourier Series:

## Fourier Series definition

> $$x(t) = \sum_{k = -\infty}^{\infty} a_k e^{jk \omega t}$$

Where
- $$k$$ is the counter (integer, real number)
- $$a_k$$ is the constant of the k-th element
- $$\omega$$ is the frequency (since this are sines and cosines in disguise)

*How do we go from eigenfunctions to here?* Of course I'm skipping a lot of stuff, but if you need a fuller version, go read [this](https://mathworld.wolfram.com/FourierSeries.html).

A general way of getting the constants is:

> $$a_n = \frac{1}{T} \int_{-T/2}^{T/2} x(t) e^{-jn \omega t} dt$$

Where
- $$a_n$$ is the n-th constant of the Fourier Series expansion of $$x(t)$$
- $$T$$ is fundamental period
- $$x(t)$$ is a signal
- $$n$$ is the index of the Fourier Series expansion
- $$\omega$$ is frequency

Reminder: $$T = \frac{2\pi}{\omega}$$

### Discrete time

> $$x[n] = \sum_{k = 0}^{N-1} a_k e^{jk\Omega n}$$

Where
- $$N$$ is the period
- $$\Omega$$ is frequency

> $$a_k = \frac{1}{N} \sum_{n = 0}^{N-1} x[n] e^{-jk\Omega n}$$

Properties

Periodicity

$$x[n] = x[n + aN]$$

Where
- $$N$$ is the period
- $$a$$ is some real int

Linearity - superposition

Time shifting

$$x[n-m] \rightarrow e^{-j (2\pi / N) km} c_k$$

Where
- $$m$$ is the shift
- $$c_k$$ is the fourier series sum of $$x[n]$$


# Problems

## Type 1: Find $$a_k$$ without the integral

Given:
- $$x(t)$$, containing sin, cos, and constants

Find:
- The constants of its Fourier Series expansion $$a_k$$

### Process

1\. Rewrite all sines and cosines in their exponential form:

$$\cos{\omega t} = \frac{1}{2}(e^{j\omega t} + e^{-j\omega t})$$

$$\sin{\omega t} = \frac{1}{2j}(e^{j\omega t} - e^{-j\omega t})$$

2\. Group the exponentials $$e^{jk\omega t}$$ and simplify their coefficients

3\. For each $$e^{jk\omega t}$$, write the accompanying coefficients to $$a_k$$

Tips:
- Keep the [expansion form](#fourier-series-definition) in mind
- $$k$$ MUST be of type int
- Consider the case $$k = 0$$ separately (since $$e^0 = 1$$, then $$a_0$$ will be any left over constants)
- The sin exponential form is divided by a j, don't forget it
- Remember $$e^{a+b} = e^a e^b$$

## Type 2: Find $$a_k$$ with the integral

Given:
- $$x(t)$$, either a function or graph

Find:
- The constants of its Fourier Series expansion $$a_k$$

### Process

1\. If given a graph, rewrite as an equation and stating the limits.
- The graph may contain the period T as a variable or a number. If it is a number, make sure to replace it both in T and $$\omega$$.

2\. Consider the integral:

$$a_k = \frac{1}{T} \int_T x(t) e^{-jk \omega t} dt$$

Tips:
- You should split the integral depending on the limits (if the functions is piecewise)
- If the case $$k = 0$$ is problematic (undefined), re-evaluate the integral only for the case $$k = 0$$, so that $$a_0 = \frac{1}{T} \int_T x(t) dt$$