---
layout: post
title: test
card_title: "testmotors"
math: true
url: /posts/motors/test
tech_stack: [Motors]
---

date: 2025-04-24

# Magnetic Circuits

## Parameter Definitions

| Parameter     | Meaning | SI Unit |
|---------------|-------------|-------------|
| $$\Phi$$      | Total magnetic flux                             | Weber $$\text{Wb}$$                     |
| $$B$$         | Flux density (flux per unit area)               | Tesla $$\text{T} = \text{Wb/m}^2$$      |
| $$H$$         | Magnetizing intensity (magnetic field strength) | Ampere per meter $$\text{A/m}$$         |
| $$I$$         | Current in the coil                             | Ampere $$\text{A}$$                     |
| $$\Re$$       | Reluctance (opposition to magnetic flux)        | Ampere-turns per Weber $$\text{At/Wb}$$ |
| $$N$$         | Number of turns in the coil                     | Dimensionless                           |
| $$l$$         | Length of the magnetic path                     | Meters $$\text{m}$$                     |
| $$A$$         | Cross-sectional area perpendicular to flux      | Square meters $$\text{m}^2$$            |
| $$\mu_0$$     | Permeability of free space                      | Henries per meter $$\text{H/m}$$        |
| $$\mu$$       | Permeability of the material ($$ \mu = B/H $$)  | Henries per meter $$\text{H/m}$$        |
| $$\mathcal{F}$$ | Magnetomotive force (MMF)                     | Ampere-turns $$\text{At}$$              |


### Given Parameters

Dimensions: Length $$l$$, cross-sectional area $$A = \text{width} \times \text{depth}$$

Number of turns $$N$$

Magnetization curve: $$B\ \text{vs.}\ H$$ for the material.

### To Obtain

1. Total flux $$\Phi$$
2. Flux density $$B$$
3. Magnetizing intensity $$H$$
4. Current $$I$$
5. Reluctance $$\Re$$

### Corner cases:

- Possible air gap
- Fringing (assume increase in effective air-gap area)

## Solution

### 1. Magnetic Path Geometry

- Calculate the mean path length $$l$$ of the region
- Compute the cross-sectional area $$A$$:

$$
A = \text{width} \times \text{depth}
$$


### 2. Relate Flux Density $$B$$ and Flux $$\Phi$$


For the specific region, flux density is

$$
B = \frac{\Phi}{A}
$$

If $$\Phi$$ is unknown, proceed to Step 3 to find $$B$$ indirectly.

### 3. Magnetizing Intensity $$H$$

Use the magnetization curve $$B\ \text{ vs. }\ H$$ to determine $$H$$ for the calculated $$B$$.

For air gaps, use

$$
H = \frac{B}{\mu_0} \quad \text{where } \mu_0 = 4\pi \times 10^{-7} \, \text{H/m}
$$

### 4. MMF Drop for the Region

The magnetomotive force (MMF) drop across the region is

$$
\mathcal{F} = H \times l
$$

### 5. Total MMF and Current $$I$$

For the entire circuit, total MMF is:

$$
\mathcal{F}_{\text{total}} = N \times I
$$

If the region is part of a series circuit, sum MMF drops across all regions:

$$
N \times I = \sum (H_k \times l_k)
$$

Solve for current:

$$
I = \frac{\sum (H_k \times l_k)}{N}
$$

### 6. Reluctance $$\Re$$

Reluctance of the region is

$$
\Re = \frac{\mathcal{F}}{\Phi} = \frac{H \times l}{\Phi}
$$

If the material is linear (constant permeability $$ \mu $$):

$$
\Re = \frac{l}{\mu \times A} \quad \text{where } \mu = \frac{B}{H}
$$

### 7. Nonlinear Materials

If the $$B\ \text{-}\ H$$ curve is nonlinear and $$\Phi$$ is unknown:

1. Assume a trial value for $$\Phi$$
2. Compute $$B = \Phi / A$$ for all regions
3. Use the $$B\ \text{-}\ H$$ curve to find $$H$$ for magnetic regions
4. Calculate total MMF $$\mathcal{F}_{\text{total}} = \sum (H_k \times l_k)$$
5. Compare with $$N \times I$$, adjust $$\Phi$$ and repeat until convergence

***

## Key Equations Summary

| Quantity     | Equation |
|--------------|----------|
| Flux density | $$ B = \frac{\Phi}{A} $$ |
| MMF drop     | $$ \mathcal{F} = H \times l $$ |
| Total MMF    | $$ N \times I = \sum (H_k \times l_k) $$ |
| Reluctance   | $$ \Re = \frac{H\ l}{\Phi}, \quad \Re = \frac{l}{\mu A} $$ |

*Check RP1 P8
*Topic2_P1 P14
*^ P21
*^ P24
*^ P27
*^ P29
*^ P39
*^ P43
*^ P51
*Topic2_P2 P18
*^ P28


# DC Machine

*Check 

> (!important)

*Topic2_P3 P7
*^ P14

# Transformers

*Check RP2 P3
*Topic3_P1 P11
*^ P17
*^ P30 (!important)
*^ P45

# Induction Motors

*Check RP2 P44
*Topic 5_P1 P41
*Topic 5_P2 P3
*^ P24
*^ P39

Core losses:
- Hysteresis loss
- Eddy current loss

# Bonus

## DC Motor Types

*Check RP2 P19
*Topic 4 P3

### Brushed

### Brushless

Explain:
- Brushed vs BLDC



## Stepper Motor

*Check Topic 4 P55

Explain:

### Step Angle

### Steps Per Revolution


## PWM

Given a DC supply $$U_s$$, connect a switch in series to its load (for example, a DC motor), then turn the switch on/off repeatedly. This "chops" the DC voltage.

Define the duty cycle $$\alpha$$, where the average voltage is defined as

$$
U_{av} = \frac{t_1}{t_1 + t_2} U_s = \alpha U_s
$$

Where

$$
\alpha = \frac{t_1}{T}
$$

*Check RP2 P27
*Topic 4 P42

[4]

## Single-Phase Circuit

Given in phasor notation:
- Voltage
- Impedances

Obtain:
- Current
- Power Factor
- Power (Real, Reactive, Apparent)

*Check RP1 P27
*Topic3_P1 P7

## BLDC Control

Explain:
- Phase
- Pull-in torque
- Pull-out torque

***

Given:
- BLDC control circuit diagram

Fill:
- Stage table

*Check RP2 P31

(if extra time, include relays T3P2)

[4] Understanding Motor Controls, Stephen L. Herman, Delmar Cengage Learning

