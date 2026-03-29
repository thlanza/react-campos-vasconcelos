import styles from './Footer.module.css';
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import IconWrapper from './IconWrapper';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <main className={styles.footerGrid}>

      <div className={styles.components}>
        <h3 className={styles.tituloComUnderline}>Links Úteis</h3>
        <div className={styles.gridRow}>
        <IconWrapper Icon={FaArrowRight} />
        <Link to="/politica-privacidade" className={styles.paragraph}>Política de Privacidade</Link>
        </div>
        <div className={styles.gridRow}>
        <IconWrapper Icon={FaArrowRight} />
          <Link to="/termos-de-uso" className={styles.paragraph}>Termos de Uso</Link>
        </div>
        <div className={styles.gridRow}>
        <IconWrapper Icon={FaArrowRight} />
        <p className={styles.paragraph}>Sobre Nós</p>
        </div>
      </div>

      <div className={styles.components}>
        <h3 className={styles.tituloComUnderline}>Áreas de Atuação</h3>
        <div className={styles.gridRow}>
        <IconWrapper Icon={FaArrowRight} />
        <p className={styles.paragraph}>Direito Trabalhista</p>
        </div>
        <div className={styles.gridRow}>
        <IconWrapper Icon={FaArrowRight} />
        <p className={styles.paragraph}>Direito Cível</p>
        </div>
        <div className={styles.gridRow}>
        <IconWrapper Icon={FaArrowRight} />
        <p className={styles.paragraph}>Direito do Consumidor</p>
        </div>
        <div className={styles.gridRow}>
        <IconWrapper Icon={FaArrowRight} />
        <p className={styles.paragraph}>Direito Imobiliário</p>
        </div>
      </div>

      <div className={styles.components}>
        <h3 className={styles.tituloComUnderline}>Contatos</h3>
        <div className={styles.gridRow}>
        <IconWrapper Icon={MdOutlineEmail} />
        <p className={styles.paragraph}>camposvasconcelosadvocacia@gmail.com</p>
        </div>
        <div className={styles.gridRow}>
        <IconWrapper Icon={BsTelephoneForward} />
        <p className={styles.paragraph}>99607-3480</p>
        </div>
        <div className={styles.gridRow}>
        <IconWrapper Icon={MdOutlineMapsHomeWork} />
        <p className={styles.paragraph}>Rua José Gonçalves, 890</p>
        </div>
        <div className={styles.gridRow}>  
        <IconWrapper Icon={FiInstagram} />
        <a href="http://instagram.com/_u/camposevasconcelos/" className={styles.paragraph}>Campos Vasconcelos no Instagram</a>
        </div>
      </div>
    </main>
  );
}

export default Footer;