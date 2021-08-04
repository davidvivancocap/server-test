const express = require("express");
const path = require('path')
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 3000


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', function (req, res) {
    console.log("query", req.query);
    res.send({ message: 'HELLO', body: req.body })
});


app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto " + PORT);
});
