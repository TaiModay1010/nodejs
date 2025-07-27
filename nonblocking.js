const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const start = performance.now();

const dirPath = './data'; // hoặc './databook' nếu bạn đã dùng thư mục đó
const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

let completed = 0;

files.forEach((filename) => {
  const filePath = path.join(dirPath, filename);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading ${filename}:`, err);
      return;
    }
    const firstLine = data.split('\n')[0];
    console.log(`${filename} - First line: ${firstLine}`);

    completed++;
    if (completed === files.length) {
      const end = performance.now();
      console.log(`\nNon-blocking I/O time: ${(end - start).toFixed(2)}ms`);
    }
  });
});
