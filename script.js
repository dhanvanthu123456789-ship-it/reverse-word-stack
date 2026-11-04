/**
 * ============================================================================
 * REVERSE A WORD USING STACK - INTERACTIVE ENGINE
 * Student: Devamani T | Reg No: RA2511003040024 | Subject: Data Structures (DS)
 * ============================================================================
 */

(function () {
  'use strict';

  // --- AUDIO SYNTHESIZER (Web Audio API) ---
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freqStart, freqEnd, type, duration, gainLevel = 0.15) {
      if (!this.enabled) return;
      try {
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freqEnd, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.warn('Audio playback not allowed or supported', e);
      }
    }

    playPush() {
      // Crisp rising technological blip
      this.playTone(320, 680, 'sine', 0.18, 0.2);
    }

    playPop() {
      // Crisp descending swoosh pop
      this.playTone(640, 260, 'triangle', 0.18, 0.22);
    }

    playReset() {
      this.playTone(400, 200, 'sine', 0.12, 0.15);
    }

    playSuccess() {
      if (!this.enabled) return;
      const notes = [440, 554.37, 659.25, 880]; // A major chord arpeggio
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, freq * 1.05, 'sine', 0.28, 0.15);
        }, idx * 90);
      });
    }

    playError() {
      this.playTone(180, 110, 'sawtooth', 0.25, 0.25);
    }
  }

  const sound = new SoundEngine();

  // --- EMBEDDED C SOURCE CODE ---
  const RAW_C_CODE = `/**
 * ============================================================================
 * DATA STRUCTURES MINI PROJECT
 * PROJECT TITLE : REVERSE A WORD USING STACK
 * ============================================================================
 * Student Name  : Devamani T
 * Register No   : RA2511003040024
 * Subject       : Data Structures (DS)
 * Core Concept  : LIFO (Last In, First Out) Principle
 * Implementation: Array-based Stack
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX 100

/* Global Stack declaration using an array */
char stack[MAX];
int top = -1;

/* Function Declarations */
bool isFull(void);
bool isEmpty(void);
void push(char ch);
char pop(void);
char peek(void);
void display(void);
void reverseWord(char str[], char reversed[]);

/**
 * Checks if the stack has reached maximum capacity.
 * Time Complexity: O(1)
 */
bool isFull(void) {
    return top == (MAX - 1);
}

/**
 * Checks if the stack is completely empty.
 * Time Complexity: O(1)
 */
bool isEmpty(void) {
    return top == -1;
}

/**
 * Pushes a character onto the top of the stack.
 * Handles Stack Overflow error condition.
 * Time Complexity: O(1)
 */
void push(char ch) {
    if (isFull()) {
        printf("[ERROR] Stack Overflow! Cannot push '%c'. Capacity limit reached (%d).\\n", ch, MAX);
        return;
    }
    top++;
    stack[top] = ch;
}

/**
 * Pops and returns the topmost character from the stack.
 * Handles Stack Underflow error condition.
 * Time Complexity: O(1)
 */
char pop(void) {
    if (isEmpty()) {
        printf("[ERROR] Stack Underflow! Attempted to pop from an empty stack.\\n");
        return '\\0';
    }
    char poppedChar = stack[top];
    top--;
    return poppedChar;
}

/**
 * Returns the element currently at the top of the stack without removing it.
 * Time Complexity: O(1)
 */
char peek(void) {
    if (isEmpty()) {
        return '\\0';
    }
    return stack[top];
}

/**
 * Displays the current elements present in the stack from top to bottom.
 * Time Complexity: O(n)
 */
void display(void) {
    if (isEmpty()) {
        printf("Stack is currently EMPTY (top = -1)\\n");
        return;
    }
    printf("Current Stack state [Top -> Bottom]: ");
    for (int i = top; i >= 0; i--) {
        printf("| %c ", stack[i]);
    }
    printf("|\\n");
}

/**
 * Reverses a string using the LIFO (Last-In, First-Out) property of the stack.
 * Phase 1: Push every character of the string onto the stack.
 * Phase 2: Pop each character off the stack and write to the output string.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
void reverseWord(char str[], char reversed[]) {
    int len = strlen(str);
    top = -1; // Reset stack top

    printf("\\n--- PUSH PHASE (Characters entered into Stack) ---\\n");
    for (int i = 0; i < len; i++) {
        push(str[i]);
        printf("Pushed '%c' -> Stack top index: %d\\n", str[i], top);
    }

    printf("\\nStack snapshot before popping:\\n");
    display();

    printf("\\n--- POP PHASE (LIFO Extraction to Reverse Word) ---\\n");
    int k = 0;
    while (!isEmpty()) {
        char ch = pop();
        reversed[k++] = ch;
        printf("Popped '%c' -> Placed at reversed[%d]\\n", ch, k - 1);
    }
    reversed[k] = '\\0'; // Null terminate the reversed string
}

/**
 * Main execution function demonstrating word reversal with interactive input.
 */
int main(void) {
    char inputWord[MAX];
    char reversedWord[MAX];

    printf("========================================================\\n");
    printf("          REVERSE A WORD USING STACK IN C               \\n");
    printf("             Data Structures Mini Project               \\n");
    printf("========================================================\\n");
    printf(" Student Name  : Devamani T\\n");
    printf(" Register No   : RA2511003040024\\n");
    printf(" Subject       : Data Structures (DS)\\n");
    printf(" Principle     : LIFO (Last-In, First-Out)\\n");
    printf("========================================================\\n\\n");

    printf("Enter a word to reverse: ");
    if (fgets(inputWord, sizeof(inputWord), stdin) != NULL) {
        // Remove trailing newline character if present
        size_t len = strlen(inputWord);
        if (len > 0 && inputWord[len - 1] == '\\n') {
            inputWord[len - 1] = '\\0';
        }
    }

    if (strlen(inputWord) == 0) {
        printf("[WARNING] No input provided. Using default word: 'DATA'\\n");
        strcpy(inputWord, "DATA");
    }

    printf("\\nOriginal Input Word : \\"%s\\"\\n", inputWord);
    printf("Length of Word      : %zu character(s)\\n", strlen(inputWord));

    // Perform word reversal using Stack
    reverseWord(inputWord, reversedWord);

    printf("\\n========================================================\\n");
    printf("                 EXECUTION RESULT                       \\n");
    printf("========================================================\\n");
    printf("Original Word : %s\\n", inputWord);
    printf("Reversed Word : %s\\n", reversedWord);
    printf("Verification  : Successfully reversed using Stack LIFO!\\n");
    printf("========================================================\\n");

    return 0;
}`;

  // --- APPLICATION STATE ---
  const state = {
    inputWord: 'HELLO',
    stack: [],
    reversedWord: '',
    topIndex: -1,
    maxCapacity: 10,
    status: 'IDLE', // IDLE, PUSHING, POPPING, PAUSED, COMPLETED
    speedFactor: 1.0,
    isPaused: false,
    timer: null,
    stepIndex: 0,
    totalSteps: 0,
    actionsQueue: [], // generated list of atomic animation steps
    queuePointer: 0
  };

  // --- DOM ELEMENT REFERENCES ---
  const el = {
    wordInput: document.getElementById('word-input'),
    btnReverse: document.getElementById('btn-reverse'),
    btnPlayPause: document.getElementById('btn-play-pause'),
    btnStep: document.getElementById('btn-step'),
    btnReset: document.getElementById('btn-reset'),
    speedSlider: document.getElementById('speed-slider'),
    speedVal: document.getElementById('speed-val'),
    presetChips: document.querySelectorAll('.chip-btn'),

    inputTape: document.getElementById('input-tape'),
    outputTape: document.getElementById('output-tape'),
    stackBucket: document.getElementById('stack-bucket'),
    topPointer: document.getElementById('top-pointer'),
    topPointerVal: document.getElementById('top-pointer-val'),
    stackStatusDot: document.getElementById('stack-status-dot'),
    stackStatusText: document.getElementById('stack-status-text'),
    stackCountBadge: document.getElementById('stack-count-badge'),

    consoleOutput: document.getElementById('console-output'),
    lifoCalloutText: document.getElementById('lifo-callout-text'),
    stepProgressText: document.getElementById('step-progress-text'),
    stepProgressBar: document.getElementById('step-progress-bar'),

    traceTableBody: document.getElementById('trace-table-body'),
    traceWordLabel: document.getElementById('trace-word-label'),

    // Code & Modal
    btnViewCode: document.getElementById('btn-view-code'),
    btnViewCodeNav: document.getElementById('btn-view-code-nav'),
    codeModal: document.getElementById('code-modal'),
    btnCloseModal: document.getElementById('btn-close-modal'),
    btnModalCloseFooter: document.getElementById('btn-modal-close-footer'),
    btnCopyCode: document.getElementById('btn-copy-code'),
    btnCopyCodeModal: document.getElementById('btn-copy-code-modal'),
    btnDownloadC: document.getElementById('btn-download-c'),
    btnDownloadCModal: document.getElementById('btn-download-c-modal'),
    inlineCodeContainer: document.getElementById('inline-code-container'),
    modalCodeContainer: document.getElementById('modal-code-container'),

    // Terminal Simulator
    terminalInput: document.getElementById('terminal-input'),
    btnRunTerminal: document.getElementById('btn-run-terminal'),
    terminalOutput: document.getElementById('terminal-output'),

    // Sound toggle
    btnSoundToggle: document.getElementById('btn-sound-toggle'),
    soundIconOn: document.getElementById('sound-icon-on'),
    soundIconOff: document.getElementById('sound-icon-off'),

    // Toast Container
    toastContainer: document.getElementById('toast-container')
  };

  // --- INITIALIZATION ---
  function init() {
    setupCodeHighlighter();
    setupEventListeners();
    setPresetWord('HELLO');
    renderTraceTable('HELLO');
  }

  // --- SYNTAX HIGHLIGHTER FOR C ---
  function formatCCode(code) {
    const lines = code.split('\n');
    let html = '<table class="code-table"><tbody>';

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      let highlighted = escapeHtml(line);

      // Preprocessor directives
      if (highlighted.trim().startsWith('#')) {
        highlighted = highlighted.replace(/(#include|#define)/g, '<span class="tok-preprocessor">$1</span>');
        highlighted = highlighted.replace(/(&lt;[a-zA-Z0-9_\.]+&gt;)/g, '<span class="tok-string">$1</span>');
      } else {
        // Multi-line / Single line comment checks
        if (highlighted.trim().startsWith('//') || highlighted.trim().startsWith('/*') || highlighted.trim().startsWith('*')) {
          highlighted = `<span class="tok-comment">${highlighted}</span>`;
        } else {
          // Strings
          highlighted = highlighted.replace(/(".*?")/g, '<span class="tok-string">$1</span>');
          highlighted = highlighted.replace(/('.*?')/g, '<span class="tok-string">$1</span>');

          // Keywords & Types
          const keywords = ['return', 'if', 'else', 'while', 'for', 'void', 'int', 'char', 'bool', 'true', 'false', 'sizeof', 'size_t', 'struct'];
          keywords.forEach(kw => {
            const regex = new RegExp(`\\b(${kw})\\b`, 'g');
            const className = (kw === 'void' || kw === 'int' || kw === 'char' || kw === 'bool' || kw === 'size_t' || kw === 'struct') ? 'tok-type' : 'tok-keyword';
            highlighted = highlighted.replace(regex, `<span class="${className}">$1</span>`);
          });

          // Functions
          highlighted = highlighted.replace(/\b(printf|strlen|strcpy|fgets|isFull|isEmpty|push|pop|peek|display|reverseWord|main)\b(?=\s*\()/g, '<span class="tok-func">$1</span>');

          // Numbers
          highlighted = highlighted.replace(/\b(\d+)\b/g, '<span class="tok-number">$1</span>');

          // Operators
          highlighted = highlighted.replace(/([=!+\-*\/&|<>]+)/g, '<span class="tok-operator">$1</span>');
        }
      }

      html += `<tr><td class="line-num">${lineNum}</td><td class="line-code">${highlighted || ' '}</td></tr>`;
    });

    html += '</tbody></table>';
    return html;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function setupCodeHighlighter() {
    const formatted = formatCCode(RAW_C_CODE);
    if (el.inlineCodeContainer) el.inlineCodeContainer.innerHTML = formatted;
    if (el.modalCodeContainer) el.modalCodeContainer.innerHTML = formatted;
  }

  // --- TOAST NOTIFICATION ---
  function showToast(message, icon = '✓') {
    if (!el.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span style="color: #10b981; font-weight: bold;">${icon}</span> <span>${message}</span>`;
    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // --- CONSOLE LOGGER ---
  function logConsole(message, type = '') {
    if (!el.consoleOutput) return;
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');

    const entry = document.createElement('div');
    entry.className = 'console-entry';
    entry.innerHTML = `<span class="console-time">[${timeStr}]</span> <span class="console-msg ${type}">${message}</span>`;

    el.consoleOutput.prepend(entry);
  }

  // --- TOP POINTER POSITION CALCULATOR ---
  function updateTopPointer(topIndex) {
    state.topIndex = topIndex;
    if (!el.topPointer || !el.topPointerVal) return;

    if (topIndex === -1) {
      el.topPointerVal.textContent = 'TOP = -1 (EMPTY)';
      el.topPointer.style.bottom = '15px';
      el.topPointer.classList.remove('active');
    } else {
      el.topPointerVal.textContent = `TOP = [${topIndex}]`;
      // Stack items have height 44px + 8px gap = 52px each
      // base offset 25px
      const bottomOffset = 25 + (topIndex * 52);
      el.topPointer.style.bottom = `${bottomOffset}px`;
      el.topPointer.classList.add('active');
    }

    if (el.stackCountBadge) {
      el.stackCountBadge.textContent = `${state.stack.length} / ${state.maxCapacity} items`;
    }
  }

  // --- TAPE RENDERING ---
  function renderInputTape(word, activeIndex = -1) {
    if (!el.inputTape) return;
    el.inputTape.innerHTML = '';

    if (!word) {
      el.inputTape.innerHTML = '<span style="color: var(--text-muted); font-size: 0.85rem;">(Enter word above)</span>';
      return;
    }

    for (let i = 0; i < word.length; i++) {
      const cell = document.createElement('div');
      cell.className = 'char-cell';
      cell.id = `input-cell-${i}`;

      if (i < activeIndex) {
        cell.classList.add('processed');
      } else if (i === activeIndex) {
        cell.classList.add('active-reading');
      }

      cell.innerHTML = `
        <span class="cell-char">${word[i]}</span>
        <span class="cell-idx">[${i}]</span>
      `;
      el.inputTape.appendChild(cell);
    }
  }

  function renderOutputTape(reversedStr, newlyAdded = false) {
    if (!el.outputTape) return;
    el.outputTape.innerHTML = '';

    if (!reversedStr) {
      el.outputTape.innerHTML = '<span style="color: var(--text-muted); font-size: 0.85rem; font-style: italic;">(Awaiting popped characters...)</span>';
      return;
    }

    for (let i = 0; i < reversedStr.length; i++) {
      const cell = document.createElement('div');
      cell.className = 'char-cell';

      if (newlyAdded && i === reversedStr.length - 1) {
        cell.classList.add('newly-added');
      }

      cell.innerHTML = `
        <span class="cell-char" style="color: #38bdf8;">${reversedStr[i]}</span>
        <span class="cell-idx">[${i}]</span>
      `;
      el.outputTape.appendChild(cell);
    }
  }

  // --- STACK BUCKET RENDERING ---
  function renderStackBucket() {
    if (!el.stackBucket) return;
    el.stackBucket.innerHTML = '';

    if (state.stack.length === 0) {
      const notice = document.createElement('div');
      notice.className = 'stack-empty-notice';
      notice.innerHTML = 'STACK IS EMPTY<br><span style="font-size: 0.65rem; color: #475569;">top = -1</span>';
      el.stackBucket.appendChild(notice);
      return;
    }

    state.stack.forEach((item, idx) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'stack-item';
      if (idx === state.stack.length - 1) {
        itemEl.classList.add('top-item');
      }

      itemEl.innerHTML = `
        <span class="item-char">${item.char}</span>
        <span class="item-idx">index [${idx}]</span>
      `;
      el.stackBucket.appendChild(itemEl);
    });
  }

  // --- COMPILE ATOMIC ACTION QUEUE ---
  function buildActionsQueue(word) {
    const queue = [];
    const len = word.length;

    // Phase 1: PUSH operations
    for (let i = 0; i < len; i++) {
      queue.push({
        phase: 'PUSH',
        char: word[i],
        inputIndex: i,
        topIndex: i,
        stepNumber: i + 1,
        description: `Push character '${word[i]}' at input[${i}] onto stack. Top increments to ${i}.`
      });
    }

    // Intermission transition
    queue.push({
      phase: 'TRANSITION',
      description: `All ${len} characters pushed. Stack is full for this word. Initiating LIFO pop phase.`
    });

    // Phase 2: POP operations
    for (let i = len - 1; i >= 0; i--) {
      const popIdx = len - 1 - i;
      queue.push({
        phase: 'POP',
        char: word[i],
        stackIndex: i,
        outputIndex: popIdx,
        topIndexAfter: i - 1,
        stepNumber: len + 1 + popIdx,
        description: `Pop character '${word[i]}' from stack top [${i}]. Append to reversed string index [${popIdx}].`
      });
    }

    queue.push({
      phase: 'COMPLETE',
      description: `Word reversal successfully finished! Original: "${word}" → Reversed: "${word.split('').reverse().join('')}".`
    });

    return queue;
  }

  // --- STEP EXECUTION ---
  function executeNextStep() {
    if (state.queuePointer >= state.actionsQueue.length) {
      finishAnimation();
      return;
    }

    const action = state.actionsQueue[state.queuePointer];
    state.stepIndex++;

    // Update progress ribbon
    updateProgress(state.queuePointer + 1, state.actionsQueue.length, action.phase);

    if (action.phase === 'PUSH') {
      setStackStatus('pushing', `PUSHING: '${action.char}'`);
      sound.playPush();

      // Highlight input cell
      renderInputTape(state.inputWord, action.inputIndex);

      // Push onto internal stack
      state.stack.push({ char: action.char, index: action.topIndex });
      renderStackBucket();
      updateTopPointer(action.topIndex);

      // Explain LIFO
      if (el.lifoCalloutText) {
        el.lifoCalloutText.innerHTML = `<strong>PUSH Phase:</strong> Storing <code>'${action.char}'</code> at memory cell <code>[${action.topIndex}]</code>. Notice how it stacks directly on top of previous letters!`;
      }

      logConsole(`PUSH('${action.char}') → stack[${action.topIndex}]. Top = ${action.topIndex}`, 'push');

    } else if (action.phase === 'TRANSITION') {
      setStackStatus('pushing', 'PUSH PHASE COMPLETED');
      if (el.lifoCalloutText) {
        el.lifoCalloutText.innerHTML = `<strong>Peak Stack Height:</strong> All letters are now loaded. According to <em>LIFO (Last In, First Out)</em>, the character at <code>top</code> will be extracted first!`;
      }
      logConsole(action.description, 'push');

    } else if (action.phase === 'POP') {
      setStackStatus('popping', `POPPING: '${action.char}'`);
      sound.playPop();

      // Highlight topmost item popped
      const poppedItem = state.stack.pop();
      renderStackBucket();
      updateTopPointer(action.topIndexAfter);

      // Append to reversed word
      state.reversedWord += action.char;
      renderOutputTape(state.reversedWord, true);

      // Explain LIFO
      if (el.lifoCalloutText) {
        el.lifoCalloutText.innerHTML = `<strong>LIFO in action:</strong> <code>'${action.char}'</code> was at index <code>[${action.stackIndex}]</code>. Popping it leaves the stack top at <code>${action.topIndexAfter}</code>. It now enters reversed word index <code>[${action.outputIndex}]</code>.`;
      }

      logConsole(`POP() → '${action.char}'. Appended to output[${action.outputIndex}]. Top = ${action.topIndexAfter}`, 'pop');

    } else if (action.phase === 'COMPLETE') {
      finishAnimation();
      return;
    }

    state.queuePointer++;

    // If auto playing, schedule next
    if (state.status === 'PUSHING' || state.status === 'POPPING') {
      const delay = Math.max(250, 950 / state.speedFactor);
      state.timer = setTimeout(executeNextStep, delay);
    }
  }

  function finishAnimation() {
    clearTimeout(state.timer);
    state.status = 'COMPLETED';
    setStackStatus('completed', 'REVERSAL COMPLETED');
    sound.playSuccess();

    if (el.btnPlayPause) {
      el.btnPlayPause.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Play';
      el.btnPlayPause.disabled = true;
    }

    if (el.btnStep) el.btnStep.disabled = true;

    if (el.lifoCalloutText) {
      el.lifoCalloutText.innerHTML = `🎉 <strong>Success!</strong> LIFO property inverted the sequence perfectly. The last character entered was the very first to emerge!`;
    }

    logConsole(`REVERSAL COMPLETE: "${state.inputWord}" → "${state.reversedWord}"`, 'complete');
    showToast(`Word successfully reversed to "${state.reversedWord}"!`, '🎉');
  }

  function updateProgress(current, total, phase) {
    if (el.stepProgressText) {
      el.stepProgressText.textContent = `Step ${current} of ${total} (${phase})`;
    }
    if (el.stepProgressBar) {
      const pct = Math.round((current / total) * 100);
      el.stepProgressBar.style.width = `${pct}%`;
    }
  }

  function setStackStatus(stateClass, labelText) {
    if (!el.stackStatusDot || !el.stackStatusText) return;
    el.stackStatusDot.className = `status-dot ${stateClass}`;
    el.stackStatusText.textContent = labelText;
  }

  // --- CONTROLLER ACTIONS ---
  function startReversal() {
    const rawVal = (el.wordInput ? el.wordInput.value : 'HELLO').trim();

    // Validate Input
    if (!rawVal) {
      sound.playError();
      showToast('Please enter a word to reverse!', '⚠️');
      if (el.wordInput) el.wordInput.focus();
      return;
    }

    // Only allow alphabets
    const cleanWord = rawVal.replace(/[^a-zA-Z]/g, '').toUpperCase();
    if (!cleanWord) {
      sound.playError();
      showToast('Please enter valid letters (A-Z) only.', '⚠️');
      return;
    }

    if (cleanWord.length > 10) {
      showToast('Maximum 10 characters recommended for visual fit.', 'ℹ️');
    }

    // Reset current state
    resetSimulation(false);

    state.inputWord = cleanWord;
    if (el.wordInput) el.wordInput.value = cleanWord;
    state.actionsQueue = buildActionsQueue(cleanWord);
    state.totalSteps = state.actionsQueue.length;
    state.queuePointer = 0;
    state.status = 'PUSHING';

    renderInputTape(cleanWord, 0);
    renderOutputTape('', false);
    renderTraceTable(cleanWord);

    if (el.btnPlayPause) {
      el.btnPlayPause.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause';
      el.btnPlayPause.disabled = false;
    }
    if (el.btnStep) el.btnStep.disabled = false;

    logConsole(`--- Initiating Reversal for "${cleanWord}" (Length: ${cleanWord.length}) ---`);
    executeNextStep();
  }

  function togglePlayPause() {
    if (state.status === 'COMPLETED' || state.actionsQueue.length === 0) {
      startReversal();
      return;
    }

    if (state.status === 'PUSHING' || state.status === 'POPPING') {
      // Pause
      clearTimeout(state.timer);
      state.status = 'PAUSED';
      setStackStatus('idle', 'PAUSED');
      if (el.btnPlayPause) {
        el.btnPlayPause.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Resume';
      }
      logConsole('Simulation paused by user');
    } else if (state.status === 'PAUSED') {
      // Resume
      const currentAction = state.actionsQueue[state.queuePointer];
      state.status = (currentAction && currentAction.phase === 'POP') ? 'POPPING' : 'PUSHING';
      if (el.btnPlayPause) {
        el.btnPlayPause.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause';
      }
      logConsole('Simulation resumed');
      executeNextStep();
    }
  }

  function stepForward() {
    // If not started yet, prepare queue
    if (state.actionsQueue.length === 0 || state.status === 'IDLE' || state.status === 'COMPLETED') {
      const rawVal = (el.wordInput ? el.wordInput.value : 'HELLO').trim().replace(/[^a-zA-Z]/g, '').toUpperCase() || 'HELLO';
      resetSimulation(false);
      state.inputWord = rawVal;
      state.actionsQueue = buildActionsQueue(rawVal);
      state.totalSteps = state.actionsQueue.length;
      state.queuePointer = 0;
      renderInputTape(rawVal, 0);
      renderTraceTable(rawVal);
    }

    // Pause auto timer
    clearTimeout(state.timer);
    state.status = 'PAUSED';
    if (el.btnPlayPause) {
      el.btnPlayPause.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Resume';
      el.btnPlayPause.disabled = false;
    }
    if (el.btnStep) el.btnStep.disabled = false;

    executeNextStep();
  }

  function resetSimulation(playSound = true) {
    clearTimeout(state.timer);
    state.stack = [];
    state.reversedWord = '';
    state.topIndex = -1;
    state.status = 'IDLE';
    state.stepIndex = 0;
    state.queuePointer = 0;
    state.actionsQueue = [];

    renderStackBucket();
    updateTopPointer(-1);
    renderInputTape(state.inputWord, -1);
    renderOutputTape('', false);
    setStackStatus('idle', 'READY');
    updateProgress(0, state.inputWord.length * 2, 'IDLE');

    if (el.btnPlayPause) {
      el.btnPlayPause.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Play';
      el.btnPlayPause.disabled = false;
    }
    if (el.btnStep) el.btnStep.disabled = false;

    if (el.lifoCalloutText) {
      el.lifoCalloutText.innerHTML = `Ready to reverse <strong>"${state.inputWord}"</strong>. Click <strong>Reverse Word</strong> or <strong>Step Forward</strong> to begin!`;
    }

    if (playSound) {
      sound.playReset();
      logConsole('Stack reset to initial empty state (top = -1)');
    }
  }

  function setPresetWord(word) {
    if (el.wordInput) {
      el.wordInput.value = word;
    }
    state.inputWord = word;

    el.presetChips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.word === word);
    });

    resetSimulation(false);
    renderInputTape(word, -1);
    renderTraceTable(word);
  }

  // --- TRACE TABLE GENERATOR ---
  function renderTraceTable(word) {
    if (!el.traceTableBody) return;
    el.traceTableBody.innerHTML = '';

    if (el.traceWordLabel) {
      el.traceWordLabel.textContent = `Execution Trace for: "${word}"`;
    }

    const tempStack = [];
    let reversed = '';
    let stepNum = 0;

    // Row 0: Initialization
    const initRow = document.createElement('tr');
    initRow.innerHTML = `
      <td>${stepNum}</td>
      <td><span class="op-badge op-init">INITIALIZE</span></td>
      <td>-</td>
      <td><code>[EMPTY]</code></td>
      <td><code>-1</code></td>
      <td><code>""</code></td>
    `;
    el.traceTableBody.appendChild(initRow);

    // Push Phase rows
    for (let i = 0; i < word.length; i++) {
      stepNum++;
      const ch = word[i];
      tempStack.push(ch);
      const row = document.createElement('tr');
      const stackRep = tempStack.slice().reverse().map(c => `| ${c} `).join('') + '|';

      row.innerHTML = `
        <td>${stepNum}</td>
        <td><span class="op-badge op-push">PUSH</span></td>
        <td><strong>'${ch}'</strong></td>
        <td><code>${stackRep}</code></td>
        <td><code>${tempStack.length - 1}</code></td>
        <td><code>"${reversed}"</code></td>
      `;
      el.traceTableBody.appendChild(row);
    }

    // Pop Phase rows
    for (let i = word.length - 1; i >= 0; i--) {
      stepNum++;
      const ch = tempStack.pop();
      reversed += ch;
      const row = document.createElement('tr');
      const stackRep = tempStack.length > 0
        ? tempStack.slice().reverse().map(c => `| ${c} `).join('') + '|'
        : '<code>[EMPTY]</code>';

      row.innerHTML = `
        <td>${stepNum}</td>
        <td><span class="op-badge op-pop">POP</span></td>
        <td><strong>'${ch}'</strong></td>
        <td><code>${stackRep}</code></td>
        <td><code>${tempStack.length - 1}</code></td>
        <td><strong style="color: var(--accent-emerald);">"${reversed}"</strong></td>
      `;
      el.traceTableBody.appendChild(row);
    }

    // Final row
    stepNum++;
    const finalRow = document.createElement('tr');
    finalRow.innerHTML = `
      <td>${stepNum}</td>
      <td><span class="op-badge op-done">TERMINATE</span></td>
      <td>-</td>
      <td><code>[EMPTY]</code></td>
      <td><code>-1</code></td>
      <td><strong style="color: #00f0ff; font-size: 1rem;">"${reversed}"</strong></td>
    `;
    el.traceTableBody.appendChild(finalRow);
  }

  // --- TERMINAL SIMULATOR ---
  function runTerminalSimulation() {
    if (!el.terminalInput || !el.terminalOutput) return;
    const testWord = (el.terminalInput.value || 'DATA').trim().replace(/[^a-zA-Z]/g, '').toUpperCase() || 'DATA';

    const output = [
      `$ gcc reverse_stack.c -o reverse_stack && ./reverse_stack`,
      `========================================================`,
      `          REVERSE A WORD USING STACK IN C               `,
      `             Data Structures Mini Project               `,
      `========================================================`,
      ` Student Name  : Devamani T`,
      ` Register No   : RA2511003040024`,
      ` Subject       : Data Structures (DS)`,
      ` Principle     : LIFO (Last-In, First-Out)`,
      `========================================================\n`,
      `Enter a word to reverse: ${testWord}`,
      `Original Input Word : "${testWord}"`,
      `Length of Word      : ${testWord.length} character(s)\n`,
      `--- PUSH PHASE (Characters entered into Stack) ---`
    ];

    const stackArr = [];
    for (let i = 0; i < testWord.length; i++) {
      stackArr.push(testWord[i]);
      output.push(`Pushed '${testWord[i]}' -> Stack top index: ${i}`);
    }

    output.push(`\nStack snapshot before popping:`);
    output.push(`Current Stack state [Top -> Bottom]: ` + stackArr.slice().reverse().map(c => `| ${c} `).join('') + `|`);

    output.push(`\n--- POP PHASE (LIFO Extraction to Reverse Word) ---`);
    let reversed = '';
    let k = 0;
    while (stackArr.length > 0) {
      const ch = stackArr.pop();
      reversed += ch;
      output.push(`Popped '${ch}' -> Placed at reversed[${k++}]`);
    }

    output.push(`\n========================================================`);
    output.push(`                 EXECUTION RESULT                       `);
    output.push(`========================================================`);
    output.push(`Original Word : ${testWord}`);
    output.push(`Reversed Word : ${reversed}`);
    output.push(`Verification  : Successfully reversed using Stack LIFO!`);
    output.push(`========================================================`);

    el.terminalOutput.textContent = output.join('\n');
    sound.playSuccess();
    showToast(`Compiled & Executed for "${testWord}"!`, '⚡');
  }

  // --- COPY & DOWNLOAD ACTIONS ---
  function copyCodeToClipboard() {
    navigator.clipboard.writeText(RAW_C_CODE).then(() => {
      showToast('C Source Code copied to clipboard!', '📋');
    }).catch(err => {
      console.error('Failed to copy', err);
      showToast('Copy failed. Please manually select and copy.', '⚠️');
    });
  }

  function downloadCFile() {
    const blob = new Blob([RAW_C_CODE], { type: 'text/x-c;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'reverse_stack.c');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Downloaded reverse_stack.c!', '💾');
  }

  // --- MODAL CONTROLS ---
  function openModal() {
    if (el.codeModal) {
      el.codeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (el.codeModal) {
      el.codeModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // --- SOUND TOGGLE ---
  function toggleSound() {
    sound.enabled = !sound.enabled;
    if (el.soundIconOn && el.soundIconOff) {
      el.soundIconOn.style.display = sound.enabled ? 'block' : 'none';
      el.soundIconOff.style.display = sound.enabled ? 'none' : 'block';
    }
    showToast(sound.enabled ? 'Audio feedback enabled' : 'Audio feedback muted', sound.enabled ? '🔊' : '🔇');
  }

  // --- SETUP EVENT LISTENERS ---
  function setupEventListeners() {
    // Primary Controls
    if (el.btnReverse) el.btnReverse.addEventListener('click', startReversal);
    if (el.btnPlayPause) el.btnPlayPause.addEventListener('click', togglePlayPause);
    if (el.btnStep) el.btnStep.addEventListener('click', stepForward);
    if (el.btnReset) el.btnReset.addEventListener('click', () => resetSimulation(true));

    // Input Keypress
    if (el.wordInput) {
      el.wordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          startReversal();
        }
      });
      el.wordInput.addEventListener('input', (e) => {
        // Sanitize to letters
        e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
      });
    }

    // Speed Slider
    if (el.speedSlider) {
      el.speedSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        state.speedFactor = val;
        if (el.speedVal) el.speedVal.textContent = `${val.toFixed(1)}x`;
      });
    }

    // Presets
    el.presetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const word = chip.dataset.word;
        if (word) setPresetWord(word);
      });
    });

    // Sound Toggle
    if (el.btnSoundToggle) {
      el.btnSoundToggle.addEventListener('click', toggleSound);
    }

    // View Code Modal Triggers
    if (el.btnViewCode) el.btnViewCode.addEventListener('click', openModal);
    if (el.btnViewCodeNav) el.btnViewCodeNav.addEventListener('click', openModal);
    if (el.btnCloseModal) el.btnCloseModal.addEventListener('click', closeModal);
    if (el.btnModalCloseFooter) el.btnModalCloseFooter.addEventListener('click', closeModal);

    if (el.codeModal) {
      el.codeModal.addEventListener('click', (e) => {
        if (e.target === el.codeModal) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && el.codeModal && el.codeModal.classList.contains('open')) {
        closeModal();
      }
    });

    // Copy & Download Buttons
    if (el.btnCopyCode) el.btnCopyCode.addEventListener('click', copyCodeToClipboard);
    if (el.btnCopyCodeModal) el.btnCopyCodeModal.addEventListener('click', copyCodeToClipboard);
    if (el.btnDownloadC) el.btnDownloadC.addEventListener('click', downloadCFile);
    if (el.btnDownloadCModal) el.btnDownloadCModal.addEventListener('click', downloadCFile);

    // Terminal Simulator
    if (el.btnRunTerminal) el.btnRunTerminal.addEventListener('click', runTerminalSimulation);
    if (el.terminalInput) {
      el.terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') runTerminalSimulation();
      });
    }

    // Navbar active links on scroll
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          if (navLink) navLink.classList.add('active');
        } else {
          if (navLink) navLink.classList.remove('active');
        }
      });
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
