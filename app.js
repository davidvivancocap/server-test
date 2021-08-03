const express = require("express");
const path = require('path')

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/', function (req, res) {
    console.log(req.query)
    res.status(200)
});


app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
