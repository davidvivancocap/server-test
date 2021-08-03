const express = require("express");

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000


app.get('/', function (req, res) {
    console.log(req.body)
    res.send('Saludos desde express');
});

app.post('/', function (req, res) {
    console.log(req.body)
    res.status(200)
});


app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
