import React, {useState, useEffect } from "react"
import Footer from "../componetes/Footer"
import Header from "../componetes/Header"
import axios from "axios";
import FiltroPreco from "../componetes/FiltroPreco";
import FiltroGenero from "../componetes/FiltroGenero";
import FiltroCidades from "../componetes/FiltroCidade";
import FiltroInstrumentos from "../componetes/FiltroInstrumentos";
import { Link } from "react-router-dom";


const Categorias = () => {


    const [usuarios, setUsuarios] = useState([])
    const [filtroPrecoMax, setFiltroPrecoMax] = useState("")
    const [filtroPrecoMin, setFiltroPrecoMin] = useState("")
    const [filtroGenero, setFiltroGenero] = useState("")
    const [filtroCidade, setFiltroCidade] = useState("")
    const [filtroEstado, setFiltroEstado] = useState("")
    const [filtroInstrumento, setFiltroInstrumento] = useState("")

//     // const token = localStorage.getItem("token");
//     const token = "247fc3f23a4187f3a070dc46c067928e3d1614adfed2691e2d482dfc3d5d4575542343452ca44f3e";
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     const authHeader = {
//     headers: {
//       // Authorization: `Basic ${btoa('admin@example.com:password')}`,
//       Authorization: `Bearer ${token}`,
//     },
//   }

    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/usuarios`) 
             .then((resposta) => setUsuarios(resposta.data))
             .catch((error) => console.error("ERROR", error))
     }, [])

     const filtrarUsuarios = () => {
        const params = {}

        if(filtroPrecoMin) params.preco_min = filtroPrecoMin
        if(filtroPrecoMax) params.preco_max = filtroPrecoMax
        if(filtroGenero) params.genero = filtroGenero
        if(filtroCidade) params.cidade = filtroCidade
        if(filtroEstado) params.uf = filtroEstado
        if(filtroInstrumento) params.instrumentos = filtroInstrumento
        console.log(params)

        axios.get(`http://localhost:8000/api/category`,{params})
            .then((resposta) => setUsuarios(resposta.data))
            .catch((error) => console.error("Deu erro", error))
     }
   
    return (
    <>
        <Header/>
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-4 rounded-5 p-4 shadow">
                            <h2 className="display-5 fw-bold"><i className="bi bi-x-diamond-fill me-2"></i>Filtros</h2>
                            
                            <div class="input-group mt-4">
                                <input type="text" class="form-control rounded-start-5" value=""/>
                                <span class="input-group-btn">
                                    <button class="btn btn-white border rounded-end-5" type="button"><i class="bi bi-search"></i></button>
                                </span>
                            </div>
                            <div className="mt-4 p-2">
                                <h4 className="fw-bold ">Categorias</h4>
                                <hr></hr>

                                <FiltroInstrumentos
                                filtroInstrumento={filtroInstrumento}
                                setFiltroInstrumento={setFiltroInstrumento}/>

                                <FiltroGenero
                                filtroGenero={filtroGenero}
                                setFiltroGenero={setFiltroGenero}/>


                                <FiltroPreco
                                filtroPrecoMax={filtroPrecoMax}
                                setFiltroPrecoMax={setFiltroPrecoMax}
                                filtroPrecoMin={filtroPrecoMin}
                                setFiltroPrecoMin={setFiltroPrecoMin}/> 


                                <FiltroCidades
                                filtroCidade={filtroCidade}
                                setFiltroCidade={setFiltroCidade}
                                filtroEstado={filtroEstado}
                                setFiltroEstado={setFiltroEstado}
                                />



                                <button className="btnDefault" onClick={filtrarUsuarios}>Filtrar</button>


                            </div>
                        </div>
                        <div className="col-md-8 p-4">
                            <h2 className="display-5 fw-bold"> Resultado</h2>
                            <hr/>
                            <div className="row">
                                    
                                
                                {usuarios.map((objUsuarios)=>(
                                <div className='col-12 col-sm-6 col-md-6 col-lg-4 p-2 ' key={objUsuarios.idUsuario}>
                                    <div className=' rounded-5 p-3 sombra ' >
                                    <img src={objUsuarios.foto} className='card-img-top rounded-5' alt='...'/>
                                        <div className='my-3 text-center'>
                                            <h4 className='card-title text-blak mb-3'>{objUsuarios.nome}</h4>
                                            <p className='text-secondary mb-1 text-dark '>{objUsuarios.idInstrumento} | {objUsuarios.idCategoria} </p>
                                            
                                            <p className='card-text text-secondary mb-4'><i className="bi bi-house-fill"></i> {objUsuarios.cidade} | R$ {objUsuarios.preco}</p>
                                          <Link  to={`/perfil/${objUsuarios.idUsuario}`} id="btnCard">Perfil</Link>
                                           
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        <Footer/>
    </>
    )
}

export default Categorias