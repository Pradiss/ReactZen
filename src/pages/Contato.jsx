import Header from "../componetes/Header"
import Footer from "../componetes/Footer"

const Contato = () => {
    return (
        <>
            <Header />
            <section className="container espacamento">
                <div className="row">
                    <div className="col-6">
                        <form id="form1" name="form1" method="post" action="#">
                            <div className='p-3'>
                                <div className='p-1'>
                                    <h2 className="display-3">Contato</h2>
                                    <p className="mb-5">Send a message and our team will get back to within 24 hrs</p>
                                    <input type="nome" id="nome" name="nome" className="form-control p-3  rounded-5 bg-tertiary" placeholder="Digite seu Nome" />
                                </div>
                                <div className=''>
                                    <div className='p-1'>
                                        <input type="email" id="email" name="email" className="form-control p-3 rounded-5" placeholder="Digite sua E-mail" />
                                    </div>
                                    <div className='p-1'>
                                        <textarea type="text" id="descricao"  name="descricao" class="form-control p-3 rounded-5 " rows="6" cols="50" placeholder="Deixe sua Descrição" value=""></textarea>

                                    </div>
                                </div>
                                    
                                        <button type="submit" id="btnAcessar" name="btnAcessar" className="rounded-5 w-100 fw-bold text-white btn btn-lg btn-dark">Envie sua Mensagem</button>
                                  
                            </div>
                        </form>
                    </div>
                    <div className="col-6">
                        <div className="bgGray rounded-5 p-5">
                            <h5 className="text-secondary text-regular">Localização</h5>
                            <hr />
                            <p className="text-dark">
                                📍 <strong>Senac Campinas</strong> <br />
                                Rua Sacramento, 490 - Centro, Campinas - SP
                            </p>
                            
                            <h5 className="text-secondary mt-4">Horário de Funcionamento</h5>
                            <hr />
                            <p className="text-dark">
                                🕒 <strong>Segunda a Sexta</strong> <br />
                                09:00 até as 18:00
                            </p>
                            <p className="text-secondary mb-4">Nosso time de suporte é 24Hrs</p>

                            <h5 className="text-secondary text-regular">Nosso contato</h5>
                            <hr />
                            <p className="text-dark">
                                📞 <strong>(19) 98911-1857</strong>
                            </p>
                            <p className="text-secondary mb-4">
                                ✉️ <strong>zen@gmail.com</strong>
                            </p>

                            <h5 className="text-secondary">Redes Sociais</h5>
                            <hr />
                            <ul className="list-unstyled d-flex">
                                <li className="me-3">
                                    <a href="https://www.instagram.com/senacsp" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-instagram fs-3"></i>
                                    </a>
                                </li>
                                <li className="me-3">
                                    <a href="https://www.facebook.com/senacsp" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-facebook fs-3"></i>
                                    </a>
                                </li>
                                <li className="me-3">
                                    <a href="https://wa.me/5519989111857" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-whatsapp fs-3"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/school/senacsp/" target="_blank" rel="noopener noreferrer" className="text-dark">
                                        <i className="bi bi-linkedin fs-3"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contato