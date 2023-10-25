#!/usr/bin/node
const fs = require('fs');

// Check if a file path argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node read_file.js <file_path>');
  process.exit(1);
}

// Get the file path from command line arguments
const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:');
    console.log(data);
  }
});
