const fs = require('fs');
const path = require('path');

const dir = './data';
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const generateRandomLine = () => {
  const length = Math.floor(Math.random() * 100) + 50;
  return Math.random().toString(36).substring(2, 2 + length);
};

const generateFile = (filename, sizeInMB) => {
  const filePath = path.join(dir, filename);
  const stream = fs.createWriteStream(filePath, { flags: 'w' });

  const lines = Math.floor((sizeInMB * 1024 * 1024) / 100); // ~100 bytes mỗi dòng
  for (let i = 0; i < lines; i++) {
    stream.write(generateRandomLine() + '\n');
  }

  stream.end(() => {
    console.log(`Created ${filename} (${sizeInMB}MB)`);
  });
};

// Tạo 5 file với kích thước ngẫu nhiên 10–50MB
for (let i = 1; i <= 5; i++) {
  const size = Math.floor(Math.random() * 41) + 10; // từ 10 đến 50MB
  generateFile(`file${i}.txt`, size);
}
