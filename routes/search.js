const express = require("express");
const Document = require("../models/Document");

const router = express.Router();

router.get("/", async function(req, res){

    try{

        const query = req.query.q;

        const results = await Document.find({
            content: {
                $regex: query,
                $options: "i"
            }
        });

        const formattedResults = results.map(doc => ({
    filename: doc.filename,
    content: doc.content.substring(0, 200),
    uploadDate: doc.uploadDate
}));

res.json(formattedResults);

    }
    catch(error){

        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;