---
layout: post
title: ml-week1
card_title: ML week 1
url: /posts/ml-week1
math: true
tech_stack: [ML, Python]
date: 2025-02-17
---

*Adapted from [^1]*

## Week 1: Introduction to ML & Deployment

**Objective:** Understand core ML concepts, deploy a simple model via an API, and identify deployment challenges.

## Concepts

**1. ML Basics**
- **What is ML?** Algorithms that learn patterns from data to make predictions or decisions.
- **Supervised Learning Example:** Classify iris flowers into species (setosa, versicolor, virginica) using measurements (sepal length, petal width).


## Setup

1 Verify python 3
```bash
python3 --version # should return Python 3.12.x
pip3 --version # should return pip 24.0 from /usr/lib/python3/dist-packages/pip (python 3.12)
```
If not Python 3, [install](https://www.python.org/downloads/)

2 

Install Dependencies
```bash
pip install flask scikit-learn
```

## Test

1. What is supervised learning?
2. What does an API endpoint do?
3. Name one security risk in deploying a model


## Dictionary
- **API:** A bridge between software applications (e.g., your model and a mobile app)
- **Deployment:** Making a model usable by others via an interface like an API
- **Flask:** A Python library for building web servers
- **Model:** A file (e.g., .pkl) containing learned patterns from data
- **Pre-trained Model:** A model already trained on data (e.g., iris_model.pkl)

## Resources
- https://scikit-learn.org/stable/auto_examples/decomposition/plot_pca_iris.html


## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->