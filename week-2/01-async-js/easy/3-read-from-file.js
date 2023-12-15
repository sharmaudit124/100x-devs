const fs = require('fs');

function readFromFile() {
    fs.readFile('3-textFile.txt', 'utf-8', (error, data) => {
        console.log(data);
    });
}

console.log('let us read from file....')
readFromFile();
console.log('Expensive Operation started...');
for (let i = 0; i < 10000000000; i++);
console.log('Expensive operation ended...');
