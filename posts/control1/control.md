---
layout: hidden
title: control
card_title: "control test"
math: true
url: /posts/control/control
excerpt: "control"
date: 2026-04-27
---

Contents
1. [Potentiometer](#type-1-potentiometer)
2. [Strain Gauge](#type-2-strain-gauge)
3. [Thermocouple](#type-3-thermocouple)
4. [State-Space Model](#type-4-state-space-model)
5. [Error and Stability](#type-5-error-and-stability)
6. [Root Locus](#type-6-root-locus)
7. [Frequency Response Analysis](#type-7-frequency-response-analysis)
8. [General Concepts](#type-8-general-concepts)

***

# Type 1: Potentiometer




# Type 2: Strain Gauge



# Type 3: Thermocouple

- Working principle
- Cold junction compensation
- FSD
- Cold junction & Wheatstone bridge

## Example 1

Given:
- Thermocouple temp-emf table
- Cold junction temperature

Find:
- The measured temperature, given a voltage
- Non-linearity error in FSD, given measuring range


# Type 4: State-Space Model


# Type 5: Error and Stability


# Type 6: Root Locus


# Type 7: Frequency Response Analysis


# Type 8: General Concepts

- Repeatability: maximum difference between two output values at same input, approached from the same direction
- Hysteresis: difference of output at same input when approached from different directions

- Precision: deviation of measured values
- Accuracy: true vs measured value

- Sensitivity: $$\frac{\delta_{\text{output}}}{\delta_{\text{input}}}$$
- Nonlinear error: max difference between real output and linear model
- Resolution: Smallest change that can be measured, the error is half the resolution

## Example

Given:
- A kitchen balance that measures 0 to 1 kg
- Non-linearity error $$\pm 0.15\%$$
- Hysteresis error $$\pm 0.05\%$$

Find:
- Error for a reading of 0.5 kg

## Solution

- Total error: Non-linearity + Hysteresis = $$\pm 0.2\%$$
- Measuring error: $$1 \text{kg} \times 0.2\% = \pm 0.002 kg$$

Then the error for any reading, including the 0.5 kg reading, is $$\pm 0.002 kg$$