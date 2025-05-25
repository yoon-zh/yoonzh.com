---
layout: post
title: how-they-work
card_title: "Motors 101"
math: true
url: /posts/motors/how-they-work
tech_stack: [Motors]
---
date: 2025-04-15

## In a nutsell: Magnets

Magnets are the key behind a motor's operation. Everyone knows opposite poles attract, equal poles repulse... Some engineers found out a cable arranged as a spring (aka inductor) can create a magnetic field when current flows. And masterminds like Nikola Tesla exploited these physics to create motors.

Before we can choose a motor for our robots and cars, we need a grasp of how it works.

- Magnets
  - Faraday's law
  - Induced Voltage
  - Inductors
  - Energy in magnetic fields
- Transformers
- Actuators
- DC machinery
  - DC Motors
- AC Machinery

## Faraday's Law

$$
e_{ind} = -\frac{d\phi}{dt}
$$

Where $$e_{ind}$$ is the induced voltage, and $$\phi$$ is the magnetic flux in the coil.

In a coil with $$N$$ turns where a magnetic flux $$\phi$$ is applied through it,

$$
e_{ind} = -N \frac{d\phi}{dt}
$$

## Lenz Law

Responsible for the minus sign in Faraday's Law:

Given a flux $$\phi$$ through a coil, the flux induces a voltage and thus, a current known as *eddy current*. The current induced then generates an opposing flux (imagine Newton's action-reaction).

# Anatomy

Motors can be divided into 2 main components: **Stator** and **Rotor**.

## Stator


## Rotor


## Credits

[^1]: Chapman, S. (2012). _Electric Machinery Fundamentals._ McGraw Hill: 5th Ed.

[^2]: Umans, S. (2014). _Electric Machinery._ McGraw Hill: 7th Ed.

[^3]: Bu, Q. (2025). _Introduction to Mechatronics_ (Lecture Notes).