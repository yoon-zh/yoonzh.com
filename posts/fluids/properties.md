---
layout: post
title: properties
card_title: "Properties of Fluids"
math: true
url: /posts/fluids/properties
excerpt: "Basic properties and equations for fluids"
date: 2025-10-22
tech_stack: [Fluids]
---

## Density

> $$\rho = \frac{m}{V}$$

Where
- $$m$$ is the mass
- $$V$$ is the volume.

For most gasses, density is proportional to pressure but inversely to temperature. In other words, a gas is more dense for higher pressure, but less dense at higher temps (look at [Ideal Gases](#ideal-gases)).

Liquids are much more dense than gases, and in practical cases can be considered incompressible (in reality, changes in density need a large, large change in pressure/temp).

### Specific Weight

> $$\gamma = \rho g$$

Where
- $$\gamma$$ is specific weight
- $$\rho$$ is [density](#density)
- $$g$$ is gravity[^1]

For reference, the specific weight at room conditions[^2] is:

- For water, $$\gamma_{H_2O} = 9790\ \text{N/m}^3$$
- For air, $$\gamma_{air} = 11.8\ \text{N/m}^3$$

### Speficic Gravity

> $$SG = \frac{\rho}{\rho_{H_2O @ 4°C}}$$

Where
- $$\rho$$ is the [density](#density) of some liquid
- $$\rho_{H_2O @ 4°C}$$ is the density of water at 4°C, which is $$1000 \text{kg/m}^3$$

Specific gravity is adimensional.

This is used for liquids, given the reference value is from a liquid. There is a specific gravity for gases, but not practically used.

### Specific Volume

> $$\nu = \frac{1}{\rho}$$

Where
- $$\nu$$ is specific volume
- $$\rho$$ is [density](#density)

This property is most useful in thermodynamics, for example in energy balancing during Rankine cycles. For fluids, it is safe to skip this.

***

## Compressibility

> $$
> E_V = \left. -\frac{dp}{dV/V} \right|_{T_0}
> \approx \left. -\frac{\Delta p}{\Delta V/V} \right|_{T_0}
> $$

Where
- $$E_V$$ is bulk modulus of elasticity
- $$\Delta p$$ is pressure change
- $$\Delta V $$ is volume change
- $$V$$ is total volume
- $$T_0$$ is a given constant temperature

The equation carries a negative sign because it is inversely proportional: more pressure => less volume (makes sense, since the pressure compresses it, right?)

The delta form is used for averages or approximations, while the derivatives are for cases where you have an equation or a computer.

$$E_V$$ can be expressed with [density](#density) $$\rho$$ instead of volume:

$$E_V = \left. -\frac{dp}{d\rho / \rho} \right|_{T_0}$$

$$E_V$$ is in units of pressure, like pascals.

Large values of $$E_V$$ usually mean hard to compress. As you may expect, $$E_V$$ is usually several orders of magnitude bigger for liquids conpared to gases.

For ideal gases, $$E_V = P$$ if the temperature is constant.

### Speed of sound

$$
c = \sqrt{\left. \frac{dp}{d\rho} \right|_{s}}
\approx \sqrt{\left. \frac{dp}{d\rho} \right|_{T_0}}
= \sqrt{\frac{E_V}{\rho}}
$$

Where
- $$c$$ is speed of sound
- $$p$$ is pressure
- $$\rho$$ is [density](#density)
- $$s$$ is entropy (not covered here)
- $$T_0$$ is a given constant temperature
- $$E_V$$ is bulk modulus of elasticity

The approximation applies to liquids, where small changes in pressure cause small changes in temp.

The speed of sound at room conditions[^2]
- In water is about 5330 km/h (3313 mph)[^3]
- In air is about 1235 km/h (767 mph)[^3]

[But why is it faster in water, if it is more dense than air?](https://www.reddit.com/r/NoStupidQuestions/comments/1afzv0k/if_water_is_more_dense_than_air_why_is_the_speed/)

***

## Ideal Gases

> $$PV = nRT$$

Where
- $$P$$ is pressure
- $$V$$ is volume
- $$n$$ is moles
- $$R$$ is the universal gas constant[^4]
- $$T$$ is temperature

An ideal gas means the intermolecular forces are small enough to be safely ignored. In short, we assume the gas molecules just bounce around without loosing speed or energy. This allows us to simplify its behaviour to the equation above. *A proper definition available [here](https://www.ncbi.nlm.nih.gov/books/NBK441936/)*

As a general rule, when gases are low pressure and far from their liquid stage, it is safe to model them as an ideal gas. In other words, gases should never be modeled as ideal when they are vapors, or near that stage. *Additional reading [here](https://en.wikipedia.org/wiki/Non_ideal_compressible_fluid_dynamics)*

***

## Viscosity

For Newtonian fluids:

> $$\tau = \mu \frac{du}{dy}$$

Where
- $$\tau$$ is shear stress
- $$\mu$$ is dynamic viscosity
- $$u$$ is shear velocity
- $$y$$ is distance between the surfaces the liquid moves between

NASA article on viscosity [here](https://www.grc.nasa.gov/www/k-12/airplane/viscosity.html) (highly recommended!)

Non-Newtonian fluids have a non-linear relationship like the one above. Read more about them [here](https://en.wikipedia.org/wiki/Non-Newtonian_fluid).

***

## Surface Tension

> $$\sigma = \frac{F}{L}$$

Where
- $$\sigma$$ is surface tension
- $$F$$ is intermolecular force
- $$L$$ is length of liquid surface

As you can imagine, you will rarely find yourself using this equation since the force is complicated to define. But your teacher may ask you some surface tension questions involving droplets and bubbles. For these cases, the following equations come in handy:

### Droplet

> $$p_{in} - p_{out} = \frac{2\sigma}{R}$$

Where
- $$p_{in}$$ is pressure inside the droplet
- $$p_{out}$$ is pressure outside the droplet
- $$\sigma$$ is surface tension
- $$R$$ is radius of the droplet

This equation neglets the weight of the fluid inside the droplet.

The value of $$\sigma$$ depends on temperature and pressure. If you need it, you can find it in some table like [this](https://www.engineeringtoolbox.com/surface-tension-d_962.html).

### Bubble

> $$p_{in} - p_{out} = \frac{4\sigma}{R}$$

Where
- $$p_{in}$$ is pressure inside the bubble
- $$p_{out}$$ is pressure outside the bubble
- $$\sigma$$ is surface tension
- $$R$$ is radius of the bubble

Compared to the droplet, a bubble has twice the pressure assuming same size.

### Capillarity

> $$h = \frac{2\sigma \cos{\theta}}{\gamma R}$$

Where
- $$h$$ is height from the bottom of the tube to the top of the meniscus (the lowest part of the curve)
- $$\sigma$$ is [surface tension](#surface-tension)
- $$\theta$$ is the angle from the tube to the alignment of the curved liquid
- $$\gamma$$ is [specific weight](#specific-weight)
- $$R$$ is radius of the tube

***

## Dict

[^1]: Gravity in Earth $$g \approx 9.81\ \text{m/s}^2$$

[^2]: Room conditions: Temperature of 20°C (68°F) and atmospheric pressure 101.325 kPa (1 atm)

[^3]: [Speed of sound wiki](https://en.wikipedia.org/wiki/Speed_of_sound)

[^4]: [Universal Gas Constant values](https://www.engineeringtoolbox.com/individual-universal-gas-constant-d_588.html#:~:text=379-,The%20Universal%20Gas%20Constant,-%2D%20Ru)