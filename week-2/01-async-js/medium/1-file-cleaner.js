const fs = require('fs');

function readMyFile() {
    fs.readFile('file-cleaner.txt', 'utf-8', (err, data) => {
        console.log('Data readed successfully!');
        writeFile(data.replace(/\s+/g, ' ').trim());
    })
}

function writeFile(dataToWrite) {

    fs.writeFile('file-cleaner.txt', dataToWrite, (err) => {
        if (!err) console.log('Successfully wrote Data!');
    })
}

readMyFile();