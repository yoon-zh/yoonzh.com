---
layout: post
title: curvature
card_title: "Curvature and stress in deformed beams"
math: true
url: /posts/mechanics/curvature
excerpt: "4, 5, 6.1: Behavior of beams deforming under loads and moments, how to calculate strain and stress in simple cases."
date: 2025-11-10
tech_stack: [Mechanics]
---

## Strain on bending

> $$\varepsilon_x = -\frac{y}{\rho}$$

Where
- $$\varepsilon_x$$ is normal strain
- $$y$$ is distance of longitudinal line from neutral surface (where the beam length does not change under bending)
- $$\rho$$ is radius of curvature (defining the arc of the bent beam)

Reminder, for an arc (part of a circle):

$$L = \theta r$$

Where
- $$L$$ is length of arc
- $$\theta$$ is angle
- $$r$$ is radius

Sometimes a quantity called curvature is defined as $$\kappa = \frac{1}{\rho}$$, and the equations on this page are expressed in terms of $$\kappa$$ instead of $$\rho$$.

With this, we can rewrite the normal stress for a linear elastic material:

$$\sigma_x = E \varepsilon_x = -\frac{Ey}{\rho}$$

Where
- $$E$$ is [Young's Modulus](elastic.html#:~:text=Dimensionless-,Young’s%20Modulus)

## Flexure formula

> $$\sigma_x = -\frac{M y}{I}$$

Where
- $$\sigma_x$$ is normal stress
- $$M$$ is bending moment
- $$y$$ is distance of plane from neutral surface
- $$I$$ is inertial moment of the cross section (with respect to the neutral axis)

### Axial loads

If axial loads are present, we can add such force to the flexure formula to get the normal stress:

$$\sigma_x = \frac{N}{A} -\frac{M y}{I}$$

Where
- $$N$$ is axial force
- $$A$$ is cross-section area

This assumes the axial load acts in the centroid of the cross area. If this is not the case, we can decompose it as a central force and a moment caused by the offset:

$$\sigma_x = \frac{N}{A} - \frac{Ney}{y} -\frac{M y}{I}$$

Where
- $$e$$ is distance from centroid to where N is applied

In this last equation, $$M$$ is any other bending moments from external forces.


## Maximum stress in cross section

From the previous equations, we can see that $$\sigma_x$$ is maximum when $$y$$ is maximum (aka. the furthest point from the center of a beam).

Let $$c = y_{\text{max}}$$ be the furthest point from neutral axis in a beam. Assuming a beam is symmetric about the neutral axis, $$c$$ is the same from up and down the beam. Then we can rewrite flexure formula as:

$$\sigma_{\text{max}} = \frac{M c}{I}$$

> Let $$S = \frac{I}{c}$$ be the section moduli. Then the maximum bending stress becomes:
>
> $$\sigma_{\text{max}} = \frac{M}{S}$$
>
> Where the moment can be calculated as:
>
> $$M = \frac{EI}{\rho}$$

Where
- $$E$$ is Young's Modulus
- $$I$$ is inertial moment of the cross section (with respect to the neutral axis)
- $$\rho$$ is radius of curvature

### Shear stress in cross section

> $$\tau = \frac{VQ}{Ib}$$

Where
- $$\tau$$ is shear stress in a cross section for a bent beam
- $$V$$ is shear force
- $$Q = \int y dA$$ is first moment of area above the level of $$\tau$$ section
- $$I$$ is inertial moment of the cross section
- $$b$$ is width of beam in the cross section

Q is annoying to do by hand, for which it is common to have some tables with values of Q for different shapes (much like for moment of inertia).

> For rectangular cross-sections:
>
> $$\tau_{\text{max}} = \frac{3V}{2A}$$
>
> Where A = b*h is cross-sectional area.

> For circular cross section (solid):
>
> $$\tau_{\text{max}} = \frac{4V}{3A}$$
>
> For circular cross section (hollow):
>
> $$\tau_{\text{max}} = \frac{4V}{3A} \left(\frac{r_2^2 + r_2 r_1 + r_1^2}{r_2^2 + r_1^2} \right)$$
>
> Where $$r_1,\ r_2$$ are inner and outer radius, respectively.