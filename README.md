# Node.js CLI for Filtering and Counting Animals

## Project Description

This is a simple Node.js command-line application to filter and count animals within a nested data structure of countries, people, and animals.

- Filtering displays countries, people, and animals whose names contain a given pattern (case-insensitive).
- Counting adds the number of people and animals in brackets next to their names.

---

## Installation

Make sure you have Node.js installed.

Clone the repository and install dependencies :

```bash
git clone <repository-url>
cd <repository-folder>
npm install
```

---

## How to Run the App

### Filter animals by name

```bash
node app.js --filter=pattern
```

Filters the data and displays only:

- Countries with at least one person having animals matching the pattern
- People with at least one animal matching the pattern
- Animals whose name contains the pattern (case-insensitive)

Example:

```bash
node app.js --filter=ry
```

---

### Count animals and people

```bash
node app.js --count
```

Outputs the data with counts appended in the format:

- Country: number of people in brackets
- Person: number of animals in brackets

---

### Help / Invalid usage

Running without arguments or invalid arguments will display usage instructions:

```bash
node app.js
```

Example output:

```
Usage:
  node app.js --filter=pattern
  node app.js --count
```

---

## How to Run the test

```bash
npm run test
```
