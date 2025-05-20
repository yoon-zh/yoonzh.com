---
layout: post
title: ml-week2
card_title: ML week 2
excerpt: "Understand tensors, perform tensor operations, and compute gradients using automatic differentiation."
url: /posts/ml/ml-week2
math: true
tech_stack: [ML, Python]
date: 2025-02-18
---

*Adapted from [^1]*

## Week 2: Tensors & Mathematical Foundations
**Objective:** Understand tensors, perform tensor operations, and compute gradients using automatic differentiation.

---

## Key Concepts Explained

### 1. Tensors

**Definition:** A tensor is a multi-dimensional array of numerical values.
**Scalar:** A single number (0D tensor). Example: `5.0`.
**Vector:** A 1D array (1D tensor). Example: `[1.0, 2.0, 3.0]`.
**Matrix:** A 2D grid (2D tensor). Example: `[[1, 2], [3, 4]]`.
**Higher Dimensions:** 3D (cube), 4D (time-series), etc.
**Why Tensors?** They unify data representation for ML models (e.g., images as 3D tensors: height × width × color channels).  

```python
import numpy as np

# Create tensors
scalar = np.array(5.0)          # 0D tensor
vector = np.array([1, 2, 3])    # 1D tensor
matrix = np.array([[1, 2], [3, 4]])  # 2D tensor
```

### 2. Tensor Operations

**Reshaping:** Change tensor dimensions without altering data.  
```python
matrix = np.array([[1, 2], [3, 4]])
reshaped = matrix.reshape(4, 1)  # Reshape to 4 rows × 1 column
```

**Broadcasting:** Automatically expand tensors to perform arithmetic.  
```python
a = np.array([1, 2, 3])  # Shape (3,)
b = np.array([[10], [20]])  # Shape (2, 1)
result = a + b  # Result shape (2, 3)
# [[11, 12, 13], [21, 22, 23]]
```

**Einsum:** Compact notation for tensor operations (e.g., matrix multiplication).  
```python
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
C = np.einsum('ij,jk->ik', A, B)  # Matrix multiplication
# [[19, 22], [43, 50]]
```

### 3. Automatic Differentiation (Autograd)

**Definition:** A technique to automatically compute gradients (derivatives) of functions.  

**Why Gradients?** Gradients tell us how to adjust model parameters to reduce errors during training.  

**Example with PyTorch:**  
```python
import torch

x = torch.tensor(3.0, requires_grad=True)
y = x ** 2 + 2 * x + 1  # Function: y = x² + 2x + 1
y.backward()  # Compute gradient dy/dx
print(x.grad)  # dy/dx = 2x + 2 → 2*3 + 2 = 8.0
```

### 4. Jacobian Matrix

**Definition:** A matrix of all first-order partial derivatives of a vector-valued function.  

**Example Function:** $$\(f(x,y) = [x^2 + 3y, 5x + y^3] \)$$
- Jacobian \( J \) has shape (2, 2):  
$$
\[
J = \begin{bmatrix}
\frac{\partial f_1}{\partial x} & \frac{\partial f_1}{\partial y} \\
\frac{\partial f_2}{\partial x} & \frac{\partial f_2}{\partial y}
\end{bmatrix}
= \begin{bmatrix}
2x & 3 \\
5 & 3y^2
\end{bmatrix}
\]
$$
---

## Mini Exercises

### 1. Reshape a Tensor
Convert a 1D tensor `[1, 2, 3, 4, 5, 6]` into a 3x2 matrix.  
```python
tensor = np.array([1, 2, 3, 4, 5, 6])
reshaped = tensor.reshape(3, 2)
```

2. **Compute Gradients**  
Use PyTorch to compute the derivative of \( y = 2x^3 + \sin(x) \) at \( x = \pi \).  
```python
x = torch.tensor(np.pi, requires_grad=True)
y = 2 * x ** 3 + torch.sin(x)
y.backward()
print(x.grad)  # dy/dx = 6x² + cos(x) ≈ 6*(9.87) + (-1) ≈ 58.2
```

---

## Project Walkthrough: Compute the Jacobian Matrix

### Step 1: Define the Function
Compute \( f(x, y) = x^2 + 3y \).  
```python
def f(x, y):
    return x**2 + 3*y
```

### Step 2: Compute Partial Derivatives Manually
- \( \frac{\partial f}{\partial x} = 2x \)  
- \( \frac{\partial f}{\partial y} = 3 \)  

### Step 3: Code the Jacobian
```python
import numpy as np

def jacobian(x, y):
    df_dx = 2 * x
    df_dy = 3
    return np.array([[df_dx, df_dy]])

# Example at (x=2, y=4)
print(jacobian(2, 4))  # Output: [[4, 3]]
```

### Step 4: Visualize with NumPy
```python
x_vals = np.linspace(-2, 2, 100)
y_vals = np.linspace(-2, 2, 100)
X, Y = np.meshgrid(x_vals, y_vals)
Z = f(X, Y)

# Plot in Jupyter Notebook
import matplotlib.pyplot as plt
plt.contourf(X, Y, Z, levels=20)
plt.colorbar()
plt.title("f(x, y) = x² + 3y")
plt.xlabel("x")
plt.ylabel("y")
plt.show()
```

---

## Questions
1. What is the rank of a 3x2x4 tensor?
2. What does broadcasting allow you to do?
3. Compute the gradient of $$\( y = 3x^2 \) at \( x = 2 \).$$
4. What is the Jacobian matrix for \( f(x, y) = [x + y, xy] \)?

## Dictionary
- **Tensor:** A multi-dimensional array of numbers.
- **Automatic Differentiation:** Automatically computes gradients for optimization.
- **Gradient:** A vector of partial derivatives (slopes) of a function.
- **Jacobian Matrix:** A matrix of all first-order partial derivatives of a vector function.
- **Reshaping:** Changing the dimensions of a tensor without changing its data.

## Resources
- **NumPy Tutorial:** [NumPy Quickstart](https://numpy.org/doc/stable/user/quickstart.html)
- **PyTorch Autograd:** [PyTorch Autograd Guide](https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html)
- **Visualizing Tensors:** [3Blue1Brown Essence of Linear Algebra](https://www.3blue1brown.com/topics/linear-algebra)

---

## Tips

- Use `torch.autograd.functional.jacobian` in PyTorch to compute Jacobians automatically for complex functions.
- Debug shape errors by printing tensor shapes (`print(tensor.shape)`).

## Answers to questions above
1. Rank 3 (3 dimensions).  
2. Perform arithmetic on tensors of different shapes by expanding them.  
3. \( dy/dx = 6x \). At \( x=2 \), gradient = 12.  
4. \( J = \begin{bmatrix} 1 & 1 \\ y & x \end{bmatrix} \).  


---
## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->