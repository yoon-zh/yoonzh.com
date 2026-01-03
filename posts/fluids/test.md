---
layout: hidden
title: fluidstt
card_title: "fluids test"
math: true
url: /posts/fluids/test
excerpt: "test"
date: 2026-01-02
tech_stack: [Fluids]
---

# Type 1: Viscosity

Given:
- Velocity distribution $$u(y)$$
- Viscosity $$\mu$$

Find:
- Shear stress $$\tau$$

## Solution

From [properties](properties.html#:~:text=Viscosity):

$$\tau = \mu \frac{du}{dy}$$

## Examples

Answers [below](#answers)

### Ex 1

Given:
- Velocity field $$u(y) = (5y - 0.2y^2)$$ mm/s
- Viscosity $$\mu = 0.482$$ Pa*s
- Fluid is between ground and plate, where velocity next to plate is max velocity

Find:
- Shear stress on plate and fixed surface

### Ex 2

Given:
- Velocity field $$u(r) = v_0 (1 - \frac{r^2}{R^2})$$
- Pipe of radius R

Find:
- Shear stress

### Ex 3

Given:
- Distance between top and bottom plate 0.2 m
- Viscosity $$\mu = 0.3$$ Pa*s
- Velocity distribution $$u(y) = 0.8(1 - 100y^2)$$, where $$y$$ is distance from centerline

Find:
- Shear stress on top and bottom plates

***

# Type 2: Properties

Given:
- Object in a liquid
- One of the following:
    - Specific gravity of both $$SG_1,\ SG_2$$
    - Density of both
    - Force of both

Find:
- Fraction of body above liquid surface

## Solution

This is a simple force balance problem:

$$F_{\text{solid}} = F_{\text{sub}}$$

Where $$F_{\text{solid}}$$ is the weight of the solid, and $$F_{\text{sub}}$$ is the buoyant force exerted by the displaced water (submerged volume of solid). Then we rewrite it according to what we are given:

$$\rho_{\text{solid}} V_{\text{solid}} g = \rho_{\text{liquid}} V_{\text{sub}} g$$

$$SG_{\text{solid}} V_{\text{solid}} g = SG_{\text{liquid}} V_{\text{sub}} g$$

In general cases, the acceleration is gravity, so it can be simplified. Usually, this kind of problem wants you to write the ratio of volumes:

$$\frac{V_{\text{sub}}}{V_{\text{solid}}} = \frac{\rho_{\text{solid}}}{\rho_{\text{liquid}}}$$

$$\frac{V_{\text{sub}}}{V_{\text{solid}}} = \frac{SG_{\text{solid}}}{SG_{\text{liquid}}}$$

This is the volume fraction of the submerged solid (under liquid surface). If asked for the portion of solid ABOVE liquid surface:

> $$\frac{V_{\text{above}}}{V_{\text{solid}}} = 1 - \frac{V_{\text{sub}}}{V_{\text{solid}}} $$
>
> $$\frac{V_{\text{above}}}{V_{\text{solid}}} = 1 - \frac{SG_{\text{solid}}}{SG_{\text{liquid}}}$$

## Examples

Answers [below](#answers)

### Ex 1

Given:
- Ice cube with $$l =25 mm$$
- Density $$\rho_{\text{ice}} = 920$$ kg/m^3
- Cup of water with diameter $$d = 50 mm$$, height $$h = 100 mm$$

Find:
1. New height of water after placing the ice in the cup
2. New height of water when the ice melts

### Ex 2

Given:
- Ice with $$SG_{\text{ice}} = 0.95$$
- Ocean water $$SG_{\text{ocean}} = 1.25$$

Find:
- Fraction of ice above ocean

### Ex 3

Given:
- Fully submerged sphere of diameter $$d = 0.6$$ m and density $$\rho_{\text{ball}} = 48$$ kg/m^3
- Distance from liquid surface to top of sphere $$h = 1 m$$
- Cable connecting the bottom of sphere to bottom of water tank of length $$c = 0.5 m$$

Find:
1. Tension in cable
2. Change in tension after change in cable length

### Ex 4

Given:
- Weight of two objects $$W_1,\ W_2$$
- Both are floating on water

Find:
- Fraction of volume displaced by the heavier vs lighter object

***

# Type 3: Manometers

Given:
- Liquid in tanks/tubes at different heights
- Dimensions

Find:
- Pressure difference

## Solution

***

# Type 4: Streamlines

Given:
- 2D Velocity field

Find:
- Streamline equation

***

# Type 5: Bernoulli

Given:
- Dimensions of pipe

 
Find: 
1. Water flow rate
2. Pressures
3. Change of height in Pitot tubes

***

# Type 6: Water Jet Force

Given 2 of the 3: 
- Water jet dimensions
- Velocity
- Flow rate

Find:
1. The non-given
2. Force exerted on the plate

## Solution

***

# Type 7: Vorticity

Given:
- Velocity field

Find:
- Is the flow rotational?
- Angular deformation

## Solution

***

# Type 8: Stream Equation

Given:
- 2D steady inviscid flow
- One velocity component

Find:
- The missing component

## Solution

***

# Type 9: Continuity Equation

Given:
- Velocity
- Mass flow

Find:
- Thrust from engine

## Solution

***

# Type 10: Navier-Stokes

Given:
- Velocity field
- Flow conditions

Find:
- Simplified Navier-Stokes equation

## Solution

***

# Type 11: Dimensional Analysis

Given:
- Some variables
- Description of physical behavior

Find:
- Equation to connect variables

## Solution

***

# Type 12: Drag/Lift

Given:
- Quantities to calculate drag or lift

Find:
- Drag/lift force

## Solution

$$
F_D = \frac{1}{2} C_D \rho A v^2
$$

***

# Answers

## Type 1

### Ex 1

Given:
- Velocity field $$u(y) = (5y - 0.2y^2)$$ mm/s
- Viscosity $$\mu = 0.482$$ Pa*s
- Fluid is between ground and plate, where velocity next to plate is max velocity

Find:
- Shear stress on plate and fixed surface

### Ex 2

Given:
- Velocity field $$u(r) = v_0 (1 - \frac{r^2}{R^2})$$
- Pipe of radius R

Find:
- Shear stress

### Ex 3

Given:
- Distance between top and bottom plate 0.2 m
- Viscosity $$\mu = 0.3$$ Pa*s
- Velocity distribution $$u(y) = 0.8(1 - 100y^2)$$, where $$y$$ is distance from centerline

Find:
- Shear stress on top and bottom plates

## Type 2

### Ex 1

Given:
- Ice cube with $$l = 25 mm$$
- Density $$\rho_{\text{ice}} = 920$$ kg/m^3
- Cup of water with diameter $$d = 50 mm$$, height $$h = 100 mm$$

Find:
1. New height of water after placing the ice in the cup
2. New height of water when the ice melts

> Solution:
>
> The ice displaces some volume of water, although the volume of water remains the same. This causes the water level to go up, increasing the height.
>
> 1\. Calculate the volume displaced (submerged volume of ice)
>
> $$F_{\text{ice}} = F_B$$
>
> $$\rho_{\text{ice}} V_T g = \rho_{\text{water}} V_{\text{sub}} g$$
>
> $$V_{\text{sub}} = \frac{\rho_{\text{ice}}}{\rho_{\text{water}}} V_T$$
>
> 2\. Calculate the total volume of ice $$V_T$$
>
> $$V_T = l^3 = 1.56 \cdot 10^{-5} \ m^3$$
>
> $$V_{\text{sub}} = 1.44 \cdot 10^{-5} \ m^3$$
>
> 3\. Find new height: The volume with the new height is the sum of the volume of submerged ice and water.
>
> $$\frac{\pi}{4} d^2 h_N = V_{\text{water}} + V_{\text{sub}}$$
>
> $$h_N = h + \frac{V_{\text{sub}}}{\frac{\pi}{4} d^2} = 0.107 \ m$$
>
> ***
>
> For part 2, we know the mass of ice is the same whether it is frozen or melted:
>
> $$V_{\text{melt}} = \frac{m_{\text{ice}}}{\rho_{\text{water}}}$$
>
> We can rewrite the first equation of volume displaced where $$\rho_{\text{ice}} V_T = m_{\text{ice}}$$:
>
> $$m_{\text{ice}} = \rho_{\text{water}} V_{\text{sub}}$$
>
> $$V_{\text{sub}} = \frac{m_{\text{ice}}}{\rho_{\text{water}}}$$
>
> We can see that $$V_{\text{melt}} = V_{\text{sub}}$$, for which the height remains the same (0.107 m). This applies ONLY IF the water of the ice has the same density as the water in the cup when isothermal.

### Ex 2

Given:
- Ice with $$SG_{\text{ice}} = 0.95$$
- Ocean water $$SG_{\text{ocean}} = 1.25$$

Find:
- Fraction of ice above ocean

> Solution:
>
> $$SG_{\text{ice}} V_{\text{ice}} = SG_{\text{ocean}} V_{\text{sub}}$$
>
> $$\frac{V_{\text{sub}}}{V_{\text{ice}}} = \frac{SG_{\text{ice}}}{SG_{\text{ocean}}}$$
>
> $$\frac{V_{\text{above}}}{V_{\text{ice}}} = 1 - \frac{SG_{\text{ice}}}{SG_{\text{ocean}}}$$
>
> $$\frac{V_{\text{above}}}{V_{\text{ice}}} = 1 - \frac{0.95}{1.25} = 0.24$$

### Ex 3

Given:
- Fully submerged sphere of diameter $$d = 0.6$$ m and density $$\rho_{ball} = 48$$ kg/m^3
- Distance from liquid surface to top of sphere $$h = 0.9 m$$
- Cable connecting the bottom of sphere to bottom of water tank

Find:
1. Tension in cable
2. Change in tension after change in cable length

> Solution:
>
> Draw a free body diagram to see which forces act on which direction. Then balance them out:
>
> $$T = F_B - W_{\text{ball}}$$
>
> $$T = \rho_{\text{water}} V_{\text{sub}} g - \rho_{\text{ball}} V_{\text{ball}} g $$
>
> Since the ball is fully submerged, $$V_{\text{sub}} = V_{\text{ball}}$$:
>
> $$T = V_{\text{ball}} \ g (\rho_{\text{water}}  - \rho_{\text{ball}})$$
>
> Remember the volume of a sphere (do NOT confuse radius with diameter!):
>
> $$V_{\text{ball}} = \frac{4}{3} \pi r^3 = 0.113 \ m^3$$
>
> $$T = 1055.32 \ N$$
>
> Regarding the cable length, notice the buoyant force does not consider depth of the object or length of cord. Rather, we only care about how much of the object is submerged. Therefore, the tension is the same regardless of the length of the cable (as long as the ball is fully submerged).
>
> The case where it may change is if the water tank is really deep, so that density changes with height.

### Ex 4

Given:
- Weight of two objects $$W_1,\ W_2$$
- Both are floating on water

Find:
- Additional volume displaced by heavier object vs lighter object

> Solution:
>
> $$W_1 = \rho_{\text{water}} V_{\text{sub 1}} g,\quad V_{\text{sub 1}} = \frac{W_1}{\rho_{\text{water}} g}$$
>
> $$W_2 = \rho_{\text{water}} V_{\text{sub 2}} g, \quad V_{\text{sub 2}} = \frac{W_2}{\rho_{\text{water}} g}$$
>
> $$\Delta V = V_{\text{sub 1}} - V_{\text{sub 2}} =  \frac{W_1 - W_2}{\rho_{\text{water}} g}$$
>
> You may dismiss the sign (+, -) in the result.



***

List
01. TYPE:01 VISCOSITY Given velocity distribution in pipe, find shear stress
02. TYPE:02 PROPERTIES Given an object in a liquid where both have different SGs, what portion of the solid is outside
03. TYPE:04 STREAMLINES Given velocity field, find streamline equation, plot streamlines in range !IMPORTANT
04. TYPE:05 BERNOULLI Given flow on pipe of changing diameter, find gauge pressures (incl. centerline slope) !IMPORTANT
05. TYPE:06 DYNAMICS Given flow from hose, find force exerted on object !IMPORTANT
06. TYPE:07 DIFFERENTIAL Given velocity field, find if the flow is rotational
07. TYPE:10 NAVIER-STOKES Given velocity field and conditions, find simplified Navier-Stokes equation
08. TYPE:11 DIMENSIONAL ANALYSIS Given description of behavior, find equation to connect variables
09. TYPE:12 DRAG-LIFT Given values for force, find drag force
10. TYPE:01 SIMILAR:01 VISCOSITY Given viscosity, find numerical value of stress !IMPORTANT
11. TYPE:02 STATICS - BUOYUANCY Given two objects with different weight, find water displaced
12. TYPE:03 STATICS Given water in manometer style, find pressures
13. TYPE:09 SIMILAR:5 Given velocity and mass flow in a system, find force (thrust force on engine)
14. TYPE:08 DIFFERENTIAL Given 2D steady inviscid flow and one velocity component, find missing component
15. TYPE:02 SIMILAR:11 STATICS-BUOYANCY Given ice cube on water, find height change