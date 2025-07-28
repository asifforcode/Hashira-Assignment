const { decodeNumber, calculateSecret, solve, main } = require('./index.js');

/**
 * Simple test script for the simplified solution
 */

console.log('Testing Shamir\'s Secret Sharing - Simple Version\n');

// Test the base conversion function
console.log('Testing number decoding:');
console.log('  "111" base 2 =', decodeNumber("111", 2));
console.log('  "213" base 4 =', decodeNumber("213", 4));  
console.log('  "aed7015a346d63" base 15 =', decodeNumber("aed7015a346d63", 15));

console.log('\n' + '='.repeat(50));
console.log('Running both test cases:');

try {
    // Run the main program
    main();
    
    console.log('\nAll tests completed successfully!');
    
} catch (error) {
    console.error('Test failed:', error.message);
}
