---
layout: post
title: non-linear-summary
card_title: "Non-linear Summary"
math: true
circuit: true
url: /posts/circuits/non-linear-summary
excerpt: "Brief summary for non-linear circuits, including capacitors, inductors, and AC sources."
tech_stack: [EE]
date: 2025-05-20
---

***

## Capacitors and Inductors

| Characteristics | Capacitor                        | Inductor                       |
|-----------------|----------------------------------|--------------------------------|
| Unit            | Farad (F)                        | Henry (H)                      |
| Voltage $$V$$   | $$V_C = \frac{1}{C} \int i\ dt$$ | $$V_L = L\frac{di}{dt}$$       |
| Current $$i$$   | $$i_C = C\frac{dv}{dt}$$         | $$i_L = \frac{1}{L} \int Vdt$$ |
| Prevents jumps  | Of voltage                       | Of current                     |
| Series          | $$\sum \frac{1}{C_n}$$           | $$\sum L_n$$                   |
| Parallel        | $$\sum C_n$$                     | $$\sum \frac{1}{L_n}$$         |
| Time constant $$\tau$$ | $$\tau_C = RC$$           | $$\tau_L = \frac{L}{R}$$       |
| Impedance       | $$\Z_C = \frac{1}{j\omega C}$$   | $$\Z_L = j\omega L$$           |
| DC ($$\omega = 0$$)  | $$\Z_C = \infty$$ (open)    | $$\Z_L = 0$$ (short)           |
| AC ($$\omega$$ high) | $$\Z_C \approx 0$$ (short)  | $$\Z_C \approx \infty$$ (open) |
| Phasor sine wave     | Leads                       | Lags                           |

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

## Phasors
Phasor sources are in cosines:

$$
\sin \theta = \cos(\theta - \frac{\pi}{2}) = \cos(\theta - 90°)
$$


$$
v(t) = V_m \cos(\omega t + \theta),\ \ i(t) = I_m \cos(\omega t + \theta); 
$$

$$
v(t) = V_m \angle \theta = V_m (\cos \theta + j \sin \theta)
$$

***

$$
A + jB = C\cos(\omega t + \theta)
$$

$$
C = \sqrt{A^2 + B^2}
$$

$$
\theta = \arctan \frac{B}{A}
$$

***

## Impedance

$$Z = R + jX$$

Where R is the resistance and X is the reactance.

## Root Mean Square (RMS)

Also known as effective voltage and current, it represents the power an AC source delivers to a load (resistor).

$$V_{rms} = \frac{V_L}{\sqrt{2}}$$

$$I_{rms} = \frac{I_L}{\sqrt{2}}$$

For example:

- The U.S. uses AC 120V 60Hz, providing the same power as a DC 120V source.
- China uses AC 220V 50Hz, providing the same power as a DC 220V source.

If a load R is connected to various current phases $$I_n$$, then:

$$
I_{RMS} = \sqrt{\sum I^2_n}
$$

## Average Power

> Resistors:
> 
> $$P_{Ravg} = \frac{1}{2} V_R I_R \cos \theta$$
>
> $$P_{Ravg} = V_{rms} I_{rms} \cos \theta$$
>
> Where $$V_R, I_R$$ is the amplitude of the AC voltage/current.

> Capacitors & Inductances: Average power $$P_{avg} = 0$$

Apparent Power: $$P_{app} = V_{rms} I_{rms}$$

## Maximum Power Transfer

Assume a Thévenin Circuit with AC volt source $$V_{TH}$$ in series with an impedance $$\Z_{TH}$$ and a load $$\Z_{L}$$.

{% include circuit.html id="avgpower" from_data=true %}

> If $$\Z_L = \Z^*_{TH},\ \Z_L$$ receives maximum power.

This means the resistances are the same, and the reactances have opposite sign:

$$R_L = R_{TH}$$

$$X_L = -X_{TH}$$

## Complex Power

Average Power $$P = V_{rms} I_{rms} \cos(\theta-\phi)$$

Reactive Power $$Q = V_{rms} I_{rms} \sin(\theta-\phi)$$

$$S = P + jQ = V_{rms} I^*_{rms} = V_{rms} I_{rms} e^{j(\theta - \phi)}$$

