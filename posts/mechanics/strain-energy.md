---
layout: post
title: strain-energy
card_title: "Strain energy"
math: true
url: /posts/mechanics/strain-energy
excerpt: "3: Energy stored in bars under load"
date: 2025-11-09
tech_stack: [Mechanics]
---

## Strain Energy

When a bar deforms under a load, the force is doing work on the bar. We can say the work done is equal to the energy stored in the bar. Then we model this as strain energy.

For hookean bars (linear elastic):

$$U = \frac{F}{2} \delta$$

$$U = \frac{F^2 L}{2EA}$$

Where
- $$U$$ is strain energy
- $$\delta$$ is deformation
- $$F$$ is force
- $$L$$ is length
- $$E$$ is Young's Modulus
- $$A$$ is area

Of course, this undergoes multiple assumptions. Most importantly, we assume the strain is within the linear region of the [stress-strain curve](https://en.wikipedia.org/wiki/Stress–strain_curve).

We can model the strain energy as a sum:

$$U = \sum_{i=1}^{n} \frac{N_i^2 L_i}{2E_i A_i}$$

Where n is the number of sections in the bar, whenever properties between sections change. If not discrete, turn into integral.

$$U$$ is always positive, in both tension and compression.

### Strain Energy per unit volume

$$u = \frac{\sigma^2}{2E}$$

$$u = \frac{F^2}{2EA^2}$$

Where
- $$u$$ is strain energy per unit volume
- $$\sigma$$ is stress
- $$E$$ is Young's Modulus
- $$F$$ is force
- $$A$$ is area


## Stress Concentrations

Say we have some object and apply a force to it in a point P. Consider another point A that is "far enough" from P in the object. Then the stresses in A would be roughly the same regardless of how we apply the force in P.

For example. consider a rectangular bar. Imagine point A is around the center. Say we apply some force of magnitude F to compress the bar from the sides. Then we can safely assume the way we apply F (uniform or not, or at a single point) won't affect the stress felt around A. This is called Saint Venant's principle.

If you want a visualization, take a look at this article [here](https://www.comsol.com/blogs/applying-and-interpreting-saint-venants-principle)

## Stress Concentration Factor

Now, we know stress concentrates in an object where irregularities exist. For example, holes, corners, edges, or change of materials. Using the knowledge above, we can make up a proportionality constant between the stress from where the force is applied and the stress somewhere with irregularities:

$$K = \frac{\sigma_{\text{max}}}{\sigma_{\text{nom}}}$$

Where
- $$K$$ is stress concentration factor
- $$\sigma_{\text{max}}$$ is maximum stress
- $$\sigma_{\text{nom}}$$ is nominal stress

In short, consider an object with some "constant" shape like a bar, but with a irregularity around the middle, like a hole or some fillets. As we said before, we know the stress will be maximum $$\sigma_{\text{max}}$$ in those areas. But to simplify calculations, we can calculate the stress as if such imperfection didn't exist, $$\sigma_{\text{nom}}$$, and then multiply it by a factor $$K$$ to get the real stress because of the imperfection.

Now, there is a catch to this: how do we get K? Some people have prepared graphs for K values given different kinds of imperfections (example [here](https://www.unm.edu/~bgreen/ME360/Stress_Concentration_Tables.pdf)).

Q: Do we really need this? Why not calculate the stress directly?  
A: In short, we probably can't calculate it. Think of it like calculating the moment of inertia, but the shape changes in both y and z directions. It's not practical to solve it by hand, and this is the case for stress concentrations (although this is more complex).