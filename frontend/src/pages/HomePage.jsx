import { useEffect, useState } from 'react';
import Carrossel from '../components/Carrossel/Carrossel';
import style from './Home.module.css';
function HomePage() {
  const [name, setName] = useState('');
  useEffect(() => {
    const fetchTitulo = async () => {
      try {
      const response = await fetch('http://localhost:5000/conteudo');
      const conteudo = await response.json();
      setName(conteudo.titulo.name);
      } catch (e) {
        console.log("Error", e);
      }
    }
    fetchTitulo();
  }, []);
  return (
    <div className={style.wrapper}>
      <p>{name}</p>
      <Carrossel />
      <div className={style.myGrid}>
        <div className={style.left}>
          <p className={style.header}>Conte com uma equipe de advogados especialistas e evite a cobrança abusiva dos bancos.</p>
          <h5 className={style.subheader}>Não seja vítima de juros e taxas embutidas no contrato com o seu banco.</h5>
          <button>Entre em contato agora</button>
        </div>
        <div className={style.right}>
          <img src={"hero-jane.png"} alt="Foto da Jane" />
        </div>
  
      </div>
    </div>
  );
}

export default HomePage;