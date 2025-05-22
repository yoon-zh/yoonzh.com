---
layout: post
title: digital
card_title: "Digital Circuits"
math: true
circuit: true
url: /posts/circuits/digital
excerpt: "Digital vs. analog, logic gates."
tech_stack: [EE]
---

date: 2025-05-20

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

other content pending.