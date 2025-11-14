---
layout: hidden
title: dt-fourier-transform
card_title: "Discrete Time Fourier Transform"
math: true
url: /posts/signals/dt-fourier-transform
excerpt: "13.2, 14: Definition and properties"
date: 2025-11-13
tech_stack: [Signals]
---

## Definition

$$X(\Omega) = \sum_{n = -\infty}^{\infty} x[n] e^{j\Omega n}$$

Where
- $$\Omega_0 = \frac{2\pi}{T}$$ is the frequency

$$x[n] = \frac{1}{2\pi} \int_{2\pi} X(\Omega) e^{j\Omega n} d\Omega$$


## Properties

Linearity

Time Reversal

Time Shifting

Frequency Shifting

Conjugation

Even-odd transforms

Differentiation

Energy

Convolution

Product

