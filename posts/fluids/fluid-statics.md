---
layout: post
title: fluid-statics
card_title: "Fluid Statics"
math: true
url: /posts/fluids/fluid-statics
excerpt: "Structural statics, but with fluids"
date: 2025-10-25
tech_stack: [Fluids]
---

## Pressure Distribution

Consider a differential volume element of a fluid. For static balance, the pressure in any direction towards this element is the same regardless of the orientation in which it is applied. This means pressure can be considered as scalar in static fluids for practical and simple problems.

Now consider a volume of some liquid, with some specific weight $$\gamma$$ and height $$z$$. Given the pressure as a scalar as mentioned above, we can do a static force balance that reduces to:

$$p + \gamma h = k$$

Where
- $$p$$ is pressure
- $$\gamma = \rho g$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight)
- $$h$$ is height
- $$k$$ is a constant real number

Pressure does not vary horizontally in the same body of liquid.

This is used for liquids, since we assume the fluid is incompressible (density remains constant through pressure and temp changes), and does NOT apply to gases.

Let's visualize the equation in a more practical way:

> Imagine we have some liquid in a bottle, with specific weight $$\gamma$$. Imagine two points of reference, A and B. Point B is below A by some distance $$h$$. Then the following is true:
>
> $$P_B = P_A + \gamma h$$
>
> In other words,
>
> $$P_A = P_B - \gamma h$$
>
> This equation tells us $$P_A$$ is smaller than $$P_B$$. Makes sense, since there is more liquid on top of B which increases the pressure compared to A.

***

## Absolute vs. Gauge Pressure

> Absolute: Consider vacuum as reference. The absolute pressure of air in your room is roughly $$P_{\text{abs}} = P_{\text{atm}} = 101.325 kPa$$
>
> Gauge: Consider atmosphere as reference. The gauge pressure of air in your room is then 0.
>
> Formally speaking:
>
> $$P_{\text{gauge}} = P_{\text{abs}} - P_{\text{atm}}$$

### Pressure Head

$$h = \frac{P}{\gamma}$$

Where
- $$h$$ is pressure head (height)
- $$P$$ is pressure
- $$\gamma = \rho g$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight)

In short, pressure head is the height of a liquid body $$h$$ that causes a pressure $$P$$. For example, if they ask you how high a water tank is given the pressure at the bottom, then you can use this equation.

Note: This equation ignores surface tension.

***

## Hydraulic Machines

Imagine we have some liquid enclosed in some tubes, and we block the tubes with pistons. If we apply pressure through the pistons so that the liquid is in contact with both of them, then the pressure in each piston is the same regardless of the height.

> $$p_1 = p_2$$
>
> $$\frac{F1}{A1} = \frac{F2}{A2}$$

See [this video](https://www.youtube.com/watch?v=TMhrBeGkYow) for an example where this is useful. DONT SKIP IT!

***

## Forces on flat surfaces

> Say we have some water where the pressure in the liquid surface is $$P_s$$. There is some flat object (2D) submerged in the water at some angle $$\theta$$ from the horizontal. Then the force applied to the object by the water AND atmosphere is
>
> $$F = (P_s + \gamma \bar{y} \sin{\theta})A$$

Where
- $$F$$ is force
- $$P_s$$ is pressure in the liquid surface
- $$\gamma = \rho g$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight)
- $$\bar{y}$$ is distance from centroid[^1] of plane to liquid surface
- $$\theta$$ is the angle of the submerged object from the horizontal

