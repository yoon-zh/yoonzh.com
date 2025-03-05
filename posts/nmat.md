---
layout: post
title: nmat
card_title: nmat
url: /posts/nmat
math: true
tech_stack: [MATLAB]
---

nmat

- fix functions
- optimize functions
- comments
- equations docs
- documentation

## In a nutshell

We know analytical calculus (aka handwritten math). But as we know, it becomes difficult once we step out of the classroom into the real world. So we wanna use complex equations with many constraints to find important values. But we do not wanna do it by hand. 

What to use then? **Numerical Calculus**. This is basically implementing *numerical methods*, which means clever algorithms, to find the values we want from certain equations.

## Why not solve by hand?
For example, let's say we have a system of 3 equations for variables $$x, y, z$$. But there's a catch: x, y, z show up in derivative forms.

$$
\begin{aligned}
\frac{dx}{dt} &= \sigma (y - x), \\
\frac{dy}{dt} &= x (\rho - z) - y, \\
\frac{dz}{dt} &= xy - \beta z,
\end{aligned}
$$

Where $$\sigma = 10,\quad \rho = 28,\quad \beta = \frac{8}{3}$$  
And initial conditions $$x(0) = 1,\quad y(0) = 1,\quad z(0) = 1.$$

*If you're curious, the above is a simple example of the Lorenz System[^1]*

Honestly, we do not wanna solve it by hand (unless you enjoy the math pain). So we can try to guess what $$x, y, z$$ could be. But we would need very educated guesses if we wanna get to a solution someday.

Or, we can use a clever algorithm like Runge-Kutta[^2] where we plug our equations into some functions and calculate numbers to get approximated solutions.

### Is it actually better than handmade solutions?

It depends. For small stuff, you can do it by hand. For complex scenarios, you could try using WolframAlpha or MATLAB Symbolic ToolBox. But when it gets tough, numerical methods are pretty handy and commonly applied.

*It is a good alternative because computers are good with numbers.* So we can give our weird-looking algorithm to the computer via code, compile it, and have it loop through the equation a couple hundred times (which it does very very quickly). And boom, we have the magical numbers.

Note, numerical methods usually mean some sacrifice in precision. Also, you may not get a general solution, since *numerical* methods work with *numbers*; our computers deal with *numbers*.

In short: You need **numbers**, your computer will deal with **numbers**, and you need a good algorithm. *Runge-Kutta[^2] is crazy good, you'll be surprised the guy was a genius*.

# Roots of Equations
pg 117[^3]

Let's say we want to know the root of a function like $$f(x) = e^{-x}-x$$. We probably don't wanna do it by hand

## Bracketing Methods
pg 123

### 1. Bisection
pg 127

### 2. False-Position
pg 135

## Open Methods
pg 145

### 1. Newton-Raphson
pg 151

### 2. Secant
pg 157

### 3. Brent's Method
pg 162

### 4. Multiple Roots
pg 166

## Polynomials
pg 176

### 1. Muller's Method
pg 183

### 2. Bairstow's Method
pg 187

## Examples


# Linear Equations
pg 231

## Gauss
pg 245

## rref
pg 273

## Gauss-Seidel
pg 304

## Examples


# Optimization
pg 345

## ??


# Regression
pg 456

## Least Squares
pg 456

### Linear
pg 456

### Polynomial
pg 472

### General
pg 479

## Interpolation
pg 490

### Newton
pg 491

### Lagrange
pg 502

## Fourier
pg 526


# Numerical Calculus
pg 587

## Trapezoidal
pg 605

## Simpson
pg 615

## Unequal segments
pg 624

## Integration
pg 633

## Romberg
pg 634

## Adaptive
pg 640

## Gauss
pg 642

## Improper integrals
pg 650

## Partial Derivatives
pg 662


# ODEs
pg 699

## Runge Kutta
pg 709

## Stiffness, multistep
pg 755

## Boundary value
pg 781

## Eigenvalues
pg 789

# PDEs
pg 845

## Laplace
pg 852

## Crank-Nicolson
pg 882

## Finite-Element
pg 890


## Credits
[^1]: Hateley, J. (N.A). The Lorenz System. UC Santa Barbara. https://web.math.ucsb.edu/~jhateley/paper/lorenz.pdf
[^2]: Zheng, L., Zhang, X. (2017). Modeling and Analysis of Modern Fluid Problems: Numerical Methods. https://www.sciencedirect.com/topics/mathematics/runge-kutta-method
[^3]: Chapra, S; Canale, R (2015). Numerical Methods for Engineers (Seventh Edition).
<!--Written by Jorge Porras (2025)-->