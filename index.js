const express = require('express');
const app = express();
const pokeneaRoutes = require('./app/routes/pokeneaRoutes');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', pokeneaRoutes);


app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

module.exports = app;
