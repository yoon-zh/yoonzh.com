---
layout: post
title: ml
card_title: ml learning path
url: /posts/ml
excerpt: ml
math: true
tech_stack: [Python, ML]
---

date: 2025-02-17
*Adapted from [^1]*

## goals

- explain core ML concepts and deployment challenges
- manipulate tensors and implement efficient data pipelines
- build and train models using PyTorch and TensorFlow
- convert and secure models using Safetensors.
- deploy models locally and at scale via APIs, cloud, or edge devices.
- fine-tune and run local LLMs (deepseek)


### Week 1: Introduction to ML & Deployment

ML fundamentals: Supervised, unsupervised, reinforcement learning.

Model deployment lifecycle: Training, validation, monitoring, scaling.

Ethical considerations: Bias, privacy, and environmental impact.

**Project:** Deploy a pre-trained scikit-learn model (e.g., Iris classifier) via a Flask API. Write a 1-page report on potential deployment pitfalls.

### Week 2: Tensors & Mathematical Foundations

Tensors as data structures: Scalars, vectors, matrices, n-dimensional arrays.

Tensor operations: Reshaping, broadcasting, einsum.

Automatic differentiation and gradient computation.

**Exercise:** Use NumPy to compute the Jacobian matrix for a simple function (e.g., $${f(x,y)=x^2+3y}$$). Visualize tensor operations in a Jupyter notebook.

### Week 3: Data Pipelines & Preprocessing

Data loading (CSV, JSON, Parquet), normalization, and augmentation.

Feature engineering: Embeddings, one-hot encoding, PCA.

Tools: Pandas, Hugging Face Datasets, TF Data API.

**Project:** Build a data pipeline for the Titanic dataset. Implement a custom PyTorch Dataset class to handle missing values and categorical features.

### Week 4: PyTorch vs. TensorFlow Deep Dive

PyTorch: Dynamic computation graphs, torch.nn, GPU acceleration.

TensorFlow: Static graphs, Keras layers, distributed training.

**Exercise:** Train a logistic regression model on MNIST using both frameworks. Compare code structure, debugging ease, and training speed.

### Week 5: Building & Training Models

Architectures: CNNs (ResNet), RNNs (LSTM), Transformers.

Transfer learning with pretrained models (e.g., BERT, ResNet-50).

**Project:** Train a PyTorch CNN on CIFAR-10 and a TensorFlow Transformer for text generation. Profile GPU usage with nvtop or NSight.

### Week 6: Model Evaluation & Optimization

Metrics: Precision, recall, F1, ROC-AUC.

Hyperparameter tuning: Grid search, Bayesian optimization.

Explainability: SHAP, LIME.

**Exercise:** Use Optuna to optimize hyperparameters for a Random Forest model. Generate a SHAP summary plot for feature importance.

### Week 7: Safetensors & Model Security

Safetensors format: Security benefits over pickle.

Model serialization/deserialization in PyTorch/TensorFlow.

Vulnerability scanning with tools like safety or bandit.

**Project:** Convert a PyTorch model to Safetensors. Write a script to detect unsafe operations in a model’s inference pipeline.

### Week 8: Deployment with Flask/FastAPI

REST API design, request handling, async endpoints.

Scalability: Load balancing, Redis caching.

**Project:** Deploy a sentiment analysis model with FastAPI. Use Docker to containerize the app and Locust for load testing.

### Week 9: Local LLMs & Fine-Tuning

Quantization (GGUF, GPTQ), LoRA for parameter-efficient tuning.

Tools: Ollama, llama.cpp, Hugging Face Transformers.

**Project:** Fine-tune Mistral-7B on a custom dataset (e.g., legal documents) using QLoRA. Benchmark inference speed on a CPU vs. GPU.

### Week 10: Advanced Deployment Strategies

Cloud platforms: AWS SageMaker, Google AI Platform.

Edge devices: TensorFlow Lite, ONNX Runtime.

**Project:** Deploy a TFLite model to a Raspberry Pi. Collect real-time sensor data and run inferences.

### Week 11: Capstone Project

End-to-end project: From dataset selection to deployed model. Example:

- Train a GAN to generate synthetic art.
- Deploy it as a Gradio app with user input controls.
- Write a CI/CD pipeline for model updates.

### Week 12: Next Steps & Emerging Trends

MLOps: MLflow, Kubeflow, monitoring with Prometheus.

Trends: Federated learning, neuromorphic computing.

**Exercise:** Present a research paper (e.g., “Attention Is All You Need”) and propose a deployment strategy for its architecture.

Tools: Docker, Hugging Face Hub, Weights & Biases.

Communities: Kaggle, MLflow Slack, PyTorch Forums.


## Credits

[^1]: Deepseek.
<!--Written by Jorge Porras (2025)-->