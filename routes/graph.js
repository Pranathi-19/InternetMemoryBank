const express = require("express");
const Document = require("../models/Document");

const stopWords = require("../utils/stopWords");

const router = express.Router();

router.get("/", async function(req,res){

    try{

        const docs = await Document.find();

        let wordCount = {};

        docs.forEach(doc => {

            const words =
doc.content
.toLowerCase()
.split(/\W+/)
.filter(word =>

    word.length > 3 &&

    !stopWords.includes(word)

);

            words.forEach(word => {

                if(word.length < 4)
                    return;

                wordCount[word] =
                (wordCount[word] || 0) + 1;
            });
        });

        const topWords =
        Object.entries(wordCount)
        .sort((a,b)=>b[1]-a[1])
        .slice(0,15);

        let nodes = [];
        let edges = [];

        topWords.forEach((item,index)=>{

            nodes.push({

    id:index+1,

    label:item[0],

    value:item[1],

    title:
    "Frequency: " + item[1]
});
        });

        for(let i=1;i<nodes.length;i++){

            edges.push({
                from:1,
                to:i+1
            });
        }

        res.json({
            nodes,
            edges
        });

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });
    }
});

module.exports = router;