---
layout: post
title: transistor-amp
card_title: "Transistor Amplifiers"
math: true
circuit: true
url: /posts/circuits/transistor-amp
tech_stack: [EE]
date: 2025-05-22
---

***

# Large Signal (DC Analysis)

We only consider the values from the circuit that do not change with time. We call this the Q-Point.

- AC Volt sources: $$\int V\ dt $$ has no constants -> short circuit
- AC Current sources: $$\int I\ dt$$ has no constants -> open circuit

Consider the impedance of capacitors and inductors:

| Capacitor                      | Inductor             |
| $$\Z_C = \frac{1}{j\omega C}$$ | $$\Z_L = j\omega L$$ |

*[See more here](non-linear-summary)*

With only DC sources, $$\omega = 0$$:

- Capacitor: $$\Z_C = \infty$$ -> open circuit
- Inductor: $$\Z_L = 0$$ -> short circuit

> Assume the input is a sine wave. A large signal analysis gives the middle point (Q-point) where the sine wave moves.

With the simplified circuit, analyze as usual (step by step [here](fet-summary#:~:text=in%20saturation%20mode.-,Solving%20Process,-Assume%20operation%20region)).

# Small Signal (AC Analysis)

Small Signal is like a derivative of the circuit with respect to time.

- DC Volt sources: $$\frac{dV}{dt} = 0$$ -> short circuit
- DC Current sources: $$\frac{dI}{dt} = 0$$ -> open circuit

Consider the impedance of capacitors and inductors:

| Capacitor                      | Inductor             |
| $$\Z_C = \frac{1}{j\omega C}$$ | $$\Z_L = j\omega L$$ |

Assuming $$\omega$$ has a high value:

- Capacitor: $$\Z_C = 0$$ -> short circuit
- Inductor: $$\Z_L = \infty$$ -> open circuit

This assumption works only for high frequencies. Read more about frequency in amplifiers [here](fet-frequency).

The transistors require an extra step, shown for FETs and BJTs:

## FET Small-Signal Model

Original circuit:

{% include circuit.html id="fet-amp" from_data=true %}

The transistor becomes:
- A dependent current source $$g_m V_{gs}$$ from Drain to Source, parallel to a resistor $$r_o$$
- An open circuit at the Gate

Where:

$$
g_m = 2 K_n (V_{GSQ} - V_{TN})
$$

Is the transconductance,

$$
r_o = \frac{1}{\lambda I_{DQ}}
$$

Is the finite output resistance.

{% include circuit.html id="fet-ss" from_data=true %}

Here, the output voltage is

$$ 
V_o = -g_m V_gs(r_o \| R_D)
$$

And the input voltage is

$$
V_i = V_{gs}
$$

The small-signal voltage gain is defined as

$$
A_v = \frac{V_o}{V_i} = -g_m (r_o \| R_D)
$$


## BJT Small-Signal Model

Original circuit:

{% include circuit.html id="bjt-amp" from_data=true %}

The transistor becomes:
- A dependent current source $$\beta i_b$$ from Collector to Emitter, parallel to a resistor $$r_o$$
- A resistor $$r_{\pi}$$ from Base to Emitter

Where:

$$
r_{\pi} = \frac{V_T}{I_{BQ}} = \frac{\beta V_T}{I_{CQ}}
$$

Is the hybrid $$\pi$$ model resistance.

$$
r_o = \frac{V_A}{I_{CQ}}
$$

Is the transistor output resistance, and $$V_A$$ is the early voltage.

{% include circuit.html id="bjt-ss" from_data=true %}

Here, the output voltage is

$$ 
V_o = -R_C \beta i_b
$$

And the input voltage is

$$
V_i = i_b r_{\pi}
$$

The small-signal voltage gain is defined as

$$
A_v = \frac{V_o}{V_i} = -\frac{\beta R_C}{r_{\pi}}
$$

> The dependent current source may also be expressed as
>
> $$g_m v_{be}$$
>
> Where
>
> $$g_m = \frac{I_{CQ}}{V_T}$$
>
> Is the transconductance.

There is also a model with transconductance $$g_m$$ but given that $$i_c = \beta i_b$$ we can use this simpler approach.

> For PNPs, switch the direction of the currents.

***

# Examples

When in doubt, KVL is your best friend.

## FET Amplifiers

Basic NMOS amplifier:

{% include circuit.html id="fet-amp" from_data=true %}

### Solving Steps

Assume NMOS is in saturation, and $$V_{GSQ},\ V_{DD},\ V_{TN},\ K_n,\ R_D$$ are given.

1. DC Analysis: Q Point (Large Signal)
  - AC: Short Volt, Open Current Sources
  - Short Inductors, Open Capacitors
  - Get $$I_{DQ},\ V_{DSQ}$$
  - Verify $$V_{DSQ} > V_{DSQ}(sat)$$ (otherwise, non-linear)
2. AC Analysis (small signal)
  - DC: Short Volt, Open Current Sources
  - Open Inductors, Short Capacitors
  - Replace NMOS by small-signal model
  - Get $$v_{out},\ v_{in}$$
  - Voltage gain: $$A_v = \frac{v_{out}}{v_{in}}$$

{% include circuit.html id="nmos-amp2" from_data=true %}

{% include circuit.html id="pmos-amp1" from_data=true %}


### FET Amplifier Comparison

| Configuration | $$A_v$$           | Input R           | Output R |
| Common source | $$A_v > 1$$       | $$R_{TH}$$        | $$R_D$$  |
| Common drain  | $$A_v \approx 1$$ | $$R_{TH}$$        | Low      |
| Common source | $$A_v \geq 1$$    | $$\frac{1}{g_m}$$ | $$R_D$$  |

### BJT Amplifier Comparison

| Configuration     | $$A_v$$           | Input R                       | Output R       |
| Common collector  | $$A_v > 1$$       | $$R_1 \| R_2 \| R_{ib}$$      | $$R_C \| r_o$$ |
| Common base       | $$A_v \approx 1$$ | $$R_1 \| R_2 \| R_{ib}$$      | $$\frac{r_{\pi}}{\beta + 1} \| R_E \| r_o$$ |
| Common emitter    | $$A_v > 1$$       | $$\frac{r_{\pi}}{\beta + 1}$$ | $$r_o \| R_C$$  |


## Frequency

See transistors frequency [here](fet-frequency).