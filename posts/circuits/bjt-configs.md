---
layout: hidden
title: bjt-configs
card_title: "BJT configurations"
excerpt: "Common emitter, common collector, etc"
math: true
circuit: true
url: /posts/circuits/bjt-configs
tech_stack: [EE]
date: 2025-11-11
---

| Configuration     | $$A_v$$           | Input R                       | Output R       |
|-------------------|-------------------|-------------------------------|----------------|
| Common collector  | $$A_v > 1$$       | $$R_1 \| R_2 \| R_{ib}$$      | $$R_C \| r_o$$ |
| Common base       | $$A_v \approx 1$$ | $$R_1 \| R_2 \| R_{ib}$$      | $$\frac{r_{\pi}}{\beta + 1} \| R_E \| r_o$$ |
| Common emitter    | $$A_v > 1$$       | $$\frac{r_{\pi}}{\beta + 1}$$ | $$r_o \| R_C$$  |

***

## Small Signal parameters

$$r_{\pi} = \frac{\beta V_T}{I_{CQ}}$$

Where
- $$r_{\pi}$$ is diffusion resistance (base-emitter input resistance)
- $$\beta$$ is common-emitter current gain constant
- $$V_T$$ is thermal voltage (around 0.026 V at 20°C)
- $$I_{CQ}$$ is collector current at Q-point


$$r_o = \frac{V_A}{I_{CQ}}$$

Where
- $$r_o$$ is output resistance of transistor (due to collector voltage, aka early effect)
- $$V_A$$ is early voltage
- $$I_{CQ}$$ is collector current at Q-point


$$g_m = \frac{I_{CQ}}{V_T}$$

Where 
- $$g_m$$ is transconductance (current from transistor given input voltage)
- $$I_{CQ}$$ is collector current at Q-point
- $$V_T$$ is thermal voltage (around 0.026 V at 27°C)

> Note: $$r_{\pi}$$ and $$g_m$$ are related:
>
> $$g_m r_{\pi} = \beta$$
>
> Where $$\beta$$ is common-emitter current gain constant

***

## Common Collector CC

Also called "emitter follower"

DC

{% include circuit.html id="npn-cc" from_data=true %}

Small Signal

{% include circuit.html id="npn-cc-ss" from_data=true %}

$$R_i = r_{\pi} + (1 + \beta) R_E \| R_L$$

$$R_o = \frac{r_{\pi} + R_s}{1 + \beta} \| R_E$$

$$A_v = \frac{g_m (R_E \| R_L)}{1 + g_m (R_E \| R_L)}$$

$$R_{\text{loss}} = \frac{R_i}{R_i + R_s}$$

<details>
   <summary>Full version </summary>
   $$R_i = r_{\pi} + (1 + \beta) R_E \| R_L \| r_o$$
</details>

## Common Base CB

DC

{% include circuit.html id="npn-commonemitter" from_data=true %}

Small Signal

{% include circuit.html id="npn-commonemitter" from_data=true %}

$$R_i = \frac{r_{\pi}}{1 + \beta}$$

$$R_o = R_C$$

$$A_v = g_m R_C \| R_L$$

## Common Emitter CE

DC

{% include circuit.html id="npn-ce" from_data=true %}

Small Signal

{% include circuit.html id="npn-ce-ss" from_data=true %}

$$R_i = r_{\pi}$$

$$R_o = R_C \| r_o$$

$$A_v = -g_m (R_C \| R_L \| r_o)$$

$$R_{\text{loss}} = \frac{R1 \| R2 \| r_{\pi}}{R1 \| R2 \| r_{\pi} + R_s$$

Usage: Gain stage

### Common emitter with resistor (degradation)

DC

{% include circuit.html id="npn-cer" from_data=true %}

Small Signal

{% include circuit.html id="npn-cer-ss" from_data=true %}

$$R_i = r_{\pi} + (1 + \beta) R_E$$

$$R_o = R_C \| r_o$$

$$A_v = -\frac{g_m (R_C \| R_L)}{1 + g_m R_E}$$

<details>
   <summary>Full version of Av </summary>
   $$A_v = -\frac{g_m (R_C \| R_L \| r_o)}{1 + g_m R_E + \frac{R_E}{r_{\pi}}}$$

   The equation shown first omits r_o and a minor term in the denominator.
</details>

$$R_{\text{loss}} = \frac{R_i}{R_i + R_s}$$

Usage: Gain stage, $$R_E$$ provides more stability

Some intuition on CE with resistor [here](https://www.reddit.com/r/AskElectronics/comments/18zbqlx/help_me_understand_common_emitter_amplifier/)

## Diff Amp

$$R_i = 2 r_{\pi}$$

$$R_o = R_c \| r_o$$

$$A_v = -\frac{1}{2} A_v (CE) \approx \frac{g_m R_C}{2}$$


## Darlington Pair

$$R_i = r_{\pi 1} + (1 + \beta_1) r_{\pi 2}$$

$$R_o = R_C \| r_o \approx R_C$$

$$A_v = \frac{\beta_1 \beta_2 R_C}{r_{\pi 1} + (1 + \beta_1) r_{\pi 2}}$$


## Current Mirror

$$I_{C2} = \frac{I_{REF}}{1 + \frac{2}{\beta}} \approx I_{REF}$$

$$R_o = r_{o2}$$


## Widlar Current source

$$I_{C2} = V_T \ln{\frac{I_{REF}}{I_{C2}}}$$

$$I_{C2}$$ must be solved numerically.

$$R_o = r_{o2} (1 + g_{m2} R_E)$$