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
- $$r_o$$ is output resistance of transistor (due to collector voltage)
- $$V_A$$ is early voltage
- $$I_{CQ}$$ is collector current at Q-point

***

## Common Collector CC

Also called "emitter follower"

DC

{% include circuit.html id="npn-commonemitter" from_data=true %}

Small Signal

{% include circuit.html id="npn-commonemitter" from_data=true %}


## Common Base CB

DC

{% include circuit.html id="npn-commonemitter" from_data=true %}

Small Signal

{% include circuit.html id="npn-commonemitter" from_data=true %}


## Common Emitter CE

DC

{% include circuit.html id="npn-ce" from_data=true %}

Small Signal

{% include circuit.html id="npn-ce-ss" from_data=true %}

$$R_i = r_{\pi}$$

$$R_o = R_C \| r_o$$

$$A_v = -g_m (R_C \| R_L \| r_o)$$

Usage: Gain stage

### Common emitter with resistor (degradation)

DC

{% include circuit.html id="npn-cer" from_data=true %}

Small Signal

{% include circuit.html id="npn-cer-ss" from_data=true %}

$$R_i = r_{\pi}$$

$$R_o = R_C \| r_o$$

$$A_v = -g_m (R_C \| R_L \| r_o)$$

Usage: Gain stage, $$R_E$$ provides more stability

Some intuition on CE with resistor [here](https://www.reddit.com/r/AskElectronics/comments/18zbqlx/help_me_understand_common_emitter_amplifier/)