const express = require("express");
const Document = require("../models/Document");

const router = express.Router();

router.get("/", async function(req, res){

    const query = req.query.q || "";

    const docs = await Document.find();

    let suggestions = [];

    docs.forEach(doc => {

        const words = doc.content
            .split(/\s+/)
            .filter(word =>
                word.toLowerCase()
                .startsWith(query.toLowerCase())
            );

        suggestions.push(...words);
    });

    suggestions = [...new Set(suggestions)];

    res.json(suggestions.slice(0,8));
});

module.exports = router;