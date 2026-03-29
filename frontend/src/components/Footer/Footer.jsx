import styles from './Footer.module.css';
import ArrowRightIcon from "./ArrowRightIcon";

function Footer() {

  return (
    <main className={styles.footerGrid}>

      <div className={styles.components}>
        <h3 className={styles.tituloComUnderline}>Links Úteis</h3>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Política de Privacidade</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Blog</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Termos de Uso</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Sobre Nós</p>
        </div>
      </div>

      <div className={styles.components}>
        <h3 className={styles.tituloComUnderline}>Áreas de Atuação</h3>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Renegociação de Dívidas</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Juros Abusivos</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Defesa Judicial</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Fraudes e golpes</p>
        </div>
      </div>

      <div className={styles.components}>
        <h3 className={styles.tituloComUnderline}>Links Úteis</h3>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>jane@gmail.com</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>99607-3480</p>
        </div>
        <div className={styles.gridRow}>
        <ArrowRightIcon />
        <p className={styles.paragraph}>Rua José Gonçalves, 890</p>
        </div>
      </div>
    </main>
  );
}

export default Footer;