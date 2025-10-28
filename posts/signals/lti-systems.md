---
layout: post
title: lti-systems
card_title: "LTI Systems"
math: true
url: /posts/signals/lti-systems
excerpt: "5: Impulse response"
date: 2025-10-21
tech_stack: [Signals]
---

## LTI Systems

[Linear](system-classification.html#:~:text=Linearity), [Time-Invariant](system-classification.html#:~:text=Time%20Invariance) => LTI systems are fundamental to signal analysis because it allows us to break down a signal into simpler pieces (superposition). Then we analyze the simpler signals.

For example, 

## Impulse Response

A signal can be considered as a sum of impulses times some coefficient per impulse.

Given an LTI system, we may be interested in see how it behaves given an impulse $$\delta (t)$$. The corresponding output $$h(t)$$ is the impulse response. If we have the impulse response, we can calculate the output signal without knowing the LTI system itself.

> In discrete systems (LTID):
>
> $$x[n] = \sum x[k] \delta [n-k]$$
>
> $$y[n] = \sum_{k=-\infty}^{\infty} x[k]\ h[n-k] = x[n] * h[n]$$

> In continuous systems (LTIC):
>
> $$x(t) = \int_{-\infty}^{\infty} x(\tau)\ \delta(t - \tau)\ d\tau$$
>
> $$y(t) = \int_{-\infty}^{\infty} x(\tau)\ h(t - \tau)\ d\tau = x(t) * h(t)$$

Where
- $$x[n],\ x(t)$$ is input signal (linear combination of delayed impulses)
- $$y[n],\ y(t)$$ is output signal
- $$h[n],\ h(t)$$ is impulse response of the LTI system
- $$k,\ \tau$$ is time delays

Given the system is [linear](system-classification.html#:~:text=Linearity) and [time-invariant](system-classification.html#:~:text=Time%20Invariance), the impulse inputs and outputs behave linearly:

$$\delta (t-t_0) \Longrightarrow h(t-t_0)$$

$$a\delta (t-t_0) \Longrightarrow ah(t-t_0)$$

***

### Example

Given:

$$
y(t) = x(t-1) + 2x(t-3)
$$

Find:
- Impulse response

***

Given:

- Impulse response $$h(t) = e^{-3t}u(t)$$
- Input signal $$x(t) = \delta(t+1) + 3\delta(t-2) + 2\delta(t-6)$$

Find:

- Output $$y(t)$$

***
## Convolution Properties

- $$x(t) * h(t) = h(t) * x(t)$$ (Commutative)
- $$x(t) * (h_1(t) + h_2(t)) = x(t) * h_1(t) + x(t) * h_2(t) $$ (Distributive)
- $$(x(t) * h_1(t)) * h_2(t) = x(t) * (h_1(t) * h_2(t)) $$ (Associative)
- Given $$x(t) * h(t) = y(t)$$, then $$x(t - T_1) * h(t - T_2) = y(t - T_1 - T_2)$$ (Shifting)
- $$x(t) * \delta(t- t_0) = x(t - t_0)$$ (Unit impulse shifting)

These apply for both continuous and discrete systems.

## LTI System Properties

- Memoryless if $$h(t) = 0$$ when $$t \neq 0$$
- Causal if $$h(t) = 0$$ when $$t < 0$$
- Stable if $$\int_{-\infty}^{\infty} \mid h(t) \mid dt < \infty $$