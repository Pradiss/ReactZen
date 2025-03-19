import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Suporte = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-medium display-4">Central de Suporte da Zen</h2>
      <p className="text-center text-muted">
        Tire suas dúvidas e encontre respostas rápidas sobre nossa plataforma.
      </p>

      <div className="accordion mt-4" id="supportAccordion">
        {/* Pergunta 1 */}
        <div className="accordion-item rounded-5 border-0 shadow p-3">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button rounded-5 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              Como faço para me cadastrar na plataforma?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#supportAccordion">
            <div className="accordion-body">
              Para se cadastrar, basta acessar a página de inscrição, preencher
              seus dados e criar seu perfil. Após a confirmação, você poderá
              personalizar seu perfil e explorar as oportunidades disponíveis.
            </div>
          </div>
        </div>

        {/* Pergunta 2 */}
        <div className="accordion-item rounded-5 border-0 shadow mt-3 p-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed rounded-5 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo" >
              Como posso encontrar oportunidades de trabalho?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#supportAccordion">
            <div className="accordion-body">
              Você pode buscar clientes, eventos e parcerias na aba "Oportunidades".
              Basta filtrar por categoria e entrar em contato com os
              contratantes interessados no seu talento.
            </div>
          </div>
        </div>

        {/* Pergunta 3 */}
        <div className="accordion-item rounded-5 border-0 shadow mt-3 p-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed rounded-5 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Há alguma taxa para utilizar a plataforma?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              O cadastro e a criação de perfil são gratuitos. Algumas funções
              avançadas podem exigir um plano premium, mas você sempre terá
              acesso a oportunidades básicas sem custo.
            </div>
          </div>
        </div>

        {/* Pergunta 4 */}
        <div className="accordion-item rounded-5 border-0 shadow p-3 mt-3">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed rounded-5 fw-bold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Como posso entrar em contato com o suporte?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse "
            aria-labelledby="headingFour"
            data-bs-parent="#supportAccordion"
          >
            <div className="accordion-body">
              Se precisar de ajuda, entre em contato pelo nosso e-mail de
              suporte ou pelo chat disponível na plataforma. Nossa equipe está
              pronta para te atender.
            </div>
          </div>
        </div>
      </div>

      {/* Seção de contato */}
      <div className="text-center mt-5 ">
        <h5>Precisa de mais ajuda?</h5>
        <p>Entre em contato pelo e-mail <a href="mailto:zen@gmail.com"><strong>zen@gmail.com</strong></a></p>
        <div className="m-5">
       <a href="/contato" className="btnDefault me-3">Fale Conosco</a>
       <a href="/" className="btnDefault">Voltar Página de Início</a>


        </div>
      </div>
    </div>
  );
};

export default Suporte;
