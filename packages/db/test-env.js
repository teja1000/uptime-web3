const path = require('path');
const dotenv = require('dotenv');

// Log the current working directory
console.log('Current working directory:', process.cwd());

// Try loading .env from different locations
const locations = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), '..', '.env'),
    path.join(process.cwd(), '..', '..', '.env'),
    path.join(process.cwd(), '..', '..', '..', '.env')
];

console.log('\nTrying to load .env from these locations:');
locations.forEach(loc => {
    console.log(`\nTrying: ${loc}`);
    const result = dotenv.config({ path: loc });
    if (result.error) {
        console.log('Error loading:', result.error.message);
    } else {
        console.log('Successfully loaded from this location');
    }
});

// Log all environment variables that contain 'DATABASE'
console.log('\nAll DATABASE related environment variables:');
Object.keys(process.env).forEach(key => {
    if (key.toLowerCase().includes('database')) {
        console.log(`${key}: ${process.env[key]}`);
    }
}); 