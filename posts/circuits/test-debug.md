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

Bug: For small screens, tables are set to `display: block;` to allow scrolling without enclosing in a div. However, adding `white-space: nowrap;` to the tables when using katex for math equations causes horizontal overflow even if the content overflow is hidden.

To fix:
- Set tables to `display: block;` regardless of screen size, or find a way to contain them in a div without doing it manually.
- Find a way to set `white-space: nowrap;` in katex equations inside tables without causing overflow.