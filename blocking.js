const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const start = performance.now();

const dirPath = './data'; // hoặc './databook' nếu bạn dùng thư mục đó
const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

files.forEach((filename) => {
  const filePath = path.join(dirPath, filename);
  const data = fs.readFileSync(filePath, 'utf-8');
  const firstLine = data.split('\n')[0];
  console.log(`${filename} - First line: ${firstLine}`);
});

const end = performance.now();
console.log(`\nBlocking I/O time: ${(end - start).toFixed(2)}ms`);
