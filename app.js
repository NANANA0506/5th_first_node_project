
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.render("base")
})

app.use("/assets", express.static(path.join(__dirname, "/assets")));


app.listen(PORT, () => {
    console.log("SERVER START!");
})