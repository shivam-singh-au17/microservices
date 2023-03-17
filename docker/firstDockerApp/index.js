const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("My First Docker Node JS App")
});

app.listen(8080, () => {
    console.log("listening port 8080");
});
