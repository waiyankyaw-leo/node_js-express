let express = require('express');
let app = express();
app.use(express.static(__dirname + "/public"));

console.log("Hello World");

// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


app.use("/public", express.static(__dirname + "/public"));


module.exports = app;




































 module.exports = app;
