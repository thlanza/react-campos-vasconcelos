const express = require('express');


const path = require('path');
const cors = require('cors');

const fs = require('fs/promises');

const app = express();
const PORT = process.env.PORT || 5000;
const conteudoPath = path.join(__dirname, 'conteudo.json');

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

let writeQueue = Promise.resolve();

async function readConteudo() {
    const fileContent = await fs.readFile(conteudoPath, 'utf8');
    return JSON.parse(fileContent);
};

async function writeConteudoAtomic(data) {
    const tempPath = `${conteudoPath}.tmp`;
    await fs.writeFile(tempPath, JSON.stringify(data, null, 2), 'utf-8');
    await fs.rename(tempPath, conteudoPath);
}



app.put('/conteudo/titulo', (req, res) => {
    const novoTitulo = req.body.titulo;

    writeQueue = writeQueue.then(async () => {
        const data = await readConteudo();
        data.titulo.name = novoTitulo;
        await writeConteudoAtomic(data);
        return data;
    });

    writeQueue
        .then((data) => {
            res.status(200).json({
                "novo título": data.titulo.name
            });
        })
        .catch((error) => {
            console.error('Erro ao atualizar arquivo JSON, rota /conteudo/titulo', error);
            res.status(500).json({ erro: 'Erro ao atualizar arquivo JSON'})
        });
});

app.get('/conteudo', async (req, res) => {
    try {
        const data = await readConteudo();
        res.status(200).json(data);
    } catch(error) {
        console.error('Erro ao ler arquivo JSON, rota /conteudo', error);
        res.status(500).json({ erro: 'Erro ao ler arquivo JSON'})
    }
});


app.use(express.static(path.join(__dirname, './frontend/build')))

app.listen(PORT, () => `Servindo na porta ${PORT}`)

