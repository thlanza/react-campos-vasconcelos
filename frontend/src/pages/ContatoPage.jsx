import { useState } from 'react';
import styles from './ContatoPage.module.css';

function ContatoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const campos = [
      { nomeDoCampo: "Nome", valor: nome },
      { nomeDoCampo: "Email", valor: email },
      { nomeDoCampo: "Telefone", valor: telefone}
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

    setNome("");
    setEmail("");
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
            para o seu caso.
          </p>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <label htmlFor="nome">Nome <span className={styles.asterisco}>*</span></label><br />
        <input type="text" id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} /><br />
        <label htmlFor="email">Email <span className={styles.asterisco}>*</span></label><br />
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
        <label htmlFor="telefone">Email <span className={styles.asterisco}>*</span></label><br />
        <input type="text" id="telefone" name="telefone" value={email} onChange={(e) => setTelefone(e.target.value)} /><br /><br />
        <button type="submit" value="Submit">Submit</button>
      </form>
    </main>
  );
}

export default ContatoPage;