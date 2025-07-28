# Shamir's Secret Sharing - Simple JavaScript Solution

**Easy-to-understand JavaScript implementation** of Shamir's Secret Sharing algorithm for the Catalog Placements Assignment.

## What This Program Does

1. **Reads secret data** from JSON files
2. **Converts encoded numbers** from different bases (binary, hex, etc.) to regular numbers
3. **Uses math magic** (Lagrange interpolation) to find the hidden secret
4. **Shows the results** clearly and simply

## Files

```
Project Files:
├── index.js          # Main solution (super simple!)
├── test.js           # Test the solution
├── package.json      # Project info
├── testcase1.json    # First puzzle
├── testcase2.json    # Second puzzle  
└── README.md         # This file
```

## How to Run

```bash
# Run the main program
node index.js

# Test everything
node test.js
```

## Results

- **Test Case 1**: Secret = **3**
- **Test Case 2**: Secret = **79836264049851**

## How It Works (Simple Explanation)

### Step 1: Decode the Numbers
The input has numbers written in different bases:
- `"111"` in base 2 = 7 in normal numbers
- `"213"` in base 4 = 39 in normal numbers  
- `"aed7"` in base 15 = a really big number

### Step 2: Use Math to Find the Secret
We use something called "Lagrange interpolation" which is just a fancy way to:
1. Take some points (x, y) from a hidden curve
2. Figure out what the curve looks like
3. Find what the curve equals when x = 0 (that's our secret!)

### Step 3: Done!
The secret is the answer we're looking for.

## Code Structure (Human-Readable)

```javascript
// Convert "111" base 2 to regular number 7
function decodeNumber(value, base) { ... }

// Use math to find the secret
function calculateSecret(points) { ... }

// Process one test file  
function solve(filename) { ... }

// Run everything
function main() { ... }
```

## Why This Version is Better

- Super Simple: No complex classes or confusing structure
- Easy to Read: Clear function names and comments
- Easy to Understand: Step-by-step logic
- Still Accurate: Produces correct results
- Human-Friendly: Written like a person would write it

## Learning Notes

- **BigInt**: Used for really big numbers (JavaScript's normal numbers aren't big enough)
- **Lagrange Interpolation**: Math technique to find missing parts of curves
- **Base Conversion**: Converting numbers from different counting systems

## Testing

The program includes tests to make sure everything works:
- Tests number conversion
- Runs both test cases
- Verifies the answers are correct

---

**Made Simple**: This solution prioritizes clarity and understanding over complex features.  
**Assignment**: Catalog Placements - Shamir's Secret Sharing  
**Language**: JavaScript (Node.js)
"# Hashira-Assignment" 
