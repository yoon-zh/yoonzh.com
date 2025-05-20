---
layout: post
title: induction
card_title: "Induction Motors"
math: true
url: /posts/motors/induction
tech_stack: [Motors]
---
date: 2025-04-15

Induction Motors

## Efficiency

Let's consider a thermodynamic approach to calculate the efficiency of our induction motors. We shall consider the various power losses from the cables to the rotor spinning.

Power losses to consider:
- Stator copper loss
- Stator core loss
- Rotor copper loss
- Friction, windage loss
- Stray loss (misc losses)

We can divide the analysis in three stages:
- Crossing the air gap
- Converting power types
- Final power output

First, the power needs to "cross" the air gap between the stator and rotor, since the induction motor is not connected to the rotor physically. So let's consider this the first system.

Here we talk about the air gap power $$P_{AG}$$: The power from the stator that reaches the rotor through the air gap.

$$P_{AG} = P_{in} - P_{SCL} - P{core}$$

![image](/images/posts/fig6_12_inductionmotor.png)




