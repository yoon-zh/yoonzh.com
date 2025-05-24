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
1. Sum all values: $$a_1 + a_2 + \timess + a_n$$
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

# Random Variables

Let $$X_1,\ X_2,\ \ldots, X_n$$ be a set of independent and identically distributed random variables from a sample $$n$$, and has a mean $$m$$. The sample mean is:

$$
\overline{X}_n = \frac{X_1 + X_2 + \ldots + X_n}{n}
$$

- Find $$E(\overline{X}_n)$$ and $$Var(\overline{X}_n)$$
- Use Chebyshev's inequality to find the smallest integer $$t$$, where for any $$n \geq t$$:

$$P(\lvert \overline{X}_n - m \rvert < b) \geq C$$

- For a given value of $$n$$, use the central limit theorem to approximate $$P(\lvert \overline{X}_n - m \rvert < b)$$


***

## Solution

> ### 1. Expectation and Variance
>
> Given that $$\overline{X}_n$$ is a sample of independent and identically distributed random variables, each with mean $$\mu$$ and variance $$\sigma ^2$$, then
>
> $$E(\overline{X}_n) = \mu, \quad \text{Var}(\overline{X}_n) = \frac{\sigma ^2}{n}$$
>
>
> ### 2. From Chebyshev's Inequality
>
> $$P(\lvert X - \mu \rvert < k \sqrt{\frac{\sigma ^2}{n}}) \geq 1 - \frac{1}{k^2}$$
>
> Get $$k$$ from left side, then replace in right side
>
> $$k \sqrt{\frac{\sigma^2}{n}} = b \implies k = \frac{b \sqrt{n}}{\sigma}$$
>
> $$1 - \frac{\sigma^2}{b^2 n} \geq C$$
>
> Solving for $$n$$,
>
> $$n \geq \frac{\sigma^2}{b^2 (1 - C)}$$
> 
> The smallest integer $$t$$ is
>
> $$t = \left\lceil \frac{\sigma^2}{b^2 (1 - C)} \right\rceil$$
>
> ### 3. Central Limit Theorem
>
> Rewrite in standardized form:
>
> $$\left|\frac{\overline{X}_n - m}{\sigma / \sqrt{n}}\right| < \frac{b \sqrt{n}}{\sigma}$$
>
> Then the normal distribution can be used. By symmetry and reordering terms,
>
> $$P\left(|\overline{X}_n - m| < b\right) = 2\Phi\left(\frac{b \sqrt{n}}{\sigma}\right) - 1$$


## Detailed Process

### 1. $$E(\overline{X}_n)$$ and $$Var(\overline{X}_n)$$

The variables $$X_1, X_2, \ldots, X_n$$ are identically distributed with mean $$m$$. By linearity of expectation,

$$
E(\overline{X}_n) = \frac{1}{n} \sum_{i=1}^n E(X_i) =\frac{1}{n} \times n \times m = m
$$

For independent random variables, the variance of the sum is the sum of the variances:

$$
Var\left(\sum_{i=1}^n X_i\right) = \sum_{i=1}^n Var(X_i)
$$

Let $$Var(X_i) = \sigma^2$$. Since the variables are identically distributed,

$$
Var\left(\sum_{i=1}^n X_i\right) = n \sigma^2

$$

For the sample mean:

$$
Var(\overline{X}_n) = Var\left(\frac{1}{n} \sum_{i=1}^n X_i\right) = \frac{1}{n^2} \times n \sigma^2 = \frac{\sigma^2}{n}
$$

> Remember: $$\text{Var}(aX + b) = a^2\text{Var}(X)$$

***

### 2. Find the Smallest Integer $$t$$

Recall Chebyshev's Inequality:

> For a random variable $$X$$ with mean $$\mu$$ and variance $$\nu$$,
>
> $$P(\lvert X - \mu \rvert \geq k \sqrt{\nu}) \leq \frac{1}{k^2}$$
> 
> Equivalently:
> 
> $$P(\lvert X - \mu \rvert < k \sqrt{\nu}) \geq 1 - \frac{1}{k^2}$$

Replacing $$X = \overline{X}_n,\ \mu = m,\ \nu = \frac{\sigma^2}{n}$$:

$$
P\left(|\overline{X}_n - m| < k \sqrt{\frac{\sigma^2}{n}}\right) \geq 1 - \frac{1}{k^2}
$$

***

We want to find $$t$$ such that for $$n \geq t$$,

$$
P\left(|\overline{X}_n - a| < b\right) \geq C
$$


Find $$k$$:

$$
k \sqrt{\frac{\sigma^2}{n}} = b \implies k = \frac{b \sqrt{n}}{\sigma}
$$

Substitute into the inequality:

$$
1 - \frac{1}{k^2} \geq C
$$

$$
1 - \frac{\sigma^2}{b^2 n} \geq C
$$

Solving for $$n$$,

$$
n \geq \frac{\sigma^2}{b^2 (1 - C)}
$$

The smallest integer $$t$$ is:

$$
t = \left\lceil \frac{\sigma^2}{b^2 (1 - C)} \right\rceil
$$

#### Corner Cases
1. $$C > 1$$: The inequality is trivial (always true), so $$t = 1$$.
2. $$C \leq 0$$: Invalid, as probabilities cannot be negative.

### 3. Central Limit Theorem

Recall the Central Limit Theorem:

> If $$X_1, X_2, ..., X_n$$ are i.i.d. with mean $$\mu$$ and variance $$\sigma^2$$, then as $$n \to \infty$$,
>
> $$\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \approx \mathcal{N}(0,1)$$


Rewrite the event $$\lvert \overline{X}_n - m \rvert < b$$ in standardized form:

$$
\left|\frac{\overline{X}_n - m}{\sigma / \sqrt{n}}\right| < \frac{b \sqrt{n}}{\sigma}
$$

Let $$Z = \frac{\overline{X}_n - m}{\sigma / \sqrt{n}}$$. By the CLT, $$Z$$ follows a standard normal distribution. Then the probability becomes

$$
P\left(|Z| < \frac{b \sqrt{n}}{\sigma}\right) = P\left(-\frac{b \sqrt{n}}{\sigma} < Z < \frac{b \sqrt{n}}{\sigma}\right)
$$

Using symmetry of the normal distribution:

$$
P\left(|Z| < k\right) = 2\Phi(k) - 1
$$

where $$\Phi(k)$$ is the cumulative distribution function (CDF) of the standard normal distribution.

Substitute $$k = \frac{b \sqrt{n}}{\sigma}$$:

$$
P\left(|\overline{X}_n - m| < b\right) = 2\Phi\left(\frac{b \sqrt{n}}{\sigma}\right) - 1
$$

> Note: In the above equation,
>
> $$\sigma = \sqrt{Var\left(X_i\right)}$$
>
> The variance used is from each random variable $$X_i$$, NOT from $$\overline{X}_n = \frac{\sigma ^2}{n}$$

***
