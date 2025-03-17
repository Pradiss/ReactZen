import Footer from "../componetes/Footer";
import Header from "../componetes/Header";

const Sobre = () => {
  return (
    <>
    <Header/>
    <div className="sectionRadiusTop">

  
    <div className="container  ">
      
      <section className="text-start space">
        <h1 className=" fw-medium">Sobre Nós</h1>
        <p className="text-muted fs-5">
          Conheça a história por trás da plataforma que está revolucionando o mercado musical.
        </p>
      </section>

      
      <section className="row align-items-center   ">
        <div className="col-lg-6 " data-aos="fade-right ">
          <img
            src="https://www.sp.senac.br/documents/283993/284004/Fachada-em-baixa.jpg/65c5079e-327f-0c3d-1aee-c6c2c0091e56?version=1.0&t=1616186575484&imagePreview=1"
            alt="Fundadores"
            className="img-fluid rounded-5 shadow-lg"
          />
        </div>
        <div className="col-lg-6 mt-5" data-aos="fade-left">
          <h2 className="fw-bold display-4">Dos Salões do Senac para o Mundo</h2>
          <p className="text-muted mt-4 fs-5">
            Nossa jornada começou no <strong>Senac Campinas</strong>, onde um grupo de alunos apaixonados por música e tecnologia teve a ideia de criar uma plataforma que conectasse músicos a novas oportunidades. 
            O que começou como um projeto acadêmico, rapidamente se tornou uma solução inovadora para a cena musical nacional.
          </p>
        </div>
      </section>

      
      <section className="row align-items-center  flex-lg-row-reverse space">
        <div className="col-lg-6" data-aos="fade-left">
          <img
            src="https://img.freepik.com/fotos-gratis/cara-com-violao-canta-amigos-se-divertem-na-festa-no-terraco-com-lampadas-coloridas-decorativas_146671-14569.jpg?t=st=1742244705~exp=1742248305~hmac=48012c4ccbd1290b85ac897fc4dcd31942fec03de492f050a8c2920947483b07&w=996"
            alt="Música conectando pessoas"
            className="img-fluid rounded-5 shadow-lg"
          />
        </div>
        <div className="col-lg-6 mt-5 " data-aos="fade-right">
          <h2 className="fw-bold display-4">Nosso Propósito</h2>
          <p className="text-muted mt-4 fs-5">
            Somos uma plataforma dedicada a transformar o mercado da música nacional, conectando músicos de todos os estilos e experiências a novas oportunidades. 
            Acreditamos no poder da música para <strong>inspirar, unir e gerar impacto</strong>. Nossa missão é oferecer mais visibilidade a artistas independentes e profissionais do setor, ajudando-os a expandir suas carreiras.
          </p>
        </div>
      </section>

      
   

                <section class="space">
                    <div class="container borderRadius  p-5 sombra  bgBlack d-flex"> 
                        <div class="row">
                            <div class="mt-5 col-lg-6 col-md-12 col-sm-0 px-4 px-0 pb-4 text-white">
                            <h2 class="display-5 ">Uma Comunidade que Não Para de Crescer</h2>
                            <p class='mt-4'>Já somos mais de 1 milhão de pessoas e estamos crescendo! Junte-se a nós e faça parte desse movimento que valoriza talentos e impulsiona a cena musical.</p>
                                <div className="my-5 pt-4">

                                    <a href="/categorias" class="btnWhite">Junte-se à Nossa Comunidade<i className="bi bi-arrow-right ms-4"></i></a>
                                </div>
                        
                               
                         
                              
                                
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-0 space borderRadius" id="img">
                                
                            </div>
                    
                        </div>
                    </div>
                    
                </section>

        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Sobre;
