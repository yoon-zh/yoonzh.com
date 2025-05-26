---
layout: post
title: test
card_title: "testmotors"
math: true
circuit: true
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

## Ideal Transformers

Turns ratio:

$$
a = \frac{N_p}{N_s} = \frac{v_p (t)}{v_s (t)}
$$

Where $$N_p,\ N_s$$ are the turns in the wires, and $$v_p (t),\ v_s (t)$$ the voltages.

For the current:

$$
N_p i_p (t) = N_s i_s (t)
$$

$$
\frac{i_p (t)}{i_s (t)} = \frac{1}{a}
$$

In phasor notation,

$$
\frac{V_P}{V_S} = \frac{1}{a}
$$

$$
\frac{I_P}{I_S} = \frac{1}{a}
$$

The input voltage and current has the same phase angle as the output.

> Real Power:
>
> $$P_{in} = V_P I_P cos {\theta}_P$$
>
> Where $${\theta}_P$$ is the angle between $$V_P$$ and $$I_P$$.
>
> Similarly for output power,
>
> $$P_{out} = V_S I_S cos {\theta}_S$$

> For an ideal transformer, all the following apply:
>
> $${\theta}_P = {\theta}_S = \theta$$
>
> $$PF_{in} = PF_{out}$$
>
> $$P_{in} = P_{out}$$
>
> $$Q_{in} = V_P I_P sin \theta = V_S I_S sin \theta = Q_{out}$$
>
> $$S_{in} = V_P I_P = V_S I_S = S_{out}$$

A transformer's voltage and current can change the apparent impedance:

$$
Z_L = \frac{V_S}{I_S} 
$$

$$
Z'_L = \frac{V_P}{I_P} = a^2 Z_L = \left(\frac{N_P}{N_S}\right)^2 Z_L
$$

## Real Transformers

Excitation current: total no-load current in the core.

$$
i_{ex} = i_m + i_{h+e}
$$

Where

- $$i_M$$ is the magnetization current required to produce flux in the transformer core
- $$i_{h+e}$$ is the core-loss current lost to hysteresis and eddy current

$$i_{ex}$$ should be much smaller than full-load current in a good transformer.

$$
\mathcal{F}_{net} = N_P i_P - N_S i_S = \phi\ \Re
$$

For a real transformer to be modelled as an ideal, the core must have no hysteresis or eddy currents, as well as zero leakage flux and zero resistance in transformer windings.

Equivalent circuit considering:
- Copper losses $$I^2 R$$
- Eddy current losses
- Hysteresis losses
- Leakage flux $${\phi}_{LP},\ {\phi}_{LS}$$, producing leakage inductance

Leakage inductance:

$$
L_P = N^2_P \mathcal{P}
$$

$$
L_N = N^2_N \mathcal{P}
$$

Where $$\mathcal{P}$$ is the permeance of flux path (air).

{% include circuit.html id="real-transformer" from_data=true %}

- $$R_P$$ resistance of primary winding
- $$X_P$$ reactance due to primary leakage inductance
- $$R_S$$ resistance of secondary winding
- $$X_S$$ reactance due to secondary leakage inductance
- Excitation branch:
  - $$R_C$$ hysteresis and core losses
  - $$X_M$$ magnetization current

Model for primary voltage:

{% include circuit.html id="transformer-first-v" from_data=true %}

$$I_{out} = \frac{I_s}{a}$$

Model for secondary voltage:

{% include circuit.html id="transformer-second-v" from_data=true %}

Efficiency

$$
\eta = \frac{P_{out}}{P_{in}} \times 100\%
$$

At a given load,

$$
\eta = \frac{V_S I_S cos \theta}{P_{Cu} + P_{core} + V_S I_S cos \theta} \times 100\%
$$

***

## draft

## Excitation branch

In real transformers, the excitation branch accounts for core losses and magnetizing current. It consists of a core loss resistance $$R_C$$ (modeling hysteresis and eddy current losses) and a magnetizing reactance $$X_M$$ (modeling the magnetization current):

$$
I_P = I_C + I_M
$$

Where:
- $$I_C = \frac{V_P}{R_C}$$ (in-phase with voltage)
- $$I_M = \frac{V_P}{X_M}$$ (lags voltage by 90°)

## Resistances and leakage reactances

Practical transformers have:
- Winding resistances $$R_P,\ R_S$$ (copper losses)
- Leakage reactances $$X_P,\ X_S$$ (due to imperfect flux linkage)

These are modeled as series elements with the ideal transformer:

$$
Z_P = R_P + jX_P \quad \text{(Primary side)}
$$

$$
Z_S = R_S + jX_S \quad \text{(Secondary side)}
$$

