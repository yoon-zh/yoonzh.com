---
layout: post
title: semic-intro
card_title: "Semiconductors Intro"
math: true
circuit: true
url: /posts/circuits/semic-intro
excerpt: "Intro to semiconductors, p-n junctions, diodes, transformers."
tech_stack: [EE]
---

date: 2025-05-20

***

## P-N

[2] Ch3

- P stands for positive (+): Carries holes (misses $$e^-$$)
- N stands for negative (-): Carries $$e^-$$

Silicon has 4 valence $$e^-$$, and is the typical semiconductor base. It is doped with:
- Boron, owns 3 valence $$e^-$$, lacks a $$e^-$$: P type (anode)
- Phosphorous, owns 5 valence $$e^-$$, donates one: N type (cathode)

> Put P and N together: Diode (aka PN junction)

## Diodes, simplified

Let the diode have a fixed voltage drop $$v_D$$ (also known as cut-in voltage $$v_{\gamma}$$).

{% include circuit.html id="diode1" from_data=true %}

> If $$(V_{in} > v_D) :\  V_{out} = V_{in} - v_D$$ -> Behaves like a resistor
>
> Else: $$i_D = 0$$ -> Open circuit

Standard values: $$v_{\gamma} = 0.7$$ for simple diodes, $$v_{\gamma} = 1.8V$$ for red LEDs.

### Zener Diodes

Normal diodes get damaged if a high reverse voltage is applied. A zener diode is designed to allow reverse current by operating at a special voltage $$V_Z$$:

> If $$(V_{in} > v_D) :\  V_{out} = V_{in} - v_D$$
>
> If $$(V_{in} < -V_Z):\  V_{out} = V_Z$$
>
> Else: $$i_D = 0$$ -> Open circuit

$$V_Z$$ is usually set to be much higher than $$v_{\gamma}$$, over 6V.

## AC to DC

Rectification:
- Diode rectifier
- Filter
- Voltage regulator

### Diode rectifier

Type 1: Four diodes in diamond
- The current flows through 2 diodes

$$V_{out} = V_{in} - 2v_{\gamma}$$

Type 2: Two diodes at each end
- The current flows through 1 diode
- The receiving winding is center-tapped to ground, in parallel to load

$$V_{out} = V_{in} - v_{\gamma}$$

### Filter

A capacitor between $$V_{out}$$ and ground, parallel to the load.

{% include circuit.html id="capacitor_parallel" from_data=true %}

It creates ripple voltage:

$$
V_r = \frac{V_M}{2fRC}
$$

Where $$V_M$$ is the maximum voltage at $$V_{out}$$.

### Voltage Regulator

An ideal diode has a constant voltage. So we put one in parallel to our load to get DC.

The voltage drop for a normal diode $$v_{\gamma}$$ is usually low. So we use a Zener diode in reverse bias to use the high voltage $$V_Z$$.

{% include circuit.html id="zener1" from_data=true %}

A voltage regulator has a safe operating range (min and max $$V_Z$$). $$R_i$$ helps protect the diode.

> Let $$I_Z$$ be the current through the diode.
>
> $$I_Z(min) = \frac{V_{in}(min) - V_Z}{R_i} - I_L (max)$$
>
> $$I_Z(max) = \frac{V_{in}(max) - V_Z}{R_i} - I_L (min)$$

Example: let $$V_Z = 9\ V,\ V_{in} = (11, 13.6)\ V,\ I_{RL} (max) = 100\ mA.$$ If $$I_Z (min) = 0.1 I_Z (max)$$, what should be $$R_i$$?

## Transformer overview

{% include circuit.html id="transformer-full" from_data=true %}

***

## Other diode uses

### Clipper circuit

Clip the input voltage to a limit

{% include circuit.html id="clipper" from_data=true %}

Let $$V_B$$ be a constant DC volt source, with polarity against the diode.

The voltage between the diode and ground remains the same, since $$v_{\gamma}$$ and $$V_B$$ do not change.

### Clamper circuit

Shift a DC voltage without changing its "shape"

{% include circuit.html id="clamper" from_data=true %}

### Logic gates

See logic gates.