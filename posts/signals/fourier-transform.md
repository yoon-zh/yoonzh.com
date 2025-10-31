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
> $$x(t) = \mathcal{F}^{-1}\{X(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} X(\omega) e^{j\omega t} dt$$

Where
- $$\omega = 2\pi f$$ is angular frequency

The physical unit is [rad/s]

If the integral goes to infinity, then the function $$x(t)$$ does not have a fourier transform.

## Basic Pairs

| $$x(t)$$ | $$X(\omega)$$ |
|----------|---------------|
| $$\delta(t-t_0)$$ | $$e^{-j\omega t_0}$$ |
| $$1$$ | $$2\pi \delta(\omega)$$ |
| $$u(t)$$ | $$\frac{1}{j\omega} + \pi \delta(\omega)$$ |
| $$e^{j\omega_0 t}$$ | $$2\pi \delta(\omega - \omega_0)$$ |
| $$\sin{\omega_0 t}$$ | $$\frac{\pi}{j} (\delta(\omega - \omega_0) - \delta(\omega + \omega_0))$$ |
| $$\cos{\omega_0 t}$$ | $$\frac{\pi}{j} (\delta(\omega - \omega_0) + \delta(\omega + \omega_0))$$ |
| $$1,\ \mid \omega \mid \ < T_1$$ | $$\frac{2\sin{\omega T_1}}{\omega}$$ |
| $$\frac{\sin{Wt}}{\pi t}$$ | $$1,\ \mid \omega \mid \ < W$$ |

## Properties

Linearity

$$\mathcal{F}\{ax_1 (t) + bx_2 (t)\} = aX_1 (\omega) + bX_2 (\omega)$$

Time shifting

$$\mathcal{F}\{x(t - t_0)\} = X(\omega) e^{-j\omega t_0}$$

Scaling

$$\mathcal{F}\{x(at)\} = \frac{1}{\mid a \mid} X \left( \frac{\omega}{a} \right)$$

Frequency shifting

$$\mathcal{F}\{x(t)\ e^{j\omega_0 t} \} = X(\omega - \omega_0)$$

Differentiation

$$\mathcal{F}\left \{ \frac{d^n}{dt^n} x(t) \right \} = (j\omega)^n X(\omega)$$

Integration

$$\mathcal{F}\left \{ \int_{-\infty}^{t} x(\tau) d\tau \right \} = \frac{1}{j\omega} X(\omega) + \pi X(0) \delta(\omega)$$

Convolution

$$\mathcal{F}\{x_1(t) * x_2(t) \} = X_1(\omega)\ X_2(\omega)$$

Multiplication

$$\mathcal{F}\{x_1(t)\ x_2(t) \} = \frac{1}{2\pi} X_1(\omega) * X_2(\omega)$$