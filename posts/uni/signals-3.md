---
layout: post
title: signals-3
card_title: "LTI Systems"
math: true
url: /posts/uni/signals-3
excerpt: "Impulse response"
date: 2025-10-21
---

## LTI Systems

Linear Time-Invariant => LTI systems are fundamental to signal analysis because it allows us to break down a signal into simpler pieces (superposition).

For example, a discrete signal $$x[n]$$ can be considered as a sum of impulses times some coefficient per impulse: $$\sum x[k] \delta [n-k]$$

### Impulse Response

Given an LTI system, we may be interested in see how it behaves given an impulse $$\delta (t)$$. The corresponding output $$h(t)$$ is the impulse response.

### Example

Given:

$$
y(t) = x(t-1) + 2x(t-3)
$$

Find:
- Impulse response

***

Given:

- The impulse response of a LTIC system $$h(t) = e^{3t}u(t)$$

Find:

- The output for the input signal $$x(t) = \delta(t+1) + 3\delta(t-2) + 2\delta(t-6)$$

