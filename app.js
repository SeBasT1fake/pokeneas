const express = require('express');
const dotenv = require('dotenv');
const pokeneaRoutes = require('./app/routes/pokeneaRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', pokeneaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
