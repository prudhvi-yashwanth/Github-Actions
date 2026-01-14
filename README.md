# 📖 GitHub Actions Overview

## 🔹 What is GitHub Actions?
GitHub Actions is an automation tool built directly into GitHub that allows developers to **build, test, and deploy** code from their repositories.

- Workflows are defined in `.github/workflows/*.yml` files using **YAML syntax**.  
- It is **event-driven**: workflows run when triggered by GitHub events (e.g., commits, pull requests, issue creation, or manual dispatch).

---

## 🔹 Key Concepts.
- **Workflow**: A YAML file describing automation steps.  
- **Event**: A trigger (push, PR, schedule, etc.) that starts a workflow.  
- **Job**: A set of steps executed on a runner.  
- **Step**: An individual task (e.g., run a command, use an action).  
- **Runner**: A virtual machine (like `ubuntu-latest`) where jobs run.  
- **Action**: A reusable unit of code (community or custom) that performs a task.  

---

## 🔹 Why Use GitHub Actions?
- **CI/CD**: Automate builds, tests, and deployments.  
- **Integration**: Works seamlessly with GitHub repositories.  
- **Flexibility**: Supports multiple languages, frameworks, and environments.  
- **Community Actions**: Thousands of prebuilt actions available on the GitHub Marketplace.  
- **Scalability**: Run jobs in parallel, matrix builds, or self-hosted runners.  

---

## 🔹 Example Workflow

```yaml
name: CI Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20.x'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
