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

{% include circuit.html id="npn-commonemitter" from_data=true %}

Small Signal

{% include circuit.html id="npn-commonemitter" from_data=true %}

$$r_o = \frac{V_A}{I_C}$$ 
