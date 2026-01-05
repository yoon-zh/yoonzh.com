---
layout: hidden
title: circuitstt
card_title: "circuits test"
math: true
url: /posts/circuits/test
excerpt: "test"
date: 2026-01-04
tech_stack: [Circuits]
---

# Type 1: Basic BJTs

| Config | Voltage Gain $$A_v$$ | Current Gain $$A_i$$ | Input resistance | Output resistance |
|--------|----------------------|----------------------|------------------|-------------------|
| Common Emitter    | > 1           | > 1         | Mid   | Mid-high  |
| Common Collector  | $$\cong 1$$ | > 1         | High  | Low       |
| Common Base       | > 1         | $$\cong 1$$ | Low   | Mid-high  |

CC is used as buffer because:
- It has high input impedance (draws little current from input)
- Low output impedance with high current gain (can drive output)

Its voltage gain of about 1 means it roughly passes the same voltage from input to output

***

### Miller Effect

$$C_{\text{input}} = C(1 + A)$$


***

# Type f: Diff Amps

CMRR, noise

***

# Type d: Current Mirrors

Widlar adds a resistor to emitter, allowing to generate small output currents with reasonable resistor values.

***

# Type x: Op Amps

| Differences | Ideal | Non-Ideal | Description |
|-------------|-------|-----------|-------------|
| Input Impedance           | $$\infty$$ | Very high | Infinite impedance draws no current, preventing input loading |
| Output Impedance          | 0          | Low (10-100 $$\Omega$$) | Zero impedance means output voltage remains stable |
| Open-loop gain $$A_{OL}$$ | $$\infty$$ | Very high | Infinite gain allows to apply "virtual short" |
| Bandwidth                 | $$\infty$$ | Finite | Non-ideals have slew rate, which distorts very high-frequency signals |

### DC Imperfections

1. Input offset voltage
2. Input bias current
3. Input offset current

### Virtual Short

In an ideal op amp, the open-loop gain is infinite, then $$V_+ = V_-$$. The virtual short is to say positive and negative terminals are at same voltage, as if they were shorted. However, they are not physically connected so no current flows from one to the other.

### Loading Effect

Connecting a load (resistor) to a voltage affects the voltage that goes through it depending on the load, much like a voltage divider.

### Slew Rate

$$SR = \frac{V_m}{\tau_r}$$

Where
- $$SR$$ is slew rate in V/s
- $$V_m$$ is output voltage
- $$\tau_r$$ is 

> For sinusoidal signal inputs:
>
> $$SR = V_m \omega$$
>
> Where $$\omega = 2\pi f$$ is angular frequency (from the signal $$\sin{\omega t}$$)

### Negative Feedback

Advantages:
- Gain is dependend on external resistors rather than op amp transistor parameters
- Has increased bandwidth
- Reduces non-linear distortions

Disadvantages:
- Lower gain
- Susceptible to phase shifts

***

List
01. TYPE:01 BASICS Given simple bjt amp, find small signal params, input resistance, voltage gain
02. 0000000 FREQUENCY Given cutoff frequency, find bandwith, capacitance, transfer function (what is miller effect)
03. 0000000 DIFF-AMP Given diff-amp, find emitter voltage, collector voltage, differential mode gain, CMRR
04. 0000000 C-MIRRORS Given current mirror, find params without and with early effect (draw from memory)
05. 0000000 FEEDBACK Given block diagram, gains, find transfer function, gain function (draw from memory)
06. 0000000 OP-AMPS Given op-amp, find output voltage, currents
07. 0000000 MULTI-STAGE Given multi-stage, describe all stages, find current drawn, output resistance
08. 0000000 SIMILAR:4 WIDLAR Given widlar, find currents, output resistance with early voltage (draw from memory)
09. 0000000 FEEDBACK Given feedback amp, find connection type, open/closed loop gains, output resistance
10. 0000000 SLEW-RATE Given slew rate, find upper corner frequency
11. 0000000 OP-AMPS Memorize 4 diff between ideal, non-ideal op amps, loading effect, virtual short principle, find open-loop differential gain
12. 0000000 BASICS Memorize all properties from different bjt amp configs
13. 0000000 MULTI-STAGE Explain why CC is used as a buffer