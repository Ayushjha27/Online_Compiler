const express = require('express');
const cors = require("cors");
const { generateFile } = require("./generateFile");
const { executeCpp } = require('./executeCpp');
const { generateInputFile } = require('./generateInputFile');


const app = express();



//middleware
app.use(cors());
app.use(express.json()); // this line means that it will accept raw json data 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("welcome");
});

app.post("/run", async (req, res) => {
    const { language = 'cpp', code, input } = req.body; // ye 3 chije frontend se li
    if (code === undefined) {
        return res.status(404).json({ "success": false, message: "empty code body!" })
    }

    try {
        const filePath = await generateFile(language, code);
        const inputPath = await generateInputFile(input);
        const output = await executeCpp(filePath, inputPath);

        res.json({ filePath, inputPath, output });
    } catch (error) {
        res.status(500).json({ "success": false, message: error.message })
    }


})

app.listen(5000, () => {
    console.log("server listening port 5000");
})


