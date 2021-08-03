const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000


app.get('/', function (req, res) {
    console.log(req.body)
    res.send('Saludos desde express');
});

app.post('/', function (req, res) {
    res.send({ message: 'Hello from test server', body: req.body || {} });
});


app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