Note the equation above simply uses the definition of pressure $$P = \frac{F}{A}$$, where the pressure felt in the object is $$P_s + \gamma \bar{y} \sin{\theta}$$. You can notice $$\gamma \bar{y} \sin{\theta}$$ looks similar to the [pressure distribution](#pressure-distribution) equation defined earlier, but the height is now $$\bar{y} \sin{\theta}$$. This is because the shape of the object AND the inclination matters.

The equation suggests that a large and short object may feel the same pressure given a specific angle, and a flat submerged object that is perfectly horizontal does not feel pressure from the water (because $$\sin{0} = 0$$).

### Center of Pressure

Consider a submerged object as before. We can easily find the pressure the object feels, but it is more complex to explain how such pressure is distributed around it. 

Remember in simple physics where we calculate the center of gravity of an object, and replace a distributed weight as a single force acting on that center point? We can do the same with a liquid, and such point is called the center of pressure:

$$
y_{cp} = \bar{y} + \frac{I_c \gamma \sin{\theta}}{A(P_s + \gamma \bar{y} \sin{\theta})}
$$

Where
- $$y_{cp}$$ is center of pressure
- $$\bar{y}$$ is distance from centroid[^1] of plane to liquid surface
- $$I_c$$ is moment of inertia about the central axis
- $$\gamma$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight)
- $$A$$ is area
- $$P_s$$ is pressure in the liquid surface
- $$\theta$$ is the angle of the submerged object from the horizontal

To keep it simple, the equation tells us the center of pressure is ALWAYS below the centroid $$\bar{y}$$, which makes sense since the pressure exerted by a fluid increases with depth.

This equation is rather complex, and it is not the formal definition (you may have noticed if you remember how the center of gravity goes). If you need to know more about this, go [here](https://www.grc.nasa.gov/www/k-12/VirtualAero/BottleRocket/airplane/cp.html).

In case you have a vertical wall that holds the water, you can model the water as a vertical triangle load and turn it into a statics problem.

***

## Forces on curved surfaces

When the submerged object is curved, we need to consider the horizontal forces.

Horizontal component:

> $$R_x = A_v (P_s + \gamma \bar{y}_v)$$

Where
- $$R_x$$ is reaction force of the curved surface in the horizontal axis
- $$A_v$$ is projected area of the curved surface on a vertical plane
- $$P_s$$ is pressure in the liquid surface
- $$\gamma$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight)
- $$\bar{y}_v$$ is vertical distance from centroid[^1] of $$A_v$$ to liquid surface

Vertical component:

> $$R_y = P_s A_h + \gamma V$$

Where
- $$R_y$$ is reaction force of the curved surface in the vertical axis
- $$P_s$$ is pressure in the liquid surface
- $$A_h$$ is projected area of the curved surface on a horizontal plane
- $$\gamma$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight)
- $$V$$ is volume of the liquid above the curved surface

Total:

> $$R = \sqrt{R_x^2 + R_y^2}$$
>
> $$\theta = \arctan{\frac{R_y}{R_x}}$$

Where
- $$R$$ is total hydrostatic force on the curved surface
- $$\theta$$ is orientation of the force

> Note: sometimes the curved object has a liquid from only one side, like a dam. The equations above still apply, since we aim for static equilibrium.

***

## Buoyancy

> $$F_b = \gamma V$$

Where
- $$F_b$$ is buoyant force
- $$\gamma$$ is [specific weight](fluids-1.html#:~:text=Specific,Weight) of the fluid
- $$V$$ is volume of the object submerged in the fluid

Notice we take the speficic weight of the *fluid*, but the volume of the *object*. This is because we care about the volume difference of the water applying pressure to the object, which is the volume occupied by the object itself.

In case you don't understand (it took me a while):

Consider a simple example of a cube fully submerged in water. The water "above" the cube applies a pressure in the top face, while the water "below" applies pressure in the bottom face. Since the water pressure increases with depth, the water "below" exerts a greater pressure than the one "above". This pressure difference is what causes buoyancy, which results in a force bringing the cube upwards.

As such, we care about the difference in pressure applied by these two, which is a function of height as we said [here](#pressure-distribution). This height is clearly the space our cube is occupying. The volume in the equation considers this height as well as superficial area of the cube, where the water applies pressure.

> The buoyant force acts at the centroid of the submerged volume of the object. If fully submerged, this is simply the centroid of the object.

Of course, the object still has a weight. Don't forget to sum it too. 

A good intuition: Consider a object submerged in some liquid, where $$V_{\text{sub}}$$ is the submerged part. Now imagine a bucket of such liquid with the same volume $$V_{\text{sub}}$$. If the whole object weighs less than the imaginary bucket, then it floats. Otherwise, it sinks (simplified).

***

## Dict

[^1]: Centroid $$\bar{y} = \frac{1}{A} \int y dA$$