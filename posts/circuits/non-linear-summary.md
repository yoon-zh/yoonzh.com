---
layout: post
title: non-linear-summary
card_title: "Non-linear Summary"
math: true
circuit: true
url: /posts/circuits/non-linear-summary
excerpt: "Brief summary for non-linear circuits, including capacitors, inductors, and AC sources."
date: 2025-05-20
---

***

## Capacitors and Inductors

| Characteristics | Capacitor                        | Inductor                       |
|-----------------|----------------------------------|--------------------------------|
| Unit            | Farad (F)                        | Henry (H)                      |
| Voltage $$V$$   | $$V_C = \frac{1}{C} \int i\ dt$$ | $$V_L = L\frac{di}{dt}$$       |
| Current $$i$$   | $$i_C = C\frac{dv}{dt}$$         | $$i_L = \frac{1}{L} \int Vdt$$ |
| Series          | $$\sum \frac{1}{C_n}$$           | $$\sum L_n$$                   |
| Parallel        | $$\sum C_n$$                     | $$\sum \frac{1}{L_n}$$         |
| Time constant $$\tau$$ | $$\tau_C = RC$$           | $$\tau_L = \frac{L}{R}$$       |
| Impedance       | $$\Z_C = \frac{1}{j\omega C}$$   | $$\Z_L = j\omega L$$           |
| DC ($$\omega = 0$$)  | $$\Z_C = \infty$$ (open)    | $$\Z_L = 0$$ (short)           |
| AC ($$\omega$$ high) | $$\Z_C \approx 0$$ (short)  | $$\Z_C \approx \infty$$ (open) |

> General Forms for C and L:
>
> $$V = V(\infty) + (V(0)^+ - V(\infty)) e^{\frac{-t}{\tau}}$$
>
> $$i = i(\infty) + (i(0)^+ - i(\infty)) e^{\frac{-t}{\tau}}$$

### DC Example

{% include circuit.html id="dc-ex" from_data=true %}

w7

### AC Example

{% include circuit.html id="ac-ex" from_data=true %}

w9

***