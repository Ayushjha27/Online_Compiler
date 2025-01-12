
// const fs = require('fs');
// const path = require('path');
// const { v4: uuid } = require('uuid');

// const dirInputs = path.join(__dirname, 'inputs');


// // // if above path does not exist then create it. 
// if (!fs.existsSync(dirInputs)) {
//     fs.mkdirSync(dirInputs, { recursive: true });
// }

// const generateInputFile = async (input) => {
//     const jobID = uuid();
//     const input_filename = `${jobID}.txt`;// 123454-uniqueid.txt
//     const input_filePath = path.join(dirInputs, input_filename);//file is created
//     //     //// C:\Users\AYUSH\Documents\compiler\Backend\inputs\123454-uniqueid.txt

//     //     //create and store the code in file

//     fs.writeFileSync(input_filePath, input);
//     return input_filePath;
// };

// module.exports = {
//     generateInputFile,
// };

const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const dirInputs = path.join(__dirname, 'inputs');

if (!fs.existsSync(dirInputs)) {
    fs.mkdirSync(dirInputs, { recursive: true });
}

const generateInputFile = async (input) => {
    const jobID = uuid();
    const input_filename = `${jobID}.txt`;
    const input_filePath = path.join(dirInputs, input_filename);
    await fs.writeFileSync(input_filePath, input);
    return input_filePath;
};

module.exports = {
    generateInputFile,
};
