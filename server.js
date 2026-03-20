const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, './frontend/build')))

app.listen(PORT, () => `Servindo na porta ${PORT}`)

