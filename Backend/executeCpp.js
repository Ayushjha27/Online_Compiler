
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');


const outputPath = path.join(__dirname, 'outputs');
//C:\Users\AYUSH\Documents\compiler\Backend\outputs


// // if above path does not exist then create it. 
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}


//filePath=>
// C:\Users\AYUSH\Documents\compiler\Backend\codes\27bb3242-5952-459d-bd24-7d1aab0d7762.cpp

const executeCpp = async (filepath) => {
    const jobId = path.basename(filepath).split(".")[0];
    //27bb3242-5952-459d-bd24-7d1aab0d7762

    //splitting will create an array at 0th index we are getting id and extension name cpp
    // ["27bb3242-5952-459d-bd24-7d1aab0d7762","cpp"]

    const output_filename = `${jobId}.exe`;
    //27bb3242-5952-459d-bd24-7d1aab0d7762.exe

    const outPath = path.join(outputPath, output_filename);
    //C:\Users\AYUSH\Documents\compiler\Backend\outputs\27bb3242-5952-459d-bd24-7d1aab0d7762.exe


    
    return new Promise((resolve, reject) => {
        exec(
            `g++ ${filepath} -o ${outPath} && cd ${outputPath} && .\\${output_filename}`,
            (error, stdout, stderr) => {
                if (error) {
                    reject({ error, stderr });
                }
                if (stderr) {
                    reject(stderr);
                }
                resolve(stdout);
            }
        );
    });


};

module.exports = {
    executeCpp,
};
