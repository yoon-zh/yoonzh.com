---
layout: hidden
title: stats-ex
card_title: "Stats Examples"
math: true
url: /posts/uni/stats-ex
date: 2025-04-23
---

# Simple Data Analysis

Consider a sample of $$n$$data: $$[a_1, a_2, ..., a_n]$$. Find:
- Mean
- Median
- Mode
- Quartiles $$Q_1,\ Q_3$$

## Solution

| Measure   | Key Rule                      | Odd vs. Even                                 |
|-----------|-------------------------------|----------------------------------------------|
| Mean      | Sum all, divide by $$n$$      | Same                                         |
| Median    | Middle value(s) after sorting | Odd: Exact middle; Even: Average two middles |
| Mode      | Most frequent value(s)        | Handle ties/no mode                          |
| Quartiles | Split data at $$Q_2$$, compute medians of halves | Odd $$n$$: Exclude $$Q_2$$from halves |

***

## Detailed Process

### 1. Mean

> $$\text{Mean} = \frac{1}{n} \sum_{i=1}^n a_i$$

Steps:
1. Sum all values: $$a_1 + a_2 + \cdots + a_n$$
2. Divide by the total number of data points $$n$$

Corner Cases:
- If $$n = 0$$: Undefined (no data)

### 2. Median

Steps:
1. Sort the data in ascending order
2. Check if $$n$$ is odd or even:
  - Odd: Median = Middle value at position $$\frac{n+1}{2}$$  
  *Example*: For $$[1, 3, 5]$$(n=3), median = 3
  - Even: Median = Average of the two middle values at positions $$\frac{n}{2}$$and $$\frac{n}{2} + 1$$  
  *Example*: For $$[1, 3, 5, 7]$$(n=4), median = $$\frac{3 + 5}{2} = 4$$

Corner Cases:
- If $$n = 1$$: Median = the single value

### 3. Mode

Definition: The most frequently occurring value(s)

Steps:
1. Count the frequency of each unique value
2. Identify the value(s) with the highest frequency

Corner Cases:
- No mode: All values occur once (e.g., $$[1, 2, 3]$$)
- Multiple modes: Multiple values share the highest frequency (e.g., $$[1, 1, 2, 2]$$has modes 1 and 2)

### 4. Quartiles $$Q_1,\ Q_3$$

Steps:
1. Sort the data
2. Find the median ($$Q_2$$)
3. Split the dataset:
  - Lower half: Values below $$Q_2$$(if $$n$$is odd, exclude $$Q_2$$)
  - Upper half: Values above $$Q_2$$(if $$n$$is odd, exclude $$Q_2$$)
4. Compute $$Q_1$$and $$Q_3$$:
  - $$Q_1$$= Median of the lower half
  - $$Q_3$$= Median of the upper half

Example (Odd n):
For $$[1, 2, 3, 4, 5]$$(n=5):
- $$Q_2$$= 3
- Lower half = [1, 2] → $$Q_1$$= 1.5
- Upper half = [4, 5] → $$Q_3$$= 4.5

Example (Even n):
For $$[1, 2, 3, 4, 5, 6]$$(n=6):
- $$Q_2$$= 3.5
- Lower half = [1, 2, 3] → $$Q_1$$= 2
- Upper half = [4, 5, 6] → $$Q_3$$= 5

Corner Cases:
- Small datasets (e.g., $$n < 4$$): Quartiles may equal existing data points or require interpolation

***

***

# Conditional Probability

Consider a set of $$n$$ mutually exclusive events $$A_1, A_2, ..., A_n$$, where $$P(A_i)$$ is known.
A different event B has a conditional probability, where $$P(B \mid A_i)$$ is known for all $$i$$.
What is the conditional probability $$P(A_i \mid B)$$ for any $$i \leq n$$?

## Solution

> 1\. Law of Total Probability
>
> $$P(B) = P(A_1) P(B \mid A_1) + P(A_2) P(B \mid A_2) + \ldots$$
>
> In other words,
>
> $$P(B) = \sum_{i=1}^n P(B\mid A_i) P(A_i)$$
>
> 2\. Bayes' Theorem
>
> $$P(A_i \mid B) = \frac{P(B\mid A_i) P(A_i)}{P(B)}$$


## Detailed Process

1\. Verify Exhaustiveness: Ensure the events $$A_1, A_2, \ldots, A_n$$ are mutually exclusive and exhaustive.

$$\sum_{i=1}^n P(A_i) = 1 $$

If they are not exhaustive, $$P(B)$$ depends on $$P(B\mid\text{not} \cup A_i)$$, which is unknown. The problem cannot be solved without this information.


2\. Law of Total Probability

$$
P(B) = \sum_{j=1}^n P(B\mid A_j) P(A_j)
$$


3\. Bayes' Theorem

$$
P(A_i\mid B) = \frac{P(B\mid A_i) P(A_i)}{P(B)} = \frac{P(B\mid A_i) P(A_i)}{\sum_{j=1}^n P(B\mid A_j) P(A_j)}
$$


## Corner Cases

### 1. Non-Exhaustive $$A_i$$

If $$\sum_{i=1}^n P(A_i) < 1$$, the formula for $$P(B)$$ is incomplete. 

Example:
- $$n = 2,\ P(A_1) = 0.3,\ P(A_2) = 0.3,\ P(\text{neither}) = 0.4$$
- Without $$P(B\mid\text{neither}),\ P(B)$$ cannot be determined

### 2. Zero Denominator

If $$P(B) = 0,\ P(A_i\mid B)$$ is undefined. This occurs if either:
- $$P(B\mid A_i) = 0$$ for all $$i$$
- $$P(A_i) = 0$$ for all $$i$$

### 3. Zero Numerator

If $$P(A_i) = 0$$, then $$P(A_i\mid B) = 0$$, regardless of $$P(B\mid A_i)$$

If $$P(B\mid A_i) = 0,\ A_i$$ does not contribute to $$P(B)$$

### 4. Single Event

If $$n = 1$$ and $$P(A_1) = 1$$, then $$P(B) = P(B\mid A_1)$$, so $$P(A_1\mid B) = 1 $$

## Example

For the events $$A_1, A_2$$:

$$P(A_1) = 0.6,\ P(A_2) = 0.4$$

$$P(B\mid A_1) = 0.3,\ P(B\mid A_2) = 0.5$$

Calculate $$P(A_1 \mid B)$$.

***

1. Total probability of $$B$$:

$$
P(B) = (0.3)(0.6) + (0.5)(0.4) = 0.18 + 0.20 = 0.38
$$

2. Compute $$P(A_1\mid B)$$:

$$
P(A_1\mid B) = \frac{(0.3)(0.6)}{0.38} = \frac{0.18}{0.38} \approx 0.4737
$$

***

***

# Uniform Distribution