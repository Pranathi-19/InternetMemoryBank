const express = require("express");
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");

const Document = require("../models/Document");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function(req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const Tesseract =
require("tesseract.js");

const upload = multer({ storage });

router.post("/", upload.single("file"), async function(req, res) {

    try {

        let extractedText = "";

if(req.file.mimetype === "application/pdf"){

    const dataBuffer =
    fs.readFileSync(req.file.path);

    const pdfData =
    await pdfParse(dataBuffer);

    extractedText =
    pdfData.text;
}

else if(req.file.mimetype.startsWith("image/")){

    const result =
    await Tesseract.recognize(
        req.file.path,
        "eng"
    );

    extractedText =
    result.data.text;

    console.log("Extracted Text:");
    console.log(extractedText);
}
        if(req.file.mimetype === "application/pdf") {

            const dataBuffer = fs.readFileSync(req.file.path);

            const pdfData = await pdfParse(dataBuffer);

            extractedText = pdfData.text;
        }

        const newDocument = new Document({
            filename: req.file.originalname,
            content: extractedText
        });

        await newDocument.save();

        res.json({
            message: "Uploaded Successfully",
            filename: req.file.originalname
        });

    }
    catch(error) {

    console.error("UPLOAD ERROR:");
    console.error(error);

    res.status(500).json({
        error: error.message,
        stack: error.stack
    });
}
});

module.exports = router;