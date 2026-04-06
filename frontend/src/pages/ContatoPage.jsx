import { useState } from 'react';
import styles from './ContatoPage.module.css';

function ContatoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [assunto, setAssunto] = useState("");
  const [result, setResult] = useState("");

  const chamarApiEmail = async ({ nome, email, mensagem, assunto }) => {
    setResult("");
    const url = "http://localhost:5000/api/enviarEmail";
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          from: email,
          text: mensagem,
          subject: assunto
        })
      });
      if (!response.ok) {
        throw new Error(`Erro na requisição da API: ${response.status}`);
      }
      alert("O email foi enviado com sucesso!");
    } catch (error) {
      console.log("Erro na requisoção", error.message);
      alert("Erro na requisição, tente novamente mais tarde.")
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const campos = [
      { nomeDoCampo: "Nome", valor: nome },
      { nomeDoCampo: "Email", valor: email },
      { nomeDoCampo: "Mensagem", valor: mensagem},
      { nomeDoCampo: "Assunto", valor: assunto}
    ];

    const camposInvalidos = campos
      .filter((campo) => campo.valor.trim() === "")
      .map((campo) => campo.nomeDoCampo);

    if (camposInvalidos.length > 0) {
      if (camposInvalidos.length === 1) {
        alert(`O campo ${camposInvalidos[0]} está vazio!`)
        return;
      } else {
        alert(`Os campos ${camposInvalidos.join(" e ")} estão vazios!`);
        return;
      }
    }

    await chamarApiEmail({
      nome,
      email,
      assunto,
      mensagem
    }
    );

    setNome("");
    setEmail("");
    setAssunto("");
    setMensagem("");
  };

  return (
    <main className={styles.wrapper}>
      <div className={styles.firstWrapper}>
        <div>
          <img
            className={styles.heroContato}
            src={"contato-banner.png"}
          />
        </div>
        <div>
          <h1 className={styles.header1}>Entre em contato</h1>
          <p className={styles.content}>
            Precisa da resolução eficiente do seu problema ou de assessoria especializada?
            Nossos advogados estão prontos para atender e oferecer a melhor abordagem legal
            para o seu caso. Mande sua mensagem, nossos advogados receberão e irão entrar em contato.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <label htmlFor="nome">Nome <span className={styles.asterisco}>*</span></label><br />
        <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} /><br /><br />
        <label htmlFor="email">Email <span className={styles.asterisco}>*</span></label><br />
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <label htmlFor="assunto">Assunto <span className={styles.asterisco}>*</span></label><br />
        <input type="text" id="assunto" name="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} /><br /><br />
        <label htmlFor="telefone">Mensagem <span className={styles.asterisco}>*</span></label><br />
        <textarea 
          type="text" 
          id="mensagem" 
          name="mensagem" 
          value={mensagem} 
          cols={100}
          rows={4}
          onChange={(e) => setMensagem(e.target.value)} /><br /><br />
        <button type="submit" value="Submit" className={styles.submit}>Enviar</button>
      </form>
    </main>
  );
}

export default ContatoPage;