require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const uploadRoute = require("./routes/upload");

const searchRoute = require("./routes/search");

const suggestRoute = require("./routes/suggest");

const graphRoute =
require("./routes/graph");

const statsRoute =
require("./routes/stats");

const timelineRoute =
require("./routes/timeline");



const replayRoute =
require("./routes/replay");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

app.use("/upload", uploadRoute);

app.use("/search", searchRoute);

app.use("/suggest", suggestRoute); 

app.use("/graph", graphRoute);

app.use("/stats", statsRoute);

app.use("/timeline", timelineRoute);

app.use("/replay", replayRoute);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});