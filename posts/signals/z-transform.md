---
layout: hidden
title: z-transform
card_title: "Z Transform"
math: true
url: /posts/signals/z-transform
excerpt: "16: Definition and properties"
date: 2025-11-14
tech_stack: [Signals]
---

## Definition

$$z = re^{j\Omega}$$

$$X(z) = \sum_{n = -\infty}^{\infty} x[n] z^{-n}$$


## Properties

- ROC does not contain poles
- For $$x[n]$$ of finite duration, ROC is all z-place except maybe $$0,\ \infty$$


## Common Pairs

| $$x[n]$$ | $$X(z)$$ | ROC |
|----------|----------|-----|
