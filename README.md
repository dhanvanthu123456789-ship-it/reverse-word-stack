# REVERSE A WORD USING STACK
### Data Structures Mini Project — Academic Laboratory Submission

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=white)](https://en.wikipedia.org/wiki/C_(programming_language))
[![Data Structures](https://img.shields.io/badge/Subject-Data%20Structures%20(DS)-8b5cf6?style=flat-square)](#student-credentials)
[![License: MIT](https://img.shields.io/badge/License-MIT-00f0ff?style=flat-square)](LICENSE)

---

## 👨‍🎓 Student Credentials
* **Student Name:** Devamani T
* **Register Number:** `RA2511003040024`
* **Subject:** Data Structures (DS)
* **Mini Project Title:** Reverse a Word Using Stack
* **Core Concept:** LIFO (Last In, First Out) Principle
* **Academic Submission:** Internal Assessment Mini Project

---

## 📌 Project Overview
**Reverse a Word Using Stack** is an educational, interactive web application and robust C99 program designed to demonstrate the fundamental operations, memory mechanics, and asymptotic complexity of the **Stack** data structure.

The project visualizes how characters of an input word are sequentially pushed onto a linear array stack and then popped in reverse order, clearly proving the **LIFO (Last In, First Out)** paradigm in real-time.

---

## 🎯 Project Objectives
1. **Understand LIFO:** Provide a concrete, visible demonstration of the Last In, First Out property.
2. **Interactive Algorithm Learning:** Help computer science students and educators visualize stack memory states, top pointer tracking, and array index changes.
3. **Dual Implementation:** Bridge theoretical algorithms with practical software engineering by offering both an interactive HTML5/CSS3/JavaScript visualizer and a compilable C source code implementation.
4. **Comprehensive Analysis:** Showcase time complexity ($\mathcal{O}(n)$), space complexity ($\mathcal{O}(n)$), and boundary condition handling (Overflow & Underflow).

---

## ✨ Key Features & Functionalities

### 1. Interactive Stack Visualizer
* **Custom & Preset Inputs:** Test any arbitrary word or choose from built-in presets (`DATA`, `HELLO`, `STACK`, `RACECAR`, `ALGORITHM`, `COLLEGE`, `LIFO`).
* **Animated Stack Bucket:** Open cylinder graphic simulating physical stack cells with array indices `[0..MAX]`.
* **Dynamic TOP Pointer:** Animated glowing arrow and index badge tracking the stack's top position (`top = -1` when empty up to `top = n - 1`).
* **Push & Pop Animations:** Watch individual characters drop into the stack during the Push phase and pop out into the reversed word buffer during the Pop phase.
* **Control Controls:** Play, Pause, Step-by-Step execution (ideal for viva demonstrations), Reset, and variable Speed control (`0.5x` to `2.5x`).
* **Web Audio API Feedback:** Synthesized sound effects providing audible feedback for push, pop, and completion.
* **Live Action Console:** Terminal log recording timestamped micro-operations in real time.

### 2. Embedded C Source Code Section
* **Zero External Redirects:** Complete, compilable C program viewable directly on the webpage.
* **Syntax Highlighting & Line Numbers:** Formatted in JetBrains Mono with color-coded syntax.
* **Actions:** One-click "Copy Code" button and "Download C File" button.
* **In-Browser Terminal Simulator:** Allows students and evaluators to simulate the C compiler standard input/output directly in the browser.

### 3. Step-by-Step Trace Table
* Dynamically generates an academic execution table showing state transitions at every tick:
  $$\text{Step \#} \quad|\quad \text{Operation} \quad|\quad \text{Character} \quad|\quad \text{Stack Content [Top} \to \text{Base]} \quad|\quad \text{Top Index} \quad|\quad \text{Output Buffer}$$

### 4. Working Demonstration (Benchmark)
* **Input Word:** `DATA`
* **Stack Push Sequence:** `D` $\to$ `A` $\to$ `T` $\to$ `A`
* **Stack Pop Sequence:** `A` $\to$ `T` $\to$ `A` $\to$ `D`
* **Reversed Output:** `ATAD`

---

## 🛠️ Technologies & Tools Used
* **Frontend Web Application:**
  * **HTML5:** Semantic architecture, accessible form controls, modal dialogs.
  * **CSS3:** Custom properties (CSS variables), modern glassmorphism (`backdrop-filter`), CSS Grid & Flexbox, keyframe animations.
  * **JavaScript (ES6+):** Pure vanilla JavaScript, state machine animation engine, dynamic DOM rendering, Web Audio API synthesizer.
* **Backend / Systems Implementation:**
  * **C (C99 Standard):** Standard library functions (`stdio.h`, `stdlib.h`, `string.h`, `stdbool.h`).
* **Fonts & Design:**
  * **Outfit:** Primary display and headings typography.
  * **JetBrains Mono:** Code, trace tables, memory addresses, and terminal font.

---

## 📁 Project Folder Structure
```text
reverse-word-stack/
├── index.html         # Main web application entry point
├── styles.css         # Dark obsidian theme & glassmorphic styles
├── script.js          # Interactive stack animation engine & audio synthesizer
├── reverse_stack.c    # Complete, compilable C source code
├── server.ps1         # Lightweight local development HTTP server
├── .gitignore         # Excludes build binaries, temporary & OS files
└── README.md          # Comprehensive documentation & lab submission guide
```

---

## 🚀 Installation & Local Setup

### Method 1: Direct File Opening (No Installation Required)
Simply double-click `index.html` or open it in any web browser:
```text
Double click 'index.html' -> Opens in Google Chrome / Microsoft Edge / Firefox
```

### Method 2: Running with Local Development Server
To run the project on a local HTTP server at `http://localhost:5500`:

#### Using PowerShell (Built-in script):
```powershell
powershell -ExecutionPolicy Bypass -File server.ps1 -Port 5500
```
Then navigate to: **[http://localhost:5500](http://localhost:5500)**

#### Using Python 3:
```bash
python -m http.server 5500
```

#### Using Node.js (npx):
```bash
npx serve -l 5500
```

---

## 💻 Compiling & Running the C Implementation Locally

You can compile and run `reverse_stack.c` with GCC, Clang, or MSVC:

### Using GCC:
```bash
gcc -Wall -Wextra -O2 reverse_stack.c -o reverse_stack
./reverse_stack
```

### Sample Output:
```text
========================================================
          REVERSE A WORD USING STACK IN C               
             Data Structures Mini Project               
========================================================
 Student Name  : Devamani T
 Register No   : RA2511003040024
 Subject       : Data Structures (DS)
 Principle     : LIFO (Last-In, First-Out)
========================================================

Enter a word to reverse: DATA

Original Input Word : "DATA"
Length of Word      : 4 character(s)

--- PUSH PHASE (Characters entered into Stack) ---
Pushed 'D' -> Stack top index: 0
Pushed 'A' -> Stack top index: 1
Pushed 'T' -> Stack top index: 2
Pushed 'A' -> Stack top index: 3

Stack snapshot before popping:
Current Stack state [Top -> Bottom]: | A | T | A | D |

--- POP PHASE (LIFO Extraction to Reverse Word) ---
Popped 'A' -> Placed at reversed[0]
Popped 'T' -> Placed at reversed[1]
Popped 'A' -> Placed at reversed[2]
Popped 'D' -> Placed at reversed[3]

========================================================
                 EXECUTION RESULT                       
========================================================
Original Word : DATA
Reversed Word : ATAD
Verification  : Successfully reversed using Stack LIFO!
========================================================
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :---: | :--- |
| **Time Complexity (Push Phase)** | $\mathcal{O}(n)$ | Pushing $n$ characters into the stack one-by-one, each in $\mathcal{O}(1)$ time. |
| **Time Complexity (Pop Phase)** | $\mathcal{O}(n)$ | Popping $n$ characters off the stack top, each in $\mathcal{O}(1)$ time. |
| **Total Time Complexity** | $\mathcal{O}(n)$ | $2n$ total atomic operations $\in \mathcal{O}(n)$. |
| **Auxiliary Space Complexity** | $\mathcal{O}(n)$ | Stack array of size $n$ allocated to hold input characters in memory. |
| **Data Structure** | **Stack** | Linear data structure with LIFO access discipline. |

---

## 🎓 Viva Voce Questions & Answers
1. **What is a Stack data structure?**
   * *Answer:* A Stack is a linear data structure following the LIFO (Last In, First Out) principle where insertion and deletion occur exclusively at a single end known as `top`.
2. **What are the primary stack operations and their time complexities?**
   * *Answer:* `push()` inserts an element ($\mathcal{O}(1)$), `pop()` removes and returns the top element ($\mathcal{O}(1)$), `peek()` inspects the top element ($\mathcal{O}(1)$), `isEmpty()` / `isFull()` check boundary conditions ($\mathcal{O}(1)$).
3. **What is Stack Overflow and Stack Underflow?**
   * *Answer:* 
     * **Overflow:** Occurs when attempting to push onto a full stack (`top == MAX - 1`).
     * **Underflow:** Occurs when attempting to pop from an empty stack (`top == -1`).
4. **Why is Stack ideal for reversing a string?**
   * *Answer:* When characters are pushed in chronological order ($0 \dots n-1$), the first character resides at the stack bottom and the last character is at the stack top. Popping extracts elements in exact reverse order without requiring index swaps.

---

## 📜 Submission & Author
* **Project Author:** Devamani T
* **Register Number:** RA2511003040024
* **Course:** Data Structures (DS) Mini Project
* **GitHub Profile:** [https://github.com/dhanvanthu123456789-ship-it](https://github.com/dhanvanthu123456789-ship-it)
