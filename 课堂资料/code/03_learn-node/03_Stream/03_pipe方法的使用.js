const fs = require('fs');

// 传统的写法
// fs.readFile('./bar.txt', (err, data) => {
//   fs.writeFile('./baz.txt', data, (err) => {
//     console.log(err);
//   })
// })

// Stream的写法
const reader = fs.createReadStream("./foo.txt");
const writer = fs.createWriteStream('./foz.txt');

reader.pipe(writer);
writer.close();

