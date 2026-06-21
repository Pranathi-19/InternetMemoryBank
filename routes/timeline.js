const express = require("express");
const Document = require("../models/Document");

const router = express.Router();

router.get("/", async function(req,res){

    try{

        const docs =
        await Document.find()
        .sort({uploadDate:-1});

        res.json(docs);

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });
    }
});

module.exports = router;