const fs = require('fs');

/*
 * SHAMIR'S SECRET SHARING - SIMPLE VERSION
 * 
 * What this program does:
 * 1. Reads encoded points from JSON files
 * 2. Converts them from different bases (binary, hex, etc.) to regular numbers  
 * 3. Uses math to find the secret number
 * 
 * The math part: Lagrange interpolation to find f(0)
 */

// Convert a number from any base to decimal
// Example: "111" in base 2 = 7 in decimal
function decodeNumber(value, base) {
    let result = 0n; // Using BigInt for large numbers
    
    for (let char of value.toLowerCase()) {
        let digit;
        
        if (char >= '0' && char <= '9') {
            digit = parseInt(char);
        } else if (char >= 'a' && char <= 'z') {
            digit = char.charCodeAt(0) - 97 + 10; // 'a' = 10, 'b' = 11, etc.
        }
        
        result = result * BigInt(base) + BigInt(digit);
    }
    
    return result;
}

// The main math: find the secret using Lagrange interpolation
function calculateSecret(points) {
    let secret = 0n;
    
    // For each point, calculate how much it contributes to the secret
    for (let i = 0; i < points.length; i++) {
        const currentX = points[i].x;
        const currentY = points[i].y;
        
        // Lagrange interpolation formula
        let top = 1n;    // numerator  
        let bottom = 1n; // denominator
        
        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const otherX = points[j].x;
                top = top * (0n - otherX);           // (0 - x_j)
                bottom = bottom * (currentX - otherX); // (x_i - x_j)  
            }
        }
        
        const contribution = (currentY * top) / bottom;
        secret = secret + contribution;
    }
    
    return secret;
}

// Process one test case file
function solve(filename) {
    console.log(`\n--- Processing ${filename} ---`);
    
    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(filename, 'utf-8'));
    const totalPoints = data.keys.n;
    const neededPoints = data.keys.k;
    
    console.log(`Total points available: ${totalPoints}`);
    console.log(`Points needed: ${neededPoints}`);
    
    // Decode all the points
    const points = [];
    
    for (const key in data) {
        if (key === 'keys') continue;
        
        const x = parseInt(key);
        const base = parseInt(data[key].base);
        const encodedY = data[key].value;
        
        const y = decodeNumber(encodedY, base);
        points.push({ x: BigInt(x), y: y });
        
        console.log(`Point ${x}: ${y} (from "${encodedY}" base ${base})`);
    }
    
    // Use only the first 'neededPoints' number of points
    const pointsToUse = points.slice(0, neededPoints);
    
    console.log(`\nUsing ${neededPoints} points to calculate secret...`);
    
    // Calculate the secret!
    const secret = calculateSecret(pointsToUse);
    console.log(`Secret: ${secret}`);
    
    return secret;
}

// Main program
function main() {
    console.log('Shamir\'s Secret Sharing - Simple Solution');
    console.log('Finding hidden secrets in polynomials!');
    
    const result1 = solve('testcase1.json');
    const result2 = solve('testcase2.json');
    
    console.log('\nFINAL ANSWERS:');
    console.log(`Test Case 1: ${result1}`);
    console.log(`Test Case 2: ${result2}`);
}

// Run the program
if (require.main === module) {
    main();
}

module.exports = { decodeNumber, calculateSecret, solve, main };
