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

***

# Type 2: Properties

Given:
- Object in a liquid
- Specific gravity of both $$SG_1,\ SG_2$$

Find:
- Fraction of body above liquid surface

## Solution


***

# Type 3: Submerged Bodies


***

# Type 4: Manometers

Given:
- Liquid in tanks/tubes at different heights
- Dimensions

Find:
- Pressure difference

## Solution

***

# Type 5: Streamlines

Given:
- 2D Velocity field

Find:
- Streamline equation

***

# Type 6: Bernoulli

Given:
- Dimensions of pipe

 
Find: 
1. Water flow rate
2. Pressures
3. Change of height in Pitot tubes

***

# Type 7: Water Jet Force

Given 2 of the 3: 
- Water jet dimensions
- Velocity
- Flow rate

Find:
1. The non-given
2. Force exerted on the plate

## Solution

***

# Type 8: Vorticity

Given:
- Velocity field

Find:
- Is the flow rotational?
- Angular deformation

## Solution

***

# Type 9: Stream Equation

Given:
- 2D steady inviscid flow
- One velocity component

Find:
- The missing component

## Solution

***

# Type 10: Continuity Equation

Given:
- Velocity
- Mass flow

Find:
- Thrust from engine

## Solution

***

# Type 11: Navier-Stokes

Given:
- Velocity field
- Flow conditions

Find:
- Simplified Navier-Stokes equation

## Solution

***

# Type 12: Dimensional Analysis

Given:
- Some variables
- Description of physical behavior

Find:
- Equation to connect variables

## Solution

***

# Type 13: Drag/Lift

Given:
- Quantities to calculate drag or lift

Find:
- Drag/lift force

## Solution

$$
F_D = \frac{1}{2} C_D \rho A v^2
$$

***

List
01. TYPE:01 VISCOSITY Given velocity distribution in pipe, find shear stress
02. TYPE:02 PROPERTIES Given an object in a liquid where both have different SGs, what portion of the solid is outside
03. TYPE:05 STREAMLINES Given velocity field, find streamline equation, plot streamlines in range !IMPORTANT
04. TYPE:06 BERNOULLI Given flow on pipe of changing diameter, find gauge pressures (incl. centerline slope) !IMPORTANT
05. TYPE:07 DYNAMICS Given flow from hose, find force exerted on object !IMPORTANT
06. TYPE:08 DIFFERENTIAL Given velocity field, find if the flow is rotational
07. TYPE:11 NAVIER-STOKES Given velocity field and conditions, find simplified Navier-Stokes equation
08. TYPE:12 DIMENSIONAL ANALYSIS Given description of behavior, find equation to connect variables
09. TYPE:13 DRAG-LIFT Given values for force, find drag force
10. TYPE:01 SIMILAR:01 VISCOSITY Given viscosity, find numerical value of stress !IMPORTANT
11. TYPE:03 STATICS - BUOYUANCY Given two objects with different weight, find water displaced
12. TYPE:04 STATICS Given water in manometer style, find pressures
13. TYPE:10 SIMILAR:5 Given velocity and mass flow in a system, find force (thrust force on engine)
14. TYPE:09 DIFFERENTIAL Given 2D steady inviscid flow and one velocity component, find missing component
15. TYPE:03 SIMILAR:11 STATICS-BUOYANCY Given ice cube on water, find height change