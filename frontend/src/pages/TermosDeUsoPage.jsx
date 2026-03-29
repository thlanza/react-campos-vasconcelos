import styles from "./TermosDeUsoPage.module.css";

function TermosDeUsoPage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Termos de Uso</h1>
        <p className={styles.subtitle}>
          Estes Termos de Uso estabelecem as condições para acesso e utilização
          deste site institucional, de seus conteúdos e de seus canais de contato.
        </p>
        <p className={styles.lastUpdate}>
          Última atualização: <strong>29/03/2026</strong>
        </p>
      </section>

      <section className={styles.section}>
        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao acessar e utilizar este site, o usuário declara ter lido,
          compreendido e aceitado estes Termos de Uso. Caso não concorde com
          qualquer condição aqui prevista, recomenda-se que não utilize este site.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Identificação do site</h2>
        <p>
          Este site é mantido por <strong>Campos Vasconcelos</strong>, com
          finalidade institucional e informativa, para apresentação do escritório,
          de suas áreas de atuação e de seus canais de contato.
        </p>
      </section>

      <section className={styles.section}>
        <h2>3. Finalidade do site</h2>
        <p>
          O site tem caráter informativo e institucional. Seu objetivo é divulgar
          informações sobre o escritório, suas áreas de atuação, formas de
          contato e conteúdos institucionais.
        </p>
        <p>
          As informações disponibilizadas neste site não constituem, por si só,
          consultoria jurídica individualizada, parecer jurídico ou promessa de
          resultado em qualquer demanda.
        </p>
      </section>

      <section className={styles.section}>
        <h2>4. Uso adequado do site</h2>
        <p>O usuário compromete-se a utilizar este site de forma lícita e adequada, abstendo-se de:</p>
        <ul>
          <li>praticar atos contrários à legislação, à boa-fé ou à ordem pública;</li>
          <li>violar direitos de terceiros;</li>
          <li>tentar invadir, testar vulnerabilidades, interromper ou comprometer a segurança do site;</li>
          <li>utilizar o site para envio de conteúdo ilícito, ofensivo, fraudulento ou malicioso;</li>
          <li>empregar mecanismos automatizados de coleta de dados sem autorização.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>5. Formulários e canais de contato</h2>
        <p>
          O usuário é responsável pela veracidade, exatidão e atualização das
          informações que fornecer por meio de formulários ou canais de contato.
        </p>
        <p>
          O envio de mensagem pelo site não estabelece automaticamente relação
          contratual, obrigação de patrocínio de causa, consultoria formal ou
          vínculo profissional.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Área administrativa restrita</h2>
        <p>
          O site possui uma área administrativa de acesso restrito, destinada
          exclusivamente ao uso interno por pessoas autorizadas.
        </p>
        <p>
          Essa área não é pública, não se destina a cadastro aberto de usuários
          e seu acesso depende de autenticação apropriada.
        </p>
        <p>
          É proibida qualquer tentativa de acesso não autorizado, uso indevido,
          compartilhamento de credenciais ou interferência no funcionamento dessa área.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Propriedade intelectual</h2>
        <p>
          Salvo indicação em contrário, os textos, marcas, logotipos, identidade
          visual, elementos gráficos e demais conteúdos disponibilizados neste
          site pertencem a Campos Vasconcelos ou são utilizados legitimamente.
        </p>
        <p>
          É vedada a reprodução, distribuição, modificação, publicação ou uso
          comercial desses materiais sem autorização prévia e expressa, exceto
          nos limites permitidos pela legislação aplicável.
        </p>
      </section>

      <section className={styles.section}>
        <h2>8. Links para terceiros</h2>
        <p>
          Este site poderá, eventualmente, conter links para páginas ou serviços
          de terceiros. A disponibilização desses links não implica endosso,
          controle, responsabilidade ou garantia sobre conteúdos, políticas ou
          práticas de tais ambientes externos.
        </p>
      </section>

      <section className={styles.section}>
        <h2>9. Disponibilidade e funcionamento</h2>
        <p>
          Empreende-se esforço razoável para manter o site disponível e seguro,
          mas não se garante funcionamento ininterrupto, ausência de falhas,
          indisponibilidades temporárias ou completa eliminação de riscos
          técnicos inerentes ao ambiente digital.
        </p>
      </section>

      <section className={styles.section}>
        <h2>10. Limitação de responsabilidade</h2>
        <p>
          Campos Vasconcelos não se responsabiliza por danos decorrentes de uso
          inadequado do site pelo usuário, de falhas imputáveis exclusivamente a
          terceiros, de indisponibilidades temporárias, nem de decisões tomadas
          com base apenas em informações genéricas obtidas neste ambiente.
        </p>
        <p>
          O usuário reconhece que conteúdos institucionais e informativos não
          substituem análise jurídica individualizada do caso concreto.
        </p>
      </section>

      <section className={styles.section}>
        <h2>11. Proteção de dados pessoais</h2>
        <p>
          O tratamento de dados pessoais eventualmente realizado por meio deste
          site observará a legislação aplicável, especialmente a Lei Geral de
          Proteção de Dados Pessoais (LGPD), e será disciplinado também pela
          <strong> Política de Privacidade</strong> deste site.
        </p>
        <p>
          Recomenda-se a leitura conjunta destes Termos de Uso e da Política de Privacidade.
        </p>
      </section>

      <section className={styles.section}>
        <h2>12. Alterações destes Termos</h2>
        <p>
          Estes Termos de Uso poderão ser alterados a qualquer tempo, para
          refletir mudanças legais, regulatórias, técnicas ou operacionais. A
          versão vigente será sempre a publicada nesta página.
        </p>
      </section>

      <section className={styles.section}>
        <h2>13. Legislação aplicável e foro</h2>
        <p>
          Estes Termos serão interpretados de acordo com a legislação brasileira.
        </p>
        <p>
          Fica eleito o foro da comarca de <strong>[preencher cidade/UF]</strong>,
          com renúncia a qualquer outro, por mais privilegiado que seja, para
          dirimir controvérsias oriundas destes Termos, ressalvadas as hipóteses
          de competência legal obrigatória.
        </p>
      </section>

      <section className={styles.section}>
        <h2>14. Contato</h2>
        <p>
          Em caso de dúvidas sobre estes Termos de Uso, entre em contato por
          meio do e-mail <strong>janebcampos@gmail.com</strong>.
        </p>
      </section>
    </main>
  );
}

export default TermosDeUsoPage;