---
layout: hidden
title: dt-fourier-series
card_title: "Discrete Time Fourier Transform"
math: true
url: /posts/signals/dt-fourier-series
excerpt: "13: Definition and properties"
date: 2025-11-13
tech_stack: [Signals]
---

## Definition

$$x[n] = \sum_{k} a_k e^{jk\Omega_0 t}$$

Where
- $$k$$ is the counter (integer, real number)
- $$a_k$$ is the constant of the k-th element
- $$\Omega_0 = \frac{2\pi}{T}$$ is the frequency

$$a_n = \frac{1}{N} \sum_{n = 0}^{N - 1} x[n] e^{-jk \Omega_0 n}$$


## DT vs CT

- DT range is finite (usually starts at 0), while CT range is $$k = (-\infty,\ \infty)$$

## Properties

Periodicity

Linearity

Time Shifting