## High-voltage side, low-voltage side

- High-voltage (HV) side: Has more turns ($$N_P > N_S$$), operates at higher voltage and lower current
- Low-voltage (LV) side: Has fewer turns ($$N_S < N_P$$), operates at lower voltage and higher current

The turns ratio determines voltage transformation:

$$
a = \frac{N_{HV}}{N_{LV}} = \frac{V_{HV}}{V_{LV}}
$$

## Terminal Voltage

The actual output voltage under load differs from the ideal voltage due to voltage drops:

$$
V_{terminal} = V_S - I_S(R_S + jX_S)
$$

## High-side current

The primary current has two components:
1. Load current reflected from secondary: $$I'_S = \frac{I_S}{a}$$
2. Excitation current: $$I_{EX} = I_C + I_M$$

$$
I_P = I'_S + I_{EX}
$$

## Low-side real power

Real power delivered to load:

$$
P_{out} = V_S I_S \cos \theta_S
$$

## Low-side reactive power

Reactive power delivered to load:

$$
Q_{out} = V_S I_S \sin \theta_S
$$

## Power factor lagging/leading

- Lagging PF: Inductive load (current lags voltage)
- Leading PF: Capacitive load (current leads voltage)

Power factor angle $$\theta$$ relates voltage and current:

$$
\theta = \angle V_S - \angle I_S
$$

## Equivalent T circuit

The complete transformer model combines series impedances and shunt excitation branch:

$$
\begin{array}{ccc}
 & R_P + jX_P & \\
V_P & \longrightarrow & \text{Ideal Transformer} (a:1) \\
 & \downarrow R_C \parallel jX_M & \\
\end{array}
$$

## Input voltage

The required primary voltage to maintain secondary terminal voltage:

$$
V_P = aV_S + I_P(R_P + jX_P)
$$

## Copper loss

Power loss in windings:

$$
P_{cu} = I_P^2 R_P + I_S^2 R_S = I_P^2 R_P + \left(\frac{I_P}{a}\right)^2 R_S
$$

## Core loss

Power loss in magnetic core:

$$
P_{core} = \frac{V_P^2}{R_C}
$$

## Efficiency

Ratio of output power to input power:

$$
\eta = \frac{P_{out}}{P_{in}} \times 100\% = \frac{P_{out}}{P_{out} + P_{cu} + P_{core}} \times 100\%
$$

## Cantilever equivalent circuit

Approximate model with excitation branch moved to primary side:

$$
\begin{array}{ccc}
R_P + jX_P & \longrightarrow & \text{Ideal Transformer} (a:1) \\
 & \downarrow R_C \parallel jX_M & \\
\end{array}
$$

## Example: 30 kVA 60 Hz 2100 V:420 V Transformer

Given:
- 30 kVA, 60 Hz, 2100 V:420 V
- $$R_P = 1.5 \Omega$$, $$X_P = 2.0 \Omega$$ (HV side)
- $$R_S = 0.06 \Omega$$, $$X_S = 0.08 \Omega$$ (LV side)

Calculations:
1. Turns ratio:
$$
a = \frac{2100}{420} = 5
$$

2. Impedance referral:

- LV-side impedances referred to HV side:

$$
R'_S = a^2 R_S = 25 \times 0.06 = 1.5 \Omega
$$

$$
X'_S = a^2 X_S = 25 \times 0.08 = 2.0 \Omega
$$

Load Calculation:
For 420 V terminal voltage at 0.8 PF lagging:

1. Low-side current:

$$
I_S = \frac{30,000}{420} = 71.43 \text{A}
$$

2. High-side current:

$$
I_P = \frac{I_S}{a} = \frac{71.43}{5} = 14.29 \text{A}
$$

3. Low-side powers:

- Real power:

$$
P = 420 \times 71.43 \times 0.8 = 24,000 \text{W}
$$

- Reactive power:

$$
Q = 420 \times 71.43 \times \sqrt{1-0.8^2} = 18,000 \text{VAR}
$$


Excitation branch

Turns ratio

Resistances and leakage reactances

High-voltage side, low-voltage side

Terminal Voltage

High-side current

Low-side real power

Low-side reactive power

Power factor lagging/leading

Equivalent T circuit

Input voltage

Copper loss

Core loss

Efficiency

Cantilever equivalent circuit

Output power

30 kVA 60 Hz 2100 V: 420 V

Given resistances and leakage reactances of a distribution transformer, calculate
- the turns ratio
- resistances and leakage reactances of the high-voltage side and low-voltage side

Given power delivered to a load on the low-voltage side with some terminal voltage, and some power factor, calculate
- high-side current
- low-side power (reactive and real)

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

