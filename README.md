<div align="center">

# 🔒 CRC Error Detection Using Java

**A Java implementation of the Cyclic Redundancy Check (CRC) algorithm for detecting transmission errors in binary data.**

![Java](https://img.shields.io/badge/Java-17+-orange?style=for-the-badge)
![Algorithm](https://img.shields.io/badge/Algorithm-CRC-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

</div>

---

# 👥 Team Members & Responsibilities

| Team Member | Responsibility |
|-------------|----------------|
| **Bashir** | **Project Lead & Documentation** – Coordinated the project, organized GitHub, prepared the README, integrated all modules, and managed the final submission. |
| **Namu** | **User Input Module** – Implemented binary data input, generator polynomial input, and input validation. |
| **Husein** | **CRC Generation Module** – Implemented XOR operations, Mod-2 division, CRC calculation, and codeword generation. |
| **Cevahir** | **Transmission Simulation Module** – Developed the transmission process and optional bit-flipping feature to simulate communication errors. |
| **Ali** | **CRC Verification & Testing** – Implemented receiver-side CRC verification, detected errors, performed testing, and verified program correctness. |

---

## 📌 Overview

CRC (Cyclic Redundancy Check) is one of the most widely used error detection techniques in digital communication and computer networks.

This project demonstrates how CRC generates a checksum, appends it to the original data, and verifies the received data to detect transmission errors.

---

## ✨ Features

- ✅ User enters binary data
- ✅ User enters generator polynomial
- ✅ Generates CRC checksum
- ✅ Creates transmitted codeword
- ✅ Simulates bit errors
- ✅ Detects transmission errors
- ✅ Displays verification result
# CRC Simulator

A Java-based CRC (Cyclic Redundancy Check) simulator project.

---

# Team Development Setup Guide

This guide explains how to set up the project locally and contribute using Git branches.

## Prerequisites

Before starting, make sure you have:

- Git installed
- IntelliJ IDEA/vscode/eclipse installed
- GitHub account with repository access

Check Git installation:

```bash
git --version
```

---

# 1. Clone the Repository

Open your terminal (IntelliJ Terminal, CMD, or PowerShell).

Clone the repository:

```bash
git clone https://github.com/Bash77/CRC-simulator.git
```

Move into the project folder:

```bash
cd CRC-simulator
```

---

# 2. Download the Latest Development Version

The team works on the `develop` branch.

Switch to the develop branch:

```bash
git checkout develop
```

Download the latest changes:

```bash
git pull origin develop
```

Now your local project contains the latest team version.

---

# 3. Open the Project in IntelliJ IDEA

1. Open IntelliJ IDEA.
2. Select:

```
File → Open
```

3. Choose:

```
CRC-simulator
```

4. Wait until IntelliJ finishes loading and indexing the project.

The project structure should look like:

```
CRC-simulator
│
├── src
│   └── crcsimulator
│       ├── Main.java
│       └── CRCAlgorithm.java
│
├── README.md
└── .gitignore
```

---

# 4. Understand the Project Structure

The project contains:

```
crcsimulator
│
├── Main.java
│
└── CRCAlgorithm.java
```

### Main.java

The entry point of the application.

Responsibilities:

- Start the program
- Call CRC methods
- Display results

---

### CRCAlgorithm.java

Contains the CRC implementation methods.

Each team member will implement their assigned method inside this class.

Example:

```java
public class CRCAlgorithm {

    public static String calculateCRC(String data, String generator) {
        // implementation
    }

    public static boolean validateInput(String input) {
        // implementation
    }

}
```

---

# 5. Create Your Feature Branch

Do not write code directly on `main` or `develop`.

Each member must create their own feature branch.

First make sure you are on develop:

```bash
git checkout develop
```

Update your branch:

```bash
git pull origin develop
```

Create your feature branch:

```bash
git checkout -b feature/task-name
```

---

## Branch Examples

### CRC Algorithm

```bash
git checkout -b feature/crc-algorithm
```

### Input Validation

```bash
git checkout -b feature/input-validation
```

### XOR Division

```bash
git checkout -b feature/xor-division
```

### Error Detection

```bash
git checkout -b feature/error-detection
```

---

# 6. Implement Your Assigned Task

Each member should:

1. Work only on their assigned method.
2. Avoid changing other team members' code.
3. Test their implementation before pushing.

Example:

```
CRCAlgorithm.java

calculateCRC()
        |
        |
    Bashir's task


validateInput()
        |
        |
    Namu's task
```

---

# 7. Save Your Changes

Check your changes:

```bash
git status
```

Add files:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Implement CRC calculation method"
```

---

# 8. Push Your Feature Branch

Push your branch to GitHub:

```bash
git push origin feature/task-name
```

Example:

```bash
git push origin feature/crc-algorithm
```

---

# 9. Create a Pull Request

After pushing:

1. Open GitHub repository.
2. Go to **Pull Requests**.
3. Click **New Pull Request**.
4. Select:

```
base branch: develop
compare branch: feature/your-task
```

5. Add a description.
6. Submit the Pull Request.

The team leader will review and merge it.

---

# 10. Update Your Project Before Starting New Work

Always update your local project:

```bash
git checkout develop
```

Pull the newest changes:

```bash
git pull origin develop
```

Create a new feature branch:

```bash
git checkout -b feature/new-task
```

---

# Team Git Workflow

```
                 main
                  |
                  |
              develop
                  |
        -------------------
        |        |        |
        |        |        |
 feature/crc  feature/input  feature/testing
        |        |        |
        -------------------
                  |
            Pull Request
                  |
              develop
```

---

# Contribution Rules

- Never push directly to `main`.
- Never push directly to `develop`.
- Always use a `feature/` branch.
- Keep commits clear and descriptive.
- Test your code before creating a Pull Request.
- Communicate with the team before modifying shared code.

---

# Team Tasks

| Member | Task | Branch |
|--------|------|--------|
| Bashir | CRC Algorithm Implementation | `feature/crc-algorithm` |
| Namu | Input Validation | `feature/input-validation` |
| Husein | XOR Division / Helper Methods | `feature/xor-division` |
| Cevahir | Error Detection and Testing | `feature/error-detection` |
| Ali | Documentation and Project Support | `feature/documentation` |

---

Following this workflow keeps the project organized and allows everyone to work together safely.
