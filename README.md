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

---
                                  # 🏗 Code Logic Diagram
                                                   
                           +--------------------------------+
                           |            CRC.java            |
                           +--------------------------------+
                                        |
                                        |
                                        ▼
                           +-----------------------------+
                           |         main()              |
                           +-----------------------------+
                           | • Read binary data          |
                           | • Read generator polynomial |
                           | • Call CRC generation       |
                           | • Simulate transmission     |
                           | • Verify received data      |
                           +-------------+---------------+
                                         |
                    +--------------------+---------------------+
                    |                                          |
                    ▼                                          ▼
        +---------------------------+             +---------------------------+
        |      mod2div()            |             |   Simulate Bit Error      |
        +---------------------------+             +---------------------------+
        | Performs Mod-2 Division   |             | Flip selected bit (0 ↔ 1) |
        | Calculates CRC remainder  |             | Return corrupted data     |
        +-------------+-------------+             +-------------+-------------+
                      |                                           |
                      ▼                                           |
        +---------------------------+                             |
        |         xor()             |                             |
        +---------------------------+                             |
        | Performs XOR operation    |                             |
        | between dividend/divisor  |                             |
        +-------------+-------------+                             |
                      |                                           |
                      +-------------------+-----------------------+
                                          |
                                          ▼
                           +-----------------------------+
                           | Generate Codeword           |
                           | data + CRC remainder        |
                           +-------------+---------------+
                                         |
                                         ▼
                           +-----------------------------+
                           | Verify Received Data        |
                           | Call mod2div() again        |
                           +-------------+---------------+
                                         |
                                         ▼
                           +-----------------------------+
                           | Is remainder all zeros?     |
                           +-------------+---------------+
                                         |
                          +--------------+--------------+
                          |                             |
                          ▼                             ▼
                +--------------------+       +----------------------+
                |    Data Correct    |       |   Error Detected     |
                +--------------------+       +----------------------+
```


```

---

## 🧮 Example

```
Original Data        : 1101011011
Generator Polynomial : 10011

↓

Append 4 Zeros

11010110110000

↓

CRC = 1110

↓

Final Codeword

11010110111110
```

---

## 💻 Example Output

```text
Enter Data:
1101011011

Enter Generator Polynomial:
10011

CRC = 1110

Codeword = 11010110111110

Create Bit Error? (Y/N): Y

Bit Position: 5

Corrupted Data = 11010010111110

Result:
Error Detected.
```

---

## 🛠 Technologies

- Java
- Scanner
- XOR Operation
- Mod-2 Binary Division
- Object-Oriented Programming

---

## 🚀 How to Run

```bash
javac CRC.java
java CRC
```

 
## 📚 Learning Outcomes

This project demonstrates:

- CRC Error Detection
- Binary Arithmetic
- XOR Operations
- Polynomial Division
- Error Detection in Computer Networks
- Java Console Programming

---

<div align="center">

### ⭐ Computer Networks Project

**CRC (Cyclic Redundancy Check) Implementation in Java**

Developed as a collaborative university project.

</div>
