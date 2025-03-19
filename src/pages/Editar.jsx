import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../componetes/Header";


const EditarPerfil = () => {
    const idUsuario = localStorage.getItem("idUsuario");
    
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [idade, setIdade] = useState("");
    const [descricao, setDescricao] = useState("");
    const [email, setEmail] = useState("");
    
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [preco, setPreco] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [idCategoria, setIdCategoria] = useState("");
    const [idInstrumento, setIdInstrumento] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    // Buscar dados do usuário ao carregar a página
    useEffect(() => {
        axios.get(`http://localhost:8000/api/usuarios/${idUsuario}`)
            .then((res) => {
                const data = res.data;
                setNome(data.nome);
                setFoto(data.foto);
                setIdade(data.idade);
                setDescricao(data.descricao);
                setEmail(data.email);
              
                setCidade(data.cidade);
                setUf(data.uf);
                setPreco(data.preco);
                setWhatsapp(data.whatsapp);
                setInstagram(data.instagram);
                setFacebook(data.facebook);
                setIdCategoria(data.idCategoria);
                setIdInstrumento(data.idInstrumento);
            })
            .catch(() => setErro("Erro ao carregar os dados do usuário."));
    }, [idUsuario]);

    // Função para atualizar perfil
    const handleEditarPerfil = (e) => {
        e.preventDefault();

        const dadosAtualizados = {
            
            nome,
            foto,
            idade: parseInt(idade),
            descricao,
            email,
            
            cidade,
            uf,
            preco: parseFloat(preco),
            whatsapp,
            instagram,
            facebook,
            idCategoria: parseInt(idCategoria),
            idInstrumento: parseInt(idInstrumento),
        };

        axios.put(`http://localhost:8000/api/usuarios/${idUsuario}`, dadosAtualizados
            
        )
            .then(() => {
                setSucesso("Perfil atualizado com sucesso!");
                setErro("");
               
            })
            .catch(() => {
                setErro("Erro ao atualizar perfil.");
                setSucesso("");
            });
    };

    return (
        <>
        <Header/>
        <section className="vh-100 bg-lite">
            <div className="container">
                <div className="row d-flex justify-content-center py-5">
                    <div className="card rounded-5 p-5 col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center">
                            <h4 className="text-center text-uppercase">Editar Perfil</h4>
                            <p>Atualize suas informações</p>
                        </div>

                        {/* Exibe mensagens de erro ou sucesso */}
                        {erro && <div className="alert alert-danger">{erro}</div>}
                        {sucesso && <div className="alert alert-success">{sucesso}</div>}

                        <form onSubmit={handleEditarPerfil}>
                            {/* <div className="p-3">
                                <input type="text" className="form-control p-3 rounded-5" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
                            </div> */}
                            <div className="p-3 d-flex ">
                                <input type="text" className="form-control p-3 me-3 rounded-5" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
                                <div>

                                <input type="number" className="form-control p-3 rounded-5" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                                </div>
                            </div>
                            <div className="p-3">
                                <input type="email" className="form-control p-3 rounded-5" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            {/* <div className="p-3">
                                <input type="password" className="form-control p-3 rounded-5" placeholder="Senha (deixe em branco para não alterar)" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div> */}

                            <div className="p-3 d-flex">
                                    
                                    <select 
                                        id="idInstrumento"
                                        name="idInstrumento"
                                        className="form-control p-3 me-3 rounded-5"
                                        value={idInstrumento}
                                        onChange={(e) => setIdInstrumento(e.target.value)}
                                    >
                                        <option value="" >Todos</option>
                                        <option value="1">Violão</option>
                                        <option value="2">Bateria</option>
                                        <option value="3">Cavaco</option>
                                        <option value="4">Cantor(a)</option>
                                        <option value="5">Baixo</option>
                                    </select>

                                    <select 
                                        id="idCategoria"
                                        name="idCategoria"
                                        className="form-control p-3 rounded-5"
                                        value={idCategoria}
                                        onChange={(e) => setIdCategoria(e.target.value)}
                                    >
                                        <option value="">Todas</option>
                                        <option value="1">Samba</option>
                                        <option value="2">Sertanejo</option>
                                        <option value="3">Rock</option>
                                        <option value="4">Pagode</option>
                                        <option value="5">MPB</option>
                                        <option value="6">DJ</option>
                                    
                                    </select>
                                </div>
                            
                           
                            <div className="p-3 d-flex justify-content-between">
                                <input type="text" className="form-control p-3 me-3 rounded-5" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}  />
                                <div>
                                    <input type="text" className="form-control p-3 rounded-5" placeholder="Estado (UF)" value={uf} onChange={(e) => setUf(e.target.value)}  />

                                </div>
                            </div>
                            <div className="p-3 d-flex justify-content-between">
                                <input type="text" className="form-control p-3 me-3 rounded-5" placeholder="Facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)}  />
                                <input type="text" className="form-control p-3 rounded-5" placeholder="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)}  />
                            </div>
                            
                            <div className="p-3 d-flex justify-content-between">
                                <input type="text" className="form-control p-3 me-3 rounded-5" placeholder="WhatsApp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}  />
                                <div>
                                <input type="number" step="0.01" className="form-control p-3 rounded-5" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)}  />

                                </div>
                            </div>
                            
                            <div className="p-3">
                                <input type="text" className="form-control p-3 rounded-5" placeholder="Coloque o link da foto" value={foto} onChange={(e) => setFoto(e.target.value)}  />
                            </div>

                            <div className="p-3 d-flex justify-content-between">
                                <textarea className="form-control p-3 rounded-5" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}  />
                            </div>
                           
                            <div className="my-3">
                                <button type="submit" className="rounded-5 w-100 text-white btn btn-lg btn-dark">
                                    Salvar Alterações
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default EditarPerfil;
