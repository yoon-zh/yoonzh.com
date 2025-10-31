---
layout: post
title: fourier-transform
card_title: "Fourier Transform"
math: true
url: /posts/signals/fourier-transform
excerpt: "7: Definition, elementary pairs, sample transforms"
date: 2025-10-31
tech_stack: [Signals]
---

## Definition

### Linear Frequency $$f$$

> Fourier Transform:
>
> $$X(f) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j2\pi tf} dt$$
>
> Inverse Fourier Transform:
>
> $$x(t) = \mathcal{F}^{-1}\{X(f)\} = \int_{-\infty}^{\infty} X(f) e^{j2\pi tf} dt$$

Where
- $$f = \frac{1}{T}$$ is frequency

The physical unit is [Hz] $$= \frac{1}{s}$$

### Angular frequency $$\omega = 2\pi f$$

> Fourier Transform:
>
> $$X(\omega) = \mathcal{F}\{x(t)\} = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt$$
>
> Inverse Fourier Transform:
>
> $$x(t) = \mathcal{F}^{-1}\{X(\omega)\} = \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} dt$$

Where
- $$\omega = 2\pi f$$ is angular frequency

The physical unit is [rad/s]