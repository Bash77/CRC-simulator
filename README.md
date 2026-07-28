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
