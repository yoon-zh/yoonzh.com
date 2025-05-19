---
layout: hidden
title: magnets
card_title: "Motors 101: Magnets"
math: true
url: /posts/motors/magnets
date: 2025-04-16
---

***

# Maxwell's Equations

*Adapted from [^2],[^3]*

Let $$\vec{E}$$ be an electric field, $$\vec{B}$$ a magnetic field.

Gauss for electricity

$$
div\ \vec{E}
= \oint \vec{E} \cdot d\vec{A}
= \frac{\rho}{\varepsilon_o}
$$

Where $$\rho$$ is electric charge density, $$\varepsilon_o$$ vacuum permittivity.

***

Faraday

$$
curl\ \vec{E} 
= \oint \vec{E} \cdot d\vec{s}
= -\frac{\partial{\vec{B}}}{\partial t}
$$

***

Gauss for magnetism

$$
div\ \vec{B} 
= \oint \vec{B} \cdot d\vec{A}
= 0
$$

***

Ampère-Maxwell

$$
curl\ \vec{B}
= \oint \vec{B} \cdot d\vec{s}
= \mu_o \vec{J} + \mu_o \varepsilon_o \frac{\partial{\vec{E}}}{\partial t}
$$

Where $$\mu_o$$ is vacuum permeability, $$\vec{J}$$ electric charge density

- $$\mu_o = 4\pi \times 10^{-7}$$ H/m
- $$\varepsilon_o = 8.85 \times 10^{-12}$$ F/m
- $$\vec{J}$$ ?

***


## Equations

*Adapted from [^1],[^4]*


## Lenz Law - Eddy Currents

Assume there is a conducting material in shape of a closed circuit. 

## Credits

[^1]: Chapman, S. (2012). _Electric Machinery Fundamentals._ McGraw Hill: 5th Ed.

[^2]: Umans, S. (2014). _Electric Machinery._ McGraw Hill: 7th Ed.

[^3]: Walker, J. et. al, (2014). _Fundamentals of Physics._ Wiley: 10th Ed.

[^4]: Bu, Q. (2025). _Introduction to Mechatronics_ (Lecture Notes).
