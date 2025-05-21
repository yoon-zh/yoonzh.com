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

## Power Table

| Power           | Equation                                | Description                                                                 |
|----------------|-----------------------------------------|-----------------------------------------------------------------------------|
| Average $$P$$ | $$V_{rms} I_{rms} \cos(\theta)$$ | Real (Watts) |
| Reactive $$Q$$| $$V_{rms} I_{rms} \sin(\theta)$$ | Exchange with C, L |
| Complex $$S$$ | $$P + jQ = V_{rms} I_{rms}^*$$ | Real + Reactive |
| Apparent $$S$$| $$V_{rms} I_{rms}$$ | Total magnitude |


### Phasor Example

{% include circuit.html id="phasor1" from_data=true %}

Complex power for:
- $$R1: 26.6$$ VA
- $$C1: -j1331$$ VA
- $$R2 + L1: 532 + j1065$$ VA
- $$V1: -559 + j266$$ VA

pg 453

***

## S-domain

### Laplace transform table

| f(t)                          | F(s) = L(f(t))                |
|-------------------------------|-------------------------------|
| Unit step function, $$u(t)$$  | $$\frac{1}{s}$$               |
| Dirac delta function, $$\delta(t)$$ | $$1$$                   |
| Ramp function, $$t\ u(t)$$    | $$\frac{1}{s^2}$$             |
| $$e^{-at}\ u(t)$$             | $$\frac{1}{s + a}$$           |
| $$t\ e^{-at}\ u(t)$$          | $$\frac{1}{(s + a)^2}$$       |
| $$t^n\ u(t)$$ (n = integer)   | $$\frac{n!}{s^{n+1}}$$        |
| $$\sin(\omega t)\ u(t)$$      | $$\frac{\omega}{s^2 + \omega^2}$$                    |
| $$\cos(\omega t)\ u(t)$$      | $$\frac{s}{s^2 + \omega^2}$$                         |
| $$e^{-at} \sin(\omega t)\ u(t)$$ | $$\frac{\omega}{(s + a)^2 + \omega^2}$$           |
| $$e^{-at} \cos(\omega t)\ u(t)$$ | $$\frac{s + a}{(s + a)^2 + \omega^2}$$            |
| $$t\ \sin(\omega t)\ u(t)$$      | $$\frac{2\omega s}{(s^2 + \omega^2)^2}$$          |
| $$t\ \cos(\omega t)\ u(t)$$      | $$\frac{s^2 - \omega^2}{(s^2 + \omega^2)^2}$$     |
| $$ \frac{1}{\omega^2}(1 - \cos(\omega t))\ u(t) $$ | $$\frac{1}{s(s^2 + \omega^2)}$$ |

***


### Laplace Transform Properties  

| Property | Operation       | Laplace Transform               |
|------------------------------|--------------------------------------|
| Linearity | $$a f(t) + b g(t)$$ | $$a F(s) + b G(s)$$                |
| Time Shifting | $$f(t - k)u(t - k)$$ | $$e^{-ks}F(s)$$ |
| Frequency Shifting | $$e^{at}f(t)$$ | $$F(s - a)$$                      |
| Time Derivative | $$f'(t)$$    | $$sF(s) - f(0^-)$$                 |
| Second Derivative | $$f''(t)$$ | $$s^2F(s) - sf(0^-) - f'(0^-)$$   |
| Integral | $$\int_0^t f(\tau) d\tau$$ | $$\frac{1}{s}F(s)$$             |
| Convolution | $$f(t) * g(t)$$  | $$F(s) \cdot G(s)$$                |
| Final Value Theorem | $$\lim_{t \to \infty} f(t)$$ | $$\lim_{s \to 0} sF(s)$$ (if poles in left half-plane) |
| Initial Value Theorem | $$\lim_{t \to 0^+} f(t)$$ | $$\lim_{s \to \infty} sF(s)$$ |

For time shifting, $$k > 0$$ or else $$f(t)$$ diverges (no Laplace transform).

### Common Laplace Transforms

| Time Domain: $$f(t)$$            | Frequency Domain: $$F(s)$$           |
|----------------------------------|--------------------------------------|
| $$u(t)$$                         | $$\frac{1}{s}$$                      |
| $$u(t - k)$$                     | $$\frac{e^{-ks}}{s}$$                |
| $$\delta(t)$$                    | $$1$$                                |
| $$\delta(t - k)$$                | $$e^{-ks}$$                          |
| $$t^n u(t)$$ ($$n \geq 0$$)      | $$\frac{n!}{s^{n+1}}$$               |
| $$e^{-at}u(t)$$                  | $$\frac{1}{s + a}$$                  |
| $$t^n e^{-at}u(t)$$              | $$\frac{n!}{(s + a)^{n+1}}$$         |
| $$\sin(\omega t)u(t)$$           | $$\frac{\omega}{s^2 + \omega^2}$$    |
| $$\cos(\omega t)u(t)$$           | $$\frac{s}{s^2 + \omega^2}$$         |
| $$e^{-at}\sin(\omega t)u(t)$$    | $$\frac{\omega}{(s + a)^2 + \omega^2}$$ |
| $$e^{-at}\cos(\omega t)u(t)$$    | $$\frac{s + a}{(s + a)^2 + \omega^2}$$ |
| $$\sinh(\alpha t)u(t)$$          | $$\frac{\alpha}{s^2 - \alpha^2}$$    |
| $$\cosh(\alpha t)u(t)$$          | $$\frac{s}{s^2 - \alpha^2}$$         |


### Reactive Element Transforms

In S-domain, we talk about impedances $$Z$$ just like in phasors.

### Inductor

| Inductor     | Time Domain     | s-Domain           |
|--------------|-----------------|--------------------|
| Voltage      | $$v_L(t) = L \frac{di_L(t)}{dt}$$ | $$V_L(s) = L[sI_L(s) - i_L(0^-)]$$ |
| Current      | $$i_L(t) = \frac{1}{L} \int_0^t v_L(\tau)d\tau + i_L(0^-)$$ | $$I_L(s) = \frac{V_L(s)}{sL} + \frac{i_L(0^-)}{s}$$ |
| Impedance    | $$Z_L(s)$$            | $$sL$$                               |

### Capacitor

| Capacitor    | Time Domain     | s-Domain           |
|--------------|-----------------|--------------------|
| Voltage      | $$v_C(t) = \frac{1}{C} \int_0^t i_C(\tau)d\tau + v_C(0^-)$$ | $$V_C(s) = \frac{I_C(s)}{sC} + \frac{v_C(0^-)}{s}$$ |
| Current      | $$i_C(t) = C \frac{dv_C(t)}{dt}$$ | $$I_C(s) = C[sV_C(s) - v_C(0^-)]$$ |
| Impedance    | $$Z_C(s)$$            | $$\frac{1}{sC}$$                     |

### Example

{% include circuit.html id="s-domain-ex" from_data=true %}

$$
Zeq = \frac{R_E r_{\pi}}{R_E + r_{\pi} + sR_E r_{\pi} C_{\pi}}
$$

***

#### Pending:
- 3-Phase [c12]
- Mutual Inductance (transformers) [c13]
- Transfer functions
- Op amps
- Two-port networks