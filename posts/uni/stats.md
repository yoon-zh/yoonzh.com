---
layout: hidden
title: stats
card_title: "Stats Summary"
math: true
url: /posts/uni/stats
date: 2025-04-23
---

## Counting

> ### Permutation
>
> $$P(n, r) = \frac{n!}{(n - r)!}$$

> ### Combination
>
> $$C(n, r) = \binom nr = \frac{n!}{r!(n - r)!}$$

***

## Probability

> $$P(A) = P(A \cap B) + P(A \cap B^c)$$
>
> $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

> ### Mutually Exclusive
>
> Two events A and B are mutually exclusive if
>
> $$P(A \cap B) = 0$$

> ### Conditional
>
> $$P(A \mid B) = \frac{P(A \cap B)}{P(B)} \quad \text{if } P(B) > 0$$

> ### Total Probability
>
> If $$B_1, B_2, ..., B_n$$ form a partition of the sample space (mutually exclusive and exhaustive), then
>
> $$P(A) = \sum_{i=1}^n P(A \mid B_i)P(B_i)$$

> ### Bayes
>
> For a partition $$B_1, B_2, ..., B_n$$,
>
> $$P(B_i \mid A) = \frac{P(A \mid B_i)P(B_i)}{\sum_{j=1}^n P(A \mid B_j)P(B_j)}$$

> ### Independency
>
> If
> 
> $$P(A \cap B) = P(A)P(B)$$
> 
> Then A and B are independent, then
>
> $$P(A \mid B) = P(A),\ P(B \mid A) = P(B)$$

***

## Random Variables


### Discrete vs Continuous Table

| Properties       | Discrete                               | Continuous                              |
|----------------------|--------------------------------------------|---------------------------------------------|
| PMF/PDF          | $$P(X = x)$$                          | $$f(x)$$ with $$P(a \leq X \leq b) = \int_a^b f(x)dx$$ |
| CDF              | $$\sum_{k \leq x} P(X = k)$$       | $$\int_{-\infty}^x f(t)dt$$          |
| $$E[X]$$         | $$\sum_x x \cdot P(X = x)$$        | $$\int_{-\infty}^\infty x \cdot f(x)dx$$ |
| $$\text{Var}(X)$$| $$\sum_x (x - \mu)^2 P(X = x)$$ | $$\int_{-\infty}^\infty (x - \mu)^2 f(x)dx$$ |
| Uniform Distribution | $$P(X = x) = \frac{1}{n}$$ for $$x \in \{x_1, x_2, ..., x_n\}$$ | $$f(x) = \frac{1}{b - a}$$ for $$a \leq x \leq b$$ |

***

> ### Discrete vs Continuous
>
> - Discrete: Takes countable values. Defined via PMF: $$P(X = x)$$
> - Continuous: Takes uncountable values. Defined via PDF: $$f(x) \geq 0$$ with $$P(a \leq X \leq b) = \int_a^b f(x)dx$$

> ### CDF
>
> Cumulative Distribution Function:
>
> $$F(x) = P(X \leq x) = \begin{cases} \sum_{k \leq x} P(X = k) & \text{(Discrete)} \\ \int_{-\infty}^x f(t)dt & \text{(Continuous)} \end{cases}$$

### Mean (Expectation)

> ### Discrete
>
> $$E[X] = \sum_{x} x \cdot P(X = x)$$

> ### Continuous
>
> $$E[X] = \int_{-\infty}^\infty x \cdot f(x)dx$$

### Variance

> $$\text{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$$

> ### Properties
>
> - Linearity: $$E[aX + b] = aE[X] + b$$
> - Variance: $$\text{Var}(aX + b) = a^2\text{Var}(X)$$
> - If $$X, Y$$ independent: $$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$$

### Discrete distributions

> ### Binomial
>
> $$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k} \quad \text{for } k = 0,1,...,n$$

> ### Geometric
>
> $$P(X = k) = (1-p)^{k-1}p \quad \text{for } k = 1,2,...$$

> ### Poisson
>
> $$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!} \quad \text{for } k = 0,1,...$$

### Continuous distributions

> ### Uniform
>
> $$f(x) = \frac{1}{b - a} \quad \text{for } a \leq x \leq b$$

> ### Exponential
>
> $$f(x) = \lambda e^{-\lambda x} \quad \text{for } x \geq 0$$

> ### Normal (Gaussian)
>
> $$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}$$

> ### Rayleigh
>
> $$f(x) = \frac{x}{\sigma^2} e^{-x^2/(2\sigma^2)} \quad \text{for } x \geq 0$$

### Joint Distributions

> ### Discrete
>
> Joint PMF: $$P(X = x, Y = y)$$

> ### Continuous
>
> Joint PDF: $$f(x, y) \geq 0$$ with $$P((X,Y) \in D) = \iint_D f(x,y)dxdy$$

> ### Marginal PMF/PDF
>
> - Discrete: $$P(X = x) = \sum_y P(X = x, Y = y)$$
> - Continuous: $$f_X(x) = \int_{-\infty}^\infty f(x,y)dy$$

> ### Covariance & Correlation
>
> Covariance:
>
> $$\text{Cov}(X,Y) = E[XY] - E[X]E[Y]$$
>
> Correlation:
>
> $$\rho_{X,Y} = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y}$$
>
> - If $$X, Y$$ independent: $$\text{Cov}(X,Y) = 0$$ (converse not necessarily true)

***

## Limit Theorems

> ### Markov's Inequality
>
> For non-negative random variable $$X$$,
>
> $$P(X \geq a) \leq \frac{E[X]}{a} \quad \text{for } a > 0$$

> ### Chebyshev's Inequality
>
> $$P(|X - \mu| \geq k\sigma) \leq \frac{1}{k^2} \quad \text{for } k > 0$$

> ### Central Limit Theorem (CLT)
>
> If $$X_1, X_2, ..., X_n$$ are i.i.d. with mean $$\mu$$ and variance $$\sigma^2$$, then as $$n \to \infty$$,
>
> $$\frac{\bar{X} - \mu}{\sigma/\sqrt{n}} \approx \mathcal{N}(0,1)$$

***

## Data Analysis

> ### Measures of Center
>
> - Mean: $$\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i$$
> - Median: Middle value of ordered data

> ### Measures of Spread
>
> - Range: $$\text{Max} - \text{Min}$$
> - Variance: $$s^2 = \frac{1}{n-1}\sum_{i=1}^n (x_i - \bar{x})^2$$
> - Interquartile Range (IQR): $$Q_3 - Q_1$$

> ### Quartiles
>
> - Q1: 25th percentile
> - Q3: 75th percentile