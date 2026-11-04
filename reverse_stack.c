/**
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
        printf("[ERROR] Stack Overflow! Cannot push '%c'. Capacity limit reached (%d).\n", ch, MAX);
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
        printf("[ERROR] Stack Underflow! Attempted to pop from an empty stack.\n");
        return '\0';
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
        return '\0';
    }
    return stack[top];
}

/**
 * Displays the current elements present in the stack from top to bottom.
 * Time Complexity: O(n)
 */
void display(void) {
    if (isEmpty()) {
        printf("Stack is currently EMPTY (top = -1)\n");
        return;
    }
    printf("Current Stack state [Top -> Bottom]: ");
    for (int i = top; i >= 0; i--) {
        printf("| %c ", stack[i]);
    }
    printf("|\n");
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

    printf("\n--- PUSH PHASE (Characters entered into Stack) ---\n");
    for (int i = 0; i < len; i++) {
        push(str[i]);
        printf("Pushed '%c' -> Stack top index: %d\n", str[i], top);
    }

    printf("\nStack snapshot before popping:\n");
    display();

    printf("\n--- POP PHASE (LIFO Extraction to Reverse Word) ---\n");
    int k = 0;
    while (!isEmpty()) {
        char ch = pop();
        reversed[k++] = ch;
        printf("Popped '%c' -> Placed at reversed[%d]\n", ch, k - 1);
    }
    reversed[k] = '\0'; // Null terminate the reversed string
}

/**
 * Main execution function demonstrating word reversal with interactive input.
 */
int main(void) {
    char inputWord[MAX];
    char reversedWord[MAX];

    printf("========================================================\n");
    printf("          REVERSE A WORD USING STACK IN C               \n");
    printf("             Data Structures Mini Project               \n");
    printf("========================================================\n");
    printf(" Student Name  : Devamani T\n");
    printf(" Register No   : RA2511003040024\n");
    printf(" Subject       : Data Structures (DS)\n");
    printf(" Principle     : LIFO (Last-In, First-Out)\n");
    printf("========================================================\n\n");

    printf("Enter a word to reverse: ");
    if (fgets(inputWord, sizeof(inputWord), stdin) != NULL) {
        // Remove trailing newline character if present
        size_t len = strlen(inputWord);
        if (len > 0 && inputWord[len - 1] == '\n') {
            inputWord[len - 1] = '\0';
        }
    }

    if (strlen(inputWord) == 0) {
        printf("[WARNING] No input provided. Using default word: 'DATA'\n");
        strcpy(inputWord, "DATA");
    }

    printf("\nOriginal Input Word : \"%s\"\n", inputWord);
    printf("Length of Word      : %zu character(s)\n", strlen(inputWord));

    // Perform word reversal using Stack
    reverseWord(inputWord, reversedWord);

    printf("\n========================================================\n");
    printf("                 EXECUTION RESULT                       \n");
    printf("========================================================\n");
    printf("Original Word : %s\n", inputWord);
    printf("Reversed Word : %s\n", reversedWord);
    printf("Verification  : Successfully reversed using Stack LIFO!\n");
    printf("========================================================\n");

    return 0;
}
