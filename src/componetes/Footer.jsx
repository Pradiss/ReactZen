

const Footer = () => {
    return (

        <footer class=" bgBlack  text-white  text-lg-start pt-5 sectionRadiusTop">
  
            <div class="container  ">
            
                <div class="row">
                
                <div class="col-lg-3 col-md-12 mb-4 mb-md-0 py-4  ">
                    <img src="./src/assets/react.svg" alt=""  class="img-fluid mb-4 w-25"/>
                    

                    <ul class="list-unstyled">
                        <li class="mb-4 mt-3">
                            <i class="bi bi-instagram fs-3 me-3"><a href="#!" class="text-white"></a></i>
                        
                            <i class="bi bi-facebook fs-3  me-3"><a href="#!" class="text-white"></a></i>

                            <i class="bi bi-whatsapp fs-3  me-3"><a href="#!" class="text-white"></a></i>

                            <i class="bi bi-linkedin fs-3  me-3"><a href="#!" class="text-white"></a></i>
                        </li>
                    
                    </ul>

                    <hr className="w-75"/>
                
                    <p class="col-11">
                     Junte-se a nós e faça parte desse movimento que valoriza talentos e impulsiona a cena musical. 
                    </p>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 py-4">
                    <h5 class="text-uppercase mb-0 mb-4 fw-bold ">Zene</h5>

                    <ul class="list-unstyled">
                    <li class="mb-4">
                        <a href="/" class="text-white text-decoration-none">Ínicio</a>
                    </li>
                    <li class="mb-4">
                        <a href="/categorias" class="text-white text-decoration-none">Categoria</a>
                    </li>
                    <li class="mb-4">
                        <a href="/contato" class="text-white text-decoration-none">Contato</a>
                    </li>
                    <li class="mb-4">
                        <a href="/sobre" class="text-white text-decoration-none">Sobre Nós</a>
                    </li>
                    <li class="mb-4">
                        <a href="/perfil" class="text-white text-decoration-none">Perfil</a>
                    </li>
                    
                    
                    </ul>
                </div>
                
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 py-4 ">
                    <h5 class="text-uppercase mb-0 mb-4 fw-bold">Sobre</h5>

                    <ul class="list-unstyled">
                    <li class="mb-4">
                        <a href="/contato" class="text-white text-decoration-none">Trabalhe conosco</a>
                    </li>
                    <li class="mb-4">
                        <a href="/suporte" class="text-white text-decoration-none">Suporte</a>
                    </li>
                    
                 
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 py-4 ">
                    <h5 class="text-uppercase mb-0 mb-4 fw-bold">Contato</h5>
                    <ul class="list-unstyled">
                    <li class="mb-4">
                    <a
                        href="https://maps.app.goo.gl/UuAWvXXGZGD1BNG38"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none"
                        ><i className="bi bi-map fs-2 me-2"></i>
                        R. Quadros Sobrinho, 1 - Centro, Limeira - SP, 13480-223ua Sacramento, 490 - Centro, Campinas - SP
                        </a>

                    </li>
                    <li class="mb-4">
                        <a href="mailto:zen@gmail.com" class="text-white text-decoration-none"><i className="bi bi-envelope fs-2 me-2"></i>E-mail: zen@gmail.com
                        </a>
                    </li>
                    <li class="mb-4">
                        <a href="tel:19989111857" class="text-white text-decoration-none"><i className="bi bi-phone fs-2 me-2"></i>Telefone: (19)199891-11857</a>
                    </li>
                    <li class="mb-5">
                        <a href="#!" class="text-white"></a>
                    </li>
                    
                    </ul>
                    
                </div>
                
                </div>
            
            </div>

            <div class="d-flex justify-content-center align-items-center">

                <hr className="w-75"/>
            </div>
            
            <div class="container d-flex align-items  py-4  " >
                    <div class="d-flex justify-content-center align-items-center">

                        <hr className="w-100"/>
                    </div>

                
                <div className="col-3">
                    <a href="/politica" class="text-white fw-bold text-decoration-none">Política de Privacidade</a>
                </div>


                <div className="col-6 text-center">
                © 2025 Copyright: <a class="text-white fw-bold text-decoration-none" href="/">Zene</a>
                </div>

                <div className="col-3 text-end">
                    <a href="/termos" class="text-white fw-bold text-decoration-none ">Termos de Uso</a>
                </div>
            </div>
            
        </footer>


        

      

    )
}

export default Footer