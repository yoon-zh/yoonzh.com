---
layout: post
title: digital
card_title: "Digital Circuits"
math: true
circuit: true
url: /posts/circuits/digital
excerpt: "Digital vs. analog, logic gates."
tech_stack: [EE]
date: 2025-05-22
---

***

## Logic Gates with Diodes

### AND

{% include circuit.html id="diode-and" from_data=true %}

Let $$Vs = 5\ V$$, and $$V_A, V_B = (0, 5)\ V$$.

| $$V_A$$ | $$V_B$$ | $$V_{output}$$ |
|---------|---------|----------------|
| 0 V     | 0 V     | 0.7 V          |
| 0 V     | 5 V     | 0.7 V          |
| 5 V     | 0 V     | 0.7 V          |
| 5 V     | 5 V     | 5 V            |

***

### OR

{% include circuit.html id="diode-or" from_data=true %}

Let $$Vs = 5\ V$$, and $$V_A, V_B = (0, 5)\ V$$.

| $$V_A$$ | $$V_B$$ | $$V_{output}$$ |
|---------|---------|----------------|
| 0 V     | 0 V     | 0 V            |
| 0 V     | 5 V     | 4.3 V          |
| 5 V     | 0 V     | 4.3 V          |
| 5 V     | 5 V     | 4.3 V          |

***

## Logic Gates with MOSFETs

### NOT

{% include circuit.html id="nmos-not" from_data=true %}

| $$V_A$$ | $$V_{output}$$ |
|---------|----------------|
| LOW     | HIGH           |
| HIGH    | LOW            |

### NOR

{% include circuit.html id="nmos-nor" from_data=true %}

| $$V_A$$ | $$V_B$$ | $$V_{output}$$ |
|---------|---------|----------------|
| 0 V     | 0 V     | HIGH           |
| 0 V     | 5 V     | LOW            |
| 5 V     | 0 V     | LOW            |
| 5 V     | 5 V     | LOW            |

***

## Logic Gates with BJTs

### NOT

{% include circuit.html id="npn-not" from_data=true %}

| $$V_A$$ | $$V_{output}$$ |
|---------|----------------|
| $$< V_{BE}(on)$$ | $$V_{CC}$$     |
| $$V_{CC}$$       | $$V_{CE}(sat)$$            |

### NOR

{% include circuit.html id="npn-nor" from_data=true %}

| $$V_A$$ | $$V_B$$ | $$V_{output}$$ |
|---------|---------|----------------|
| 0 V     | 0 V     | $$V_{CC}$$     |
| 0 V     | 5 V     | $$V_{CE}(sat)$$|
| 5 V     | 0 V     | $$V_{CE}(sat)$$|
| 5 V     | 5 V     | $$V_{CE}(sat)$$|

***




other content pending.