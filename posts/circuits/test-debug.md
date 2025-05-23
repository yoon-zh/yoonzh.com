---
layout: hidden
title: test-debug
card_title: "test"
math: true
circuit: true
url: /posts/circuits/test-debug
excerpt: "test"
tech_stack: [EE]
date: 2025-05-23
---

| Operation Region  | NMOS | PMOS |
|-------------------|------|------|
| Saturation        | $$i_D = K_n (V_{DS}(sat))^2$$ | $$i_D = K_n (V_{SG}(sat))^2$$ |
| Triode            | $$i_D = K_n (2V_{DS}(sat) \times V_{DS} - V^2_{DS})$$ | $$i_D = K_n (2V_{SG}(sat) \times V_{SD} - V^2_{SD})$$ |
| Cutoff            | $$i_D = 0$$ | $$i_D = 0$$ |
