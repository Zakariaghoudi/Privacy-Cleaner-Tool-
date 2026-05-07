const fs = require('fs');
const path = require('path');
const ExifBeGone = require('exif-be-gone');

// Configuration
const inputFile = 'photo.jpg'; 
const outputFile = 'clean_photo.jpg';

// Supported extensions
const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
const fileExt = path.extname(inputFile).toLowerCase();

// 1. Check if the file is a supported image
if (!supportedExtensions.includes(fileExt)) {
    console.error('Error: Unsupported file format.');
    process.exit(1);
}

// 2. Check if the source file exists
if (!fs.existsSync(inputFile)) {
    console.error(`Error: File "${inputFile}" not found.`);
    process.exit(1);
}

// 3. Metadata removal process
console.log('Processing: Stripping metadata...');

const reader = fs.createReadStream(inputFile);
const writer = fs.createWriteStream(outputFile);
const cleaner = new ExifBeGone();

reader.pipe(cleaner).pipe(writer);

writer.on('finish', () => {
    console.log('Success: Metadata removed. Saved as:', outputFile);
});

writer.on('error', (err) => {
    console.error('Failed: An error occurred during the process:', err.message);
});
