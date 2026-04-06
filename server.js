const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const nodemailer = require('nodemailer');

const SibApiV3Sdk = require("sib-api-v3-sdk");
const { EmailService } = require('./services/EmailService');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, './frontend/build')));

app.post('/api/enviarEmail',  async (req, res) => {
   const { from, subject, text, nome } = req.body;
   try {
        const info = await EmailService.sendMail({
            from: from,
            to: process.env.RECIPIENTE,
            subject: subject,
            text: text,
            html: 
            `<b>${text}</b><br /><br /><div>Remetente: ${from}.</div><br />
            <div>Nome do contato: ${nome}</div><br >
            `
        });
  
        console.log("Mensagem enviada", info.messageId);
        console.log("Preview URL", nodemailer.getTestMessageUrl(info));

        return res.status(200).json({
            mensagem: "Email enviado com sucesso!"
        })

   
    } catch(err) {
        console.log("Erro ao enviar email", err);
        return res.status(500).json({
            mensagem: 'Erro ao enviar email',
            erro: err.message || String(err)
        })
    }
});

app.listen(PORT, () => 
    console.log(`Servindo na porta ${PORT}`)
);

