---
layout: post
title: signals-2
card_title: "Signal systems classification"
math: true
url: /posts/uni/signals-2
date: 2025-10-16
---

## What is a System

Basically a function $$f(t)$$ that takes some signal.

## Classification

### Memory

If the output changes based on inputs from current and previous times, it has memory.

In other words, a system is memoryless if the output $$y$$ only depends on the input at a given time $$t$$, and $$y$$ is always the same for the same $$t$$.

### Invertibility

If the system has an inverse function, then the system is invertible.
- Inverse function: for each $$t$$ there exists a unique $$x(t)$$, so that an inverse function exists $$w(x(t)) = t$$

### Causality

If a system output depends only on inputs from current and past time, the system is causal. Ex: $$y = x(t) + x(t-T)$$

In other words, if an output considers values from future time to the input, then it is non-causal. Ex: $$y = x(t) + x(t+T)$$

### Stability

If a system output does not change aggressively on small input changes, it is stable.

In other words, if a small change in inputs causes big changes in outputs, it is not stable.

*Formal def [here](https://en.wikipedia.org/wiki/BIBO_stability)*

### Linearity

A system is linear if inputs and outputs follow superposition:

$$x(t) = y,\quad x(t) = x_1(t) + x_2(t)$$

$$x_1(t) + x_2(t) = y_1 + y_2 = y$$

$$ax(t) = ay(t)$$

Some tips: $$x(t) + C,\quad x(t), y(t)$$ are not first-order eq, or there are abs(x,y) then it is not linear. Imagine a similar criteria to linear ODEs.

### Time Invariance

If a time shift on x causes the same time shift in y, then it is time-invariant.

$$x(t) => y(t), \quad x(t + T) = y(t + T)$$