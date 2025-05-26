---
layout: post
title: transformers
card_title: "Transformers"
math: true
circuit: true
url: /posts/motors/transformers
tech_stack: [Motors]
---

date: 2025-04-26

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

## Problem Type I

Given Data:
- Transformer Ratings: $$S_{S, rated}$$ (apparent power), $$V_{in, rated}/V_{out, rated}$$ (input/output voltages)
- Open-Circuit Test (HV side) $$V_{oc},\ I_{oc},\ P_{oc}$$
- Short-Circuit Test (HV side) $$V_{sc},\ I_{sc},\ P_{sc}$$
- Core loss $$P_{core}$$
- Power factor $$PF$$

Find:
- Equivalent circuit referred to high-voltage
- Equivalent circuit referred to low-voltage
- Efficiency

### 1. Turns Ratio

Given $$V_{in},\ V_{out}$$,

$$
a = \frac{N_p}{N_s} = \frac{V_{in}}{V_{out}}
$$

Where $$a$$ is the turns ratio.

### 2. Open-Circuit Test (Excitation Branch)

The excitation/shunt branch represents core losses $$R_c$$ and magnetizing reactance $$X_m$$.

1\. Phase angle

$$
{\theta}_{oc} = \arccos \frac{P_{oc}}{V_{oc} I_{oc}}
$$

2\. All of the current flows through the excitation branch. Consider its impedance:

$$
\frac{1}{R_{CL}} -j \frac{1}{X_{ML}} = \frac{I_{oc}}{V_{oc}} \angle{ -{\theta}_{oc} }
$$

$$
R_{CL} = \frac{V_{oc}}{I_{oc}} cos{\theta}_{oc},\quad X_{ML} = \frac{V_{oc}}{I_{oc}} sin{\theta}_{oc}
$$

Note: $$R_{CL},\ X_{ML}$$ are the impedances referred to the low-voltage side. Therefore:

$$
R_C = a^2 R_{CL},\quad X_M = a^2 X_{ML}
$$

### 3. Short-Circuit Test (Series Branch)

The series branch represents winding resistance $$R_{eq}$$ and leakage reactance $$X_{eq}$$.

1\. Phase angle

$$
{\theta}_{sc} = \arccos \frac{P_{sc}}{V_{sc} I_{sc}}
$$

2\. Consider the equivalent series impedance:

$$
Z_{eq} = \frac{V_{sc}}{I_{sc}} \angle{ {\theta}_{sc} }
$$

$$
R_{eqH} = \frac{V_{sc}}{I_{sc}} cos{\theta}_{sc},\quad X_{eqH} = \frac{V_{sc}}{I_{sc}} sin{\theta}_{sc}
$$

Note: $$R_{eqH},\ X_{eqH}$$ are the impedances referred to the high-voltage side. Therefore:

$$
R_{eq} = \frac{R_{eqH}}{a^2},\quad X_{eq} = \frac{X_{eqH}}{a^2}
$$

### 4. Equivalent Circuit for High-Voltage

Include:
- $$V_P$$,
- $$I_P$$,
- $$R_C$$,
- $$X_M$$,
- $$R_{eqH}$$,
- $$X_{eqH}$$,
- $$a\ V_S$$,
- $$\frac{I_S}{a}$$.

{% include circuit.html id="transformer-high-v" from_data=true %}

### 5. Equivalent Circuit for Low-Voltage

Include:
- $$\frac{V_P}{a}$$,
- $$a\ I_P$$,
- $$R_{CL}$$,
- $$X_{ML}$$,
- $$R_{eq}$$,
- $$X_{eq}$$,
- $$V_S$$,
- $$I_S$$.

{% include circuit.html id="transformer-low-v" from_data=true %}

### 6. Efficiency

$$
\eta = \frac{P_{out}}{P_{out} + P_{core} + P_{cu}} \times 100\%
$$

$$P_{core}$$ and $$S_{S, rated}$$ are given. We need to find $$P_{out},\ P_{cu}$$. For this, we have the voltage at the low-voltage side $$V_{out, rated}$$. Since $$S=VI$$, we need the current $$I_{out, rated}$$:

$$
I_{out, rated} = \frac{S_{S, rated}}{V_{out, rated}} \angle{\theta}
$$

Given $$PF$$, the phase angle $$\theta = \arccos PF$$. If lagging, the angle in the current is negative.

The output power is

$$
P_{out} = V_s I_s cos \theta = V_{out, rated} I_{out, rated} cos \theta
$$

$$P_{cu}$$ can be obtained as the power in $$R_{eq}$$ that models the copper losses:

$$
P_{cu} = (I_{out, rated})^2 R_{eq}
$$

Replace $$P_{out},\ P_{cu},\ P_{core}$$ in the efficiency equation and it's done.

***

## Problem Type II

Given Data:
- Transformer Ratings: $$S_{S, rated}$$ (apparent power), $$V_{p, rated}/V_{s, rated}$$ (input/output voltages)
- Resistances and leakage reactances $$R_1,\ X_{l1},\ R_2,\ X_{l2}$$
- Power factor $$PF$$
- Impedance of excitation branch $$Z = \infty$$ (open circuit)
- Power delivery $$S$$ to a load on low-voltage side
- Terminal voltage $$V_{load}$$

Find:
- Turns ratio of transformer
- Resistances and leakage reactances referred to high and low voltage sides
- Equivalent circuit referred to high-voltage and low-voltage
- High-voltage current $$I_p$$
- Low-voltage real power $$P_s$$
- Low-voltage reactive power $$Q_s$$

### 1. Turns ratio

Given $$V_p,\ V_s$$,

$$
a = \frac{N_p}{N_s} = \frac{V_{in}}{V_{out}}
$$

Where $$a$$ is the turns ratio.

### 2. High-voltage impedances

Leave $$R_1,\ X_{l1}$$ intact. For the right side,

$$
R_{2H} = a^2 R_2,\quad X_{l2H} = a^2 X_{l2}
$$

$$
V_{sH} = aV_s,\quad  I_{sH} = \frac{I_s}{a}
$$

### 3. Low-voltage impedances

Leave $$R_2,\ X_{l2}$$ intact. For the left side,

$$
R_{1L} = \frac{R_1}{a^2},\quad X_{l1L} = \frac{X_{l1}}{a^2}
$$

$$
V_{pH} = \frac{V_p}{a},\quad  I_{pH} = aI_p
$$

### 4. Equivalent circuits

High-voltage:

{% include circuit.html id="transformer-ex2-high" from_data=true %}

Low-voltage:

{% include circuit.html id="transformer-ex2-low" from_data=true %}

### 5. High-voltage current

Consider a load on the low-voltage side to receive power $$S$$ in the low-voltage equivalent circuit. Since a power factor $$PF$$ is given,

$$
\theta = \arccos{PF}
$$

Given the terminal voltage $$V_{load}$$, the current in the load (the low-voltage current) is

$$
I_s = \frac{S}{V_{load}} \angle{\theta}
$$

Note: If $$PF$$ is lagging, the angle in the current carries a negative sign.

Then the high-voltage current is obtained using the turns ratio:

$$
I_P = \frac{I_s}{a}
$$

### 6. Real and reactive power

Given $$PF$$, the real power (in Watts) is simply

$$
P = S \times PF
$$

The reactive power is

$$
Q = S \sin{\theta}
$$

***