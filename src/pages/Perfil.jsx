import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../componetes/Header";
import Footer from "../componetes/Footer";
import {  useParams } from "react-router-dom";

const Perfil = () => {
    const { idUsuario} = useParams()
    const [usuarios, setUsuarios] = useState([])
    
    // Retrieve the user ID from localStorage
    const idUsuarioLogado = localStorage.getItem("idUsuario"); // This will be a string

    // Optional: Convert to a number if necessary
    


    
    const Instrumento = 
        {
            1: "Violão",
            2: "Bateria",
            3: "Cavaco",
            4: "Cantor(a)",
            5: "Baixo",
            6: "Guitarra",
            

        }
    
    const Categorias = 
    {
        1: "Samba",
        2: "Sertanejo",
        3: "Rock",
        4: "Pagode",
        5: "MPB"
    }

        console.log(usuarios.idInstrumento)
    
    
    useEffect(() => {
        const authHeader = {
            headers: {
                Authorization: `Basic ${btoa('admin@example.com:password')}`,
                // Authorization: `Bearer ${token}`,
            },
        };
        if (!idUsuario) {
            console.error("User  ID is not available");
            return; // Exit if idUsuario is not available
        }

        // Fetch user data using the retrieved user ID
        axios.get(`http://localhost:8000/api/usuarios/${idUsuario}`, authHeader) 
            .then((resposta) => setUsuarios(resposta.data))
            .catch((error) => console.error("ERROR", error));
    }, [idUsuario]); // The effect depends on userId
    
    return (
    <>
        <Header/>
       

        <main className="bg-lite py-5 sectionRadiusTop" key={usuarios.IdUsuario}>
            <div className="container">
                <div className="main-body">
                    <div className='row gutters-sm'>
                        <div className='col-sm-12 col-md-4 '>
                            <div className='card rounded-5 '>
                                <div className='card-body '>
                                    <div className='d-flex flex-column align-items-center text-center'>
                                    <img src={usuarios?.foto || "/default-avatar.png"} alt="Foto do usuário" className="rounded-5 shadow w-100"/>

                                        <div className=' p-4 text-light'>
                                        
                                        <h3 className='text-black'>{usuarios?.nome}</h3>
                                        { 
                                            <p className='text-secondary mb-1'>{Instrumento[usuarios.idInstrumento]} | {Categorias[usuarios.idCategoria]}</p>
                                             }

                                        
                                        <p className='text-secondary mb-1'>{usuarios.cidade} | {usuarios.uf}</p>

                                        
                                        </div>
                                        <div cals>
                                        
                                        </div>
                                        
                                        <a href={`https://wa.me/${usuarios?.whatsapp}`} target="_blank" rel="noopener noreferrer" className='btnDefault'>
                                                Contrate-me
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='card  text-light rounded-5 p-3 mt-3'>
                                <ul className='list-group list-group-flush rounded-5'>
                                <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                                    <h6 className='mb-0'><i className='mx-1 bi bi-whatsapp'></i> WhatsApp</h6>
                                    <a href={`https://wa.me/${usuarios?.whatsapp}`} target="_blank" rel="noopener noreferrer" className='text-secondary'>
                                    {usuarios?.whatsapp || "Não disponível"}
                                    </a>
                                    </li>
                                    <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                                        <h6 className='mb-0'><i className='mx-1 bi bi-instagram'></i> Instagram</h6>
                                        <a href={`https://www.instagram.com/${usuarios?.instagram}`} target="_blank" rel="noopener noreferrer" className='text-secondary'>
                                            {usuarios?.instagram || "Não disponível"}
                                        </a>
                                    </li>
                                    <li className='list-group-item d-flex justify-content-between align-items-center flex-wrap'>
                                        <h6 className='mb-0'><i className='mx-1 bi bi-facebook'></i> Facebook</h6>
                                        <a href={usuarios?.facebook || "#"} target="_blank" rel="noopener noreferrer" className='text-secondary'>
                                            {usuarios.facebook}
                                        </a>
                                    </li>

                                </ul>
                                
                            
                            </div>
                            

                            </div>

                            <div className='col-md-8 '>
                            
                                <div className='card rounded-5 mb-3'>

                                    <div className='card-body '>
                                        
                                        
                                        
                                    <div id='carouselExampleCaptions' className='carousel slide'>

                                        <div className='carousel-indicators'>
                                        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                                        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
                                        <button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
                                        </div>

                                        <div className='carousel-inner rounded-5 '>
                                        <div className='carousel-item active'>
                                            <img src="https://img.freepik.com/fotos-gratis/mulher-cantando-no-microfone_107420-96132.jpg?t=st=1742245238~exp=1742248838~hmac=3aa8d701afcfdb57b01eb3a30fd85674e4b458feed2e97cc1bf6d58a34b7b9c8&w=996" className='d-block w-100' alt='...'/>
                                            
                                        </div>

                                        <div className='carousel-item'>
                                        <img src="https://img.freepik.com/fotos-gratis/mulher-cantando-no-microfone_107420-96132.jpg?t=st=1742245238~exp=1742248838~hmac=3aa8d701afcfdb57b01eb3a30fd85674e4b458feed2e97cc1bf6d58a34b7b9c8&w=996" className='d-block w-100' alt='...'/>
                                            
                                        </div>

                                        <div className='carousel-item'>
                                        <img src="https://img.freepik.com/fotos-gratis/mulher-cantando-no-microfone_107420-96132.jpg?t=st=1742245238~exp=1742248838~hmac=3aa8d701afcfdb57b01eb3a30fd85674e4b458feed2e97cc1bf6d58a34b7b9c8&w=996" className='d-block w-100' alt='...'/>
                                            
                                        </div>
                                        
                                        </div>

                                        <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
                                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Previous</span>
                                        </button>

                                        <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
                                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                                        <span className='visually-hidden'>Next</span>
                                        </button>

                                    </div>
                                    

                                    </div>


                                </div>

                                <div className='card rounded-5 mb-3'>

                                    <div className='card-body p-4 '>
                                        <h4 className='mb-4 '>Sobre Mim</h4>
                                        <div className='p-4 bg-body-tertiary rounded-5'>

                                            <p className='fonti-italic mb-1'> {usuarios.descricao} </p>
                                            
                                        </div>

                                    </div>
                                </div>

                            </div>



                        </div>
                                    <div className='col-sm-12 col-md-12 mt-3' >
                                        <div className='card text-dark  rounded-5 p-3 '>
                                            <div className='card-body rounded '>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Nome</h6>
                                                    </div>
                                                    <div className='  col-sm-9 text-secondary'>
                                                    {usuarios.nome}                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Usuario</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.usuarios}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Email</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.email}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Idade</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.idade}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>WhatsApp</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.whatsapp}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Cidade</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.cidade}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Estado</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.uf}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Instrumento</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.idInstrumento}
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='row'>
                                                    <div className='col-sm-3'>
                                                    <h6 className='mb-0'>Categoria</h6>
                                                    </div>
                                                    <div className='col-sm-9 text-secondary'>
                                                    {usuarios.idCategoria}
                                                    
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className='col-sm-12  py-4'>
                                                {idUsuario === idUsuarioLogado && (
                                                    <div className="text-start">
                                                        <a href={`/editar/${idUsuario}`} className="btnDefault">Editar Perfil</a>
                                                    </div>
                                                )

                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                  
                
        </main>

        <Footer/>
    </>
    )
};

export default Perfil;