import styles from "./PoliticaPrivacidadePage.module.css";
const email = "janebcampos@gmail.com";

function PoliticaPrivacidadePage() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Política de Privacidade</h1>
        <p className={styles.subtitle}>
          Esta Política de Privacidade explica como os dados pessoais são
          tratados no contexto do uso deste site e do atendimento prestado por
          Campos Vasconcelos, em conformidade com a Lei Geral de Proteção de
          Dados Pessoais (LGPD).
        </p>
        <p className={styles.lastUpdate}>
          Última atualização: <strong>29/03/2026</strong>
        </p>
      </section>

      <section className={styles.section}>
        <h2>1. Quem é o controlador dos dados</h2>
        <p>
          O controlador dos dados pessoais tratados por meio deste site é
          <strong> Campos Vasconcelos</strong>, com endereço em
          <strong>Rua Maria Elizabeth Pessoa, 462/208</strong> e contato pelo e-mail
          <strong>{email}</strong>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>2. Quais dados podem ser coletados</h2>
        <p>Podemos tratar, conforme o caso:</p>
        <ul>
          <li>dados de identificação, como nome;</li>
          <li>dados de contato, como e-mail e telefone;</li>
          <li>informações enviadas voluntariamente em formulários ou mensagens;</li>
          <li>dados estritamente necessários à administração e segurança da área interna restrita, quando aplicável.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>3. Finalidades do tratamento</h2>
        <p>Os dados pessoais podem ser tratados para:</p>
        <ul>
          <li>responder solicitações enviadas pelo site;</li>
          <li>realizar atendimento inicial e contato com interessados;</li>
          <li>prestar serviços jurídicos, quando houver contratação;</li>
          <li>cumprir obrigações legais e regulatórias;</li>
          <li>proteger direitos e exercer defesa em processos judiciais, administrativos ou arbitrais;</li>
          <li>garantir a segurança e o controle de acesso da área administrativa interna.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>4. Bases legais do tratamento</h2>
        <p>
          O tratamento poderá ocorrer, conforme o caso concreto, com base em
          hipóteses legais previstas na LGPD, incluindo
          <strong> execução de procedimentos preliminares relacionados a contrato</strong>,
          <strong> cumprimento de obrigação legal ou regulatória</strong>,
          <strong> exercício regular de direitos</strong> e
          <strong> legítimo interesse</strong>, observados os limites legais aplicáveis.
        </p>
      </section>

      <section className={styles.section}>
        <h2>5. O site utiliza cookies?</h2>
        <p>
          <strong>Não.</strong> Este site não utiliza cookies de rastreamento,
          cookies publicitários, cookies de perfilamento ou ferramentas de
          análise baseadas em cookies para monitorar a navegação pública do usuário.
        </p>
        <p>
          Caso essa prática seja alterada futuramente, esta Política será
          atualizada para refletir de forma clara os novos tratamentos realizados.
        </p>
      </section>

      <section className={styles.section}>
        <h2>6. Área administrativa restrita</h2>
        <p>
          O site possui uma área administrativa de acesso restrito, destinada
          exclusivamente ao uso interno por <strong>dois advogados autorizados</strong>.
        </p>
        <p>
          O acesso a essa área é protegido por mecanismo de autenticação com
          <strong> token</strong>, utilizado apenas para verificação de identidade,
          controle de acesso e segurança do ambiente administrativo.
        </p>
        <p>
          Essa área não é destinada ao público em geral e não constitui sistema
          de cadastro aberto para clientes ou visitantes do site.
        </p>
      </section>

      <section className={styles.section}>
        <h2>7. Compartilhamento de dados</h2>
        <p>Os dados poderão ser compartilhados, quando necessário, com:</p>
        <ul>
          <li>prestadores de serviços de hospedagem e infraestrutura tecnológica;</li>
          <li>fornecedores estritamente necessários à operação do site;</li>
          <li>autoridades públicas, judiciais ou regulatórias, quando houver obrigação legal ou requisição válida;</li>
          <li>terceiros envolvidos na prestação do serviço jurídico, quando isso for necessário ao caso concreto.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>8. Armazenamento e retenção</h2>
        <p>
          Os dados pessoais serão armazenados pelo tempo necessário para cumprir
          as finalidades informadas nesta Política, respeitando os prazos legais,
          regulatórios e os períodos necessários ao exercício regular de direitos.
        </p>
      </section>

      <section className={styles.section}>
        <h2>9. Segurança da informação</h2>
        <p>
          São adotadas medidas técnicas e administrativas aptas a proteger os
          dados pessoais contra acessos não autorizados e situações acidentais
          ou ilícitas de destruição, perda, alteração, comunicação ou difusão.
        </p>
        <p>
          O controle de acesso à área administrativa interna faz parte dessas
          medidas de segurança.
        </p>
      </section>

      <section className={styles.section}>
        <h2>10. Direitos do titular</h2>
        <p>Nos termos da LGPD, o titular poderá solicitar, quando cabível:</p>
        <ul>
          <li>confirmação da existência de tratamento;</li>
          <li>acesso aos dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação, nos casos previstos em lei;</li>
          <li>portabilidade, observadas as regras aplicáveis;</li>
          <li>informação sobre compartilhamento;</li>
          <li>revogação do consentimento, quando essa for a base legal utilizada.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>11. Como exercer seus direitos</h2>
        <p>
          Para exercer seus direitos relacionados à proteção de dados pessoais,
          envie solicitação para <strong>[preencher e-mail de contato]</strong>.
        </p>
        <p>
          Poderemos solicitar informações adicionais para confirmar a identidade
          do solicitante e garantir a segurança do atendimento.
        </p>
      </section>

      <section className={styles.section}>
        <h2>12. Encarregado pelo tratamento de dados</h2>
        <p>
          O contato do responsável pelo canal de comunicação sobre privacidade e
          proteção de dados é: <strong>Jane Bruno Campos</strong> —
          <strong>{email}</strong>.
        </p>
      </section>

      <section className={styles.section}>
        <h2>13. Alterações desta Política</h2>
        <p>
          Esta Política poderá ser alterada a qualquer tempo para refletir
          mudanças legais, regulatórias, operacionais ou tecnológicas. A versão
          vigente será sempre a publicada nesta página.
        </p>
      </section>
    </main>
  );
}

export default PoliticaPrivacidadePage;