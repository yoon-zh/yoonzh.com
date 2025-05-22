---
layout: post
title: fet-frequency
card_title: "Transistors Frequency"
math: true
circuit: true
url: /posts/circuits/fet-frequency
excerpt: "Dealing with the capacitors in amplifiers: why we want them, how to pick them."
tech_stack: [EE]
---

date: 2025-05-20

***

Consider the following amplifier:

{% include circuit.html id="bjt-amp-full" from_data=true %}

Notice the capacitors $$C_C,\ C_E,\ C_L$$. 

- $$C_C$$ is an input coupling capacitor
- $$C_E$$ is an output coupling Capacitor
- $$C_L$$ is a bypass capacitor

A bypass capacitor minimizes loss

## Corner Frequencies

$$
f_L = \frac{1}{2 \pi {\tau}_S}
$$

$$
f_H = \frac{1}{2 \pi {\tau}_P}
$$

$$
{\tau}_S = R_{EQ} C_C
$$

$$
{\tau}_P = R_{EQ} C_L
$$

- Low-pass network: low frequency passes, high frequency decays -> bypass capacitor
- High-pass network: high frequency passes, low frequency decays -> coupling capacitor

> Low-pass and high-pass network can be analyzed separately:
> Low frecuency -> bypass = open circuit
> High frequency -> coupling = short

In mid-band range:
- Coupling, bypass capacitors -> short
- Load, stray, transistor capacitors -> open

Small-signal voltage gain = Mid-band Gain


Voltage transfer function:

$$
T(s) = \frac{V_o(s)}{V_i(s)}
$$

Use s-domain analysis to get V_o(s) and V_i(s). Then replace s with $$j\omega$$.

## Amplifier Analysis

Keep capacitors in small-signal model