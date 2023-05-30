const { PDFDocument } = require('pdf-lib');
const fs = require('fs');

// Read the PDF file into a buffer
const pdfBuffer = fs.readFileSync('input.pdf');

// Load the PDF buffer into a PDFDocument object
const pdfDoc = await PDFDocument.load(pdfBuffer);

// Convert the PDFDocument to a Word file
const wordBuffer = await pdfDoc.saveAsBuffer('application/vnd.openxmlformats-officedocument.wordprocessingml.document');

// Write the Word buffer to a file
fs.writeFileSync('output.docx', wordBuffer);
