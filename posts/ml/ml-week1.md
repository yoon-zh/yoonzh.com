---
layout: post
title: ml-week1
card_title: ML week 1
excerpt: "Understand core ML concepts, deploy a simple model via an API, and identify deployment challenges."
url: /posts/ml/ml-week1
math: true
tech_stack: [ML, Python]
date: 2025-02-18
---

*Adapted from [^1]*

## Week 1: Introduction to ML & Deployment
**Objective:** Understand core ML concepts, deploy a simple model via an API, and identify deployment challenges.

## Key Concepts Explained
1. **Machine Learning Basics**  
   - **What is ML?** Algorithms that learn patterns from data to make predictions or decisions.  
   - **Supervised Learning Example:** Classify iris flowers into species (setosa, versicolor, virginica) using measurements (sepal length, petal width).  
     ```python
     # Sample code: Load the Iris dataset
     from sklearn.datasets import load_iris
     iris = load_iris()
     X, y = iris.data, iris.target  # Features (measurements) and labels (species)
     ```

2. **Model Deployment**  
   - **Definition:** Making a trained model accessible to users/apps via an interface (e.g., API).  
   - **Why Flask?** A lightweight Python web framework for building APIs.  

3. **API (Application Programming Interface)**  
   - A set of rules allowing apps to communicate. Example: A mobile app sends data to your model via an API and receives predictions.  

---

## Mini Exercises

**1. Train a Basic Model**  

```python
from sklearn.linear_model import LogisticRegression

# Split data into training and testing sets
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train a logistic regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Predict on test data
predictions = model.predict(X_test)
print("Accuracy:", model.score(X_test, y_test))
```

**2. Create a Simple Flask Endpoint**  
```python
from flask import Flask
app = Flask(__name__)

@app.route('/hello')
def hello():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(port=5000)
```
- Run with `python app.py`, then visit `http://localhost:5000/hello` in your browser.

## Project Walkthrough: Deploy an Iris Classifier

### Step 1: Install Dependencies
```bash
pip install flask scikit-learn
```

### Step 2: Save the Trained Model

Add this code to `train_model.py`:  

```python
import joblib
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression

iris = load_iris()
model = LogisticRegression().fit(iris.data, iris.target)
joblib.dump(model, 'iris_model.pkl')
```
Run it: `python train_model.py` (generates `iris_model.pkl`).  

### Step 3: Build the Flask API
Create `app.py`:  

```python
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('iris_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array([data['sepal_length'], data['sepal_width'], 
                         data['petal_length'], data['petal_width']]).reshape(1, -1)
    prediction = model.predict(features)
    return jsonify({'species': int(prediction[0])})

if __name__ == '__main__':
    app.run(port=5000)
```

### Step 4: Test the API

Send a POST request using `curl` (or Postman):  

```bash
curl -X POST -H "Content-Type: application/json" -d '{"sepal_length":5.1, "sepal_width":3.5, "petal_length":1.4, "petal_width":0.2}' http://localhost:5000/predict
```

Expected response: `{"species":0}` (0 = setosa).  

### Step 5: Write the 1-Page Report

**Template: Deployment Pitfalls Example**  
- **Security:** No input validation (e.g., someone could send text instead of numbers).  
- **Scalability:** Flask’s default server can’t handle many users at once.  
- **Monitoring:** No logging to track failed requests or model accuracy drift.  

---

## Questions
1. What is supervised learning?  
2. What does an API endpoint do?  
3. Name one security risk in deploying a model.  

## Dictionary
- **API:** A bridge between software applications (e.g., your model and a mobile app).  
- **Deployment:** Making a model usable by others via an interface like an API.  
- **Flask:** A Python library for building web servers.  
- **Model:** A file (e.g., `.pkl`) containing learned patterns from data.  
- **Pre-trained Model:** A model already trained on data (e.g., `iris_model.pkl`).  

## Resources
- **Flask Quickstart:** [Official Documentation](https://flask.palletsprojects.com/en/3.0.x/quickstart/)  
- **scikit-learn Iris Tutorial:** [scikit-learn Guide](https://scikit-learn.org/stable/auto_examples/datasets/plot_iris_dataset.html)  
- **Postman API Testing Tool:** [Download Postman](https://www.postman.com/)  

## Debugging
If stuck, debug by:  
1. Checking ports (is another app using port 5000?).
2. Verifying input data shape matches the model’s expectations.

## Answers to questions above
1. Supervised learning uses labeled data to train models to predict outcomes.  
2. An API endpoint accepts input data, processes it (e.g., runs a model), and returns a result.  
3. Risk: Lack of input validation allows malicious data to crash the model.  

---
## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->