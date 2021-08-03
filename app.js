const express = require("express");
const app = express();


app.get('/', function (req, res) {
    console.log(req.body)
    res.send('Saludos desde express');
});

app.post('/', function (req, res) {
    console.log(req.body)
    res.send({ message: 'Hello from test server' });
});


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
