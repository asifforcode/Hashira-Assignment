# Hashira Assignment - Shamir's Secret Sharing

A JavaScript implementation of Shamir's Secret Sharing algorithm for the Catalog Placements Assignment.

## Overview

This project implements a simplified version of Shamir's Secret Sharing algorithm to recover the constant term of an unknown polynomial using Lagrange interpolation. The solution processes encoded points from JSON test cases and calculates the secret value at f(0).

## Algorithm

The implementation uses **Lagrange interpolation** to reconstruct a polynomial from given points and find its constant term:

```
f(0) = Σ(i=0 to k-1) yi * Li(0)
```

Where `Li(0)` is the Lagrange basis polynomial evaluated at x=0.

## Project Structure

```
├── index.js          # Main implementation
├── test.js           # Test suite
├── package.json      # Project configuration
├── testcase1.json    # Test case 1 data
├── testcase2.json    # Test case 2 data
└── README.md         # Documentation
```

## Usage

### Prerequisites
- Node.js (version 14.0.0 or higher)

### Running the Solution

```bash
# Execute main program
node index.js

# Run tests
node test.js
```

## Results

- **Test Case 1**: `3`
- **Test Case 2**: `79836264049851`

## Implementation Details

### Key Components

1. **Base Conversion**: Converts encoded values from various bases (2-36) to decimal using BigInt for precision
2. **Point Extraction**: Parses JSON input and decodes y-values from their respective bases
3. **Lagrange Interpolation**: Calculates polynomial coefficients to find f(0)
4. **Error Handling**: Validates input data and handles edge cases

### Technical Specifications

- **Language**: JavaScript (Node.js)
- **Precision**: BigInt support for 256-bit integers
- **Algorithm**: Lagrange interpolation method
- **Input Format**: JSON with base-encoded coordinate points

## Test Cases

### Test Case 1
- **Input**: 4 points, requires 3 points (k=3)
- **Polynomial Degree**: 2
- **Secret**: 3

### Test Case 2  
- **Input**: 10 points, requires 7 points (k=7)
- **Polynomial Degree**: 6
- **Secret**: 79836264049851

## Assignment Requirements

✅ **Checkpoint 1**: Read test cases from separate JSON files  
✅ **Checkpoint 2**: Decode Y values from different bases  
✅ **Checkpoint 3**: Calculate secret using Lagrange interpolation  



