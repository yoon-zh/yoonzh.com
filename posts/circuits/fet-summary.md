---
layout: post
title: fet-summary
card_title: "Transistors Summary"
math: true
circuit: true
url: /posts/circuits/fet-summary
excerpt: "MOSFETs, BJTs, amplifiers condensed."
tech_stack: [EE]
---

date: 2025-05-22

***

# MOSFET

Metal  
Oxide  
Semiconductor  
Field  
Effect  
Transistor

# Operation Regions

> Transition point
> - NMOS: $$V_{DS} (sat) = V_{GS} - V_{TN}$$
> - PMOS: $$V_{SD} (sat) = V_{SG} - V_{TP}$$

| Operation Region  | NMOS | PMOS |
|-------------------|------|------|
| Saturation        | $$i_D = K_n (V_{DS}(sat))^2$$ | $$i_D = K_n (V_{SG}(sat))^2$$ |
| Triode            | $$i_D = K_n (2V_{DS}(sat) \times V_{DS} - V^2_{DS})$$ | $$i_D = K_n (2V_{SG}(sat) \times V_{SD} - V^2_{SD})$$ |
| Cutoff            | $$i_D = 0$$ | $$i_D = 0$$ |

| Condition         | NMOS | PMOS |
|-------------------|------|------|
| Saturation        | $$V_{DS} \geq V_{DS}(sat)$$ | $$V_{SD} \geq V_{SD}(sat)$$ |
| Triode            | $$V_{DS} < V_{DS}(sat)$$ | $$V_{SD} < V_{SD}(sat)$$ |
| Cutoff            | $$V_{GS} < V_{TN}$$ | $$\lvert V_{SG} \rvert < \lvert V_{TP} \rvert$$ |

## Solving Process

1. Assume operation region (default: saturation)
2. Analyze following saturation model, get $$i_D, V_{DS}$$
3. Verify conditions for assumed region are met: $$V_{DS} \geq V_{DS}(sat)$$
  - If yes, analysis is complete.
  - If not, change operation region and analyze again.

> KVL is your best friend. Below are some examples for circuits, you can easily get this equations with KVL.

## NMOS

The symbol is not an NMOS but the renderer does not have it (to change !important).

{% include circuit.html id="nmos-commonsource" from_data=true %}

Assume $$V_{DD},\ V_{TN},\ K_n$$ and the resistor values are given. 

$$
V_{GS} = V_G - V_S,\ V_S = 0
$$

$$
V_{GS} = V_G = \frac{R2}{R1 + R2} V_{DD}
$$

If $$V_{GS} \leq V_{TN}$$, then the NMOS is in the cutoff region, $$i_D = 0,\ V_{DS} = V_{DD}$$.

If not, continue:

$$
V_{DS}(sat) = V_{GS} - V_{TN}
$$

Assume $$V_{DS} \geq V_{DS}(sat)$$:

$$
i_D = K_n (V_{DS}(sat))^2
$$

$$
V_{DS} = V_{DD} - i_D R_D
$$

If $$V_{DS} \geq V_{DS}(sat)$$, then the NMOS is indeed in saturation, the analysis is complete.

If not, then the NMOS is in triode region:

$$
i_D = K_n (2V_{DS}(sat) \times V_{DS} - V^2_{DS})
$$

$$
V_{DS} = V_{DD} - i_D R_D
$$

With the new value of $$V_{DS}$$, verify that $$V_{DS} < V_{DS}(sat)$$. If yes, analysis is complete.

If not, verify your calculations.


## PMOS

{% include circuit.html id="pmos-commonsource" from_data=true %}

Assume $$V_{DD},\ V_{TP},\ K_n$$ and the resistor values are given.

$$
V_{SG} = \frac{R1}{R1 + R2} V_{DD}
$$

If $$\lvert V_{SG} \rvert < \lvert V_{TP} \rvert$$, then the PMOS is in the cutoff region, $$i_D = 0,\ V_{SD} = V_{DD}$$.

If not, continue:

$$
V_{SD}(sat) = V_{SG} + V_{TP}
$$

Assume $$V_{SD} \geq V_{SD}(sat)$$:

$$
i_D = K_n (V_{SG}(sat))^2
$$

$$
V_{SD} = V_{DD} - i_D R_D
$$

If $$V_{SD} \geq V_{SD}(sat)$$, then the PMOS is indeed in saturation, the analysis is complete.

If not, then the PMOS is in triode region:

$$
i_D = K_n (2V_{SD}(sat) \times V_{SD} - V^2_{SD})
$$

$$
V_{SD} = V_{DD} - i_D R_D
$$

With the new value of $$V_{DS}$$, verify that $$V_{DS} < V_{DS}(sat)$$. If yes, analysis is complete.

If not, verify your calculations.

## NMOS, PMOS Logic gates

See [FET logic gates](digital)

***

# BJT