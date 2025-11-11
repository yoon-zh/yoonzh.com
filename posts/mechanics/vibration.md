---
layout: post
title: vibration
card_title: "Vibration and frequency"
math: true
url: /posts/mechanics/vibration
excerpt: "6.2, 9: Springs, vibration, frequency and response"
date: 2025-11-10
tech_stack: [Mechanics]
---

## Springs

Simple hooke's law for linear springs:

$$F = k\delta$$

Where
- $$F$$ is force
- $$k$$ is stiffness of spring
- $$\delta$$ is deformation of spring

Springs in parallel:

$$k_{eq} = \sum k_i$$

Springs in series:

$$\frac{1}{k_{eq}} = \sum \frac{1}{k_i}$$

aka same as capacitors.

## Resonance frequency

| q                               | Free | Forced (cantilever) | Torsion |
|---------------------------------|---------------|-----------------|---------|
| Resonance frequency $$\omega$$  | $$\sqrt{\frac{K}{I}} = \sqrt{\frac{g}{l}}$$ | $$\sqrt{\frac{K}{m}}$$ | $$\sqrt{\frac{K}{I}}$$ |
| Stiffness $$K$$                 | $$mgl$$ | $$\frac{3 E I}{L^3}$$ | $$\frac{GJ}{L}$$ |


### Free undamped system

Frequency:

$$\omega = \sqrt{\frac{K}{m}}$$

Where
- $$\omega$$ is natural resonance frequency
- $$K$$ is stiffness of object
- $$m$$ is mass of object

$$K = mgl$$

Where
- $$m$$ is mass of object
- $$g$$ is gravity
- $$l$$ is length of spring

Response:

$$x(t) = A_o \sin{\omega t + \phi_o}$$

Where
- $$A_o$$ is amplitude of oscillation
- $$\omega$$ is natural resonance frequency
- $$t$$ is time
- $$\phi_o$$ is phase (initial position, for $$t = 0$$)


### Forced undamped system, 1 degree of freedom, cantilever

Frequency:

$$\omega = \sqrt{\frac{K}{M}}$$

Where
- $$\omega$$ is natural resonance frequency
- $$K$$ is stiffness of object
- $$M$$ is mass of object

$$K = \frac{3 E I}{L^3}$$

Where
- $$E$$ is [Young's Modulus](elastic.html#:~:text=Dimensionless-,Young’s%20Modulus)
- $$I$$ is area moment of inertia
- $$L$$ is length of beam/spring

## Frequency for damped systems

$$f_d = f_n \sqrt{1 - \zeta^2}$$

Where
- $$f_d$$ is damped natural frequency
- $$f_n$$ is undamped natural frequency
- $$\zeta$$ is damping ratio


### Torsion

$$\omega = \sqrt{\frac{K_t}{I}}$$

Where
- $$\omega$$ is natural resonance frequency
- $$K_t$$ is torsional stiffness of object
- $$I$$ is mass moment of inertia

$$K_t = \frac{GJ}{L}$$

Where
- $$G$$ is [shear modulus](elastic.html#:~:text=Dimensionless-,Shear%20Modulus)
- $$J$$ is polar moment of inertia
- $$L$$ is length of spring/shaft