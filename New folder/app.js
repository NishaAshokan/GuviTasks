const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Endpoint to create a text file with current timestamp
app.post('/createFile', (req, res) => {
  const folderPath = './currentTimestamp'; 
  const currentDate = new Date();
  const fileName = `${currentDate.toISOString().replace(/:/g, '-')}.txt`;
  const filePath = path.join(folderPath, fileName);
  const fileContent = currentDate.toString();
  

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error creating file:', err);
      res.status(500).send('Error creating file: ' + err.message);
      return;
    }
    console.log('File created successfully:', filePath);
    res.status(201).send('File created successfully');
  });
});

// Endpoint to retrieve all text files in the specified folder
app.get('/getAllFiles', (req, res) => {
  const folderPath = './currentTimestamp'; // Replace 'your-folder-path' with the actual folder path

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      res.status(500).send('Error reading folder');
      return;
    }
    const textFiles = files.filter(file => file.endsWith('.txt'));
    res.json(textFiles);
  });
});

// Start the server
const port = 4001; // You can change the port if needed
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
