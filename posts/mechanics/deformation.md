---
layout: post
title: deformation
card_title: "Structure deformation and inclined sections"
math: true
url: /posts/mechanics/deformation
excerpt: "2: How do beams deform under loading, how to get stress on inclined sections"
date: 2025-11-09
tech_stack: [Mechanics]
---

## Stiffness and deformation

$$F = k\delta$$

Where

- $$F$$ is force
- $$k$$ is stiffness
- $$\delta$$ is deformation

$$\delta = \frac{FL}{EA}$$

- $$\delta$$ is deformation
- $$F$$ is force
- $$L$$ is length
- $$E$$ is Young's Modulus
- $$A$$ is area

If non-uniform loading:

$$\delta_i = \frac{N_i L_i}{EA}$$

Where
- $$N_i$$ is an internal force
- $$L_i$$ is length from reference where the internal force is measured

Note: you need to consider ALL forces in the beam that act in the same axis of deformation.

In differential form:

$$d\delta = \frac{N(x) dx}{E A(x)}$$

## Stresses on inclined sections

$$\sigma_{\theta} = \frac{F}{A} \cos^2{\theta}$$

Where
- $$\sigma_{\theta}$$ is normal stress on angle $$\theta$$
- $$F$$ is force
- $$A$$ is area
- $$\theta$$ is angle of inclination

$$\tau_{\theta} = -\frac{F}{A} \sin{\theta} \cos{\theta}$$

Where $$\tau_{\theta}$$ is shear stress on angle $$\theta$$