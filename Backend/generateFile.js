
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const dirCodes = path.join(__dirname, 'codes');


// // if above path does not exist then create it. 
if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, content) => {
    const jobID = uuid();
    const filename = `${jobID}.${format}`;// 123454-uniqueid.cpp
    const filePath = path.join(dirCodes, filename);//file is created
    //     //// C:\Users\AYUSH\Documents\compiler\Backend\codes\123454-uniqueid.cpp

    //     //create and store the code in file

     fs.writeFileSync(filePath, content);
    return filePath;
};

module.exports = {
    generateFile,
};
