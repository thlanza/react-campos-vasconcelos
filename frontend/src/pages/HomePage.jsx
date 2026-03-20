import Carrossel from '../components/Carrossel/Carrossel';
import useMediaQuery from '../hooks/useMediaQuery';
import style from './Home.module.css';
function HomePage() {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  return (
    <div className={style.wrapper}>
      {isMobile ? null : <Carrossel />}
      {isMobile ?      
      (
      <img 
          src={"logo-campos.png"} 
          alt="Logo da Campos Vasconcelos" 
          className={style.logo}
            />
      ) : null}
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