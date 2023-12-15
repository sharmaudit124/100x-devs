const fs = require('fs');

function writeToFile(dataToWrite) {
    fs.writeFile('4-textFile.txt', dataToWrite, (err) => {
        if (!err) console.log('Data Added Successfully!');
    })
}

writeToFile('Lets learn js and Java!');