const fs = require('fs');

const readStream = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("output.json", 'utf8', function (err, data) {
            if (err) reject();
            resolve(JSON.parse(data));
        });
    });
}

const writeStream = (witnesses) => {
    return new Promise((resolve, reject) => {
        const jsonContent = JSON.stringify(witnesses);
        fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
            if (err)
                reject("An error occured while writing JSON Object to File.");
            else {
                console.log("JSON file has been saved.");
                resolve();
            }

        });
    });
}

const pathExists = () => {
    return new Promise((resolve, rejec) => {
        fs.exists("output.json", function (doesExist) {
            resolve(doesExist);
        });
    });

}

module.exports = { readStream, writeStream, pathExists };