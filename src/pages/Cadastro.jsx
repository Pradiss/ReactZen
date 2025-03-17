import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cadastro = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState(""); // Estado para mensagens de erro

    const handleCadastro = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8000/api/register",
                {
                    nome,
                    senha,
                    email,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Resposta da API:", response.data);

            alert("Cadastro realizado com sucesso!");
            navigate("/login"); // Redireciona para a página de login
        } catch (error) {
            console.error("Erro ao cadastrar:", error.response?.data || error);
            setErro(
                error.response?.data?.message ||
                "Erro ao cadastrar. Verifique os dados e tente novamente."
            );
        }
    };

    return (
        <section className="vh-100 bg-lite">
            <div className="container">
                <div className="row d-flex justify-content-center py-5">
                    <div className="card rounded-5 p-5 col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center">
                            <h4 className="text-center text-uppercase">Faça seu cadastro</h4>
                            <p>Cadastre-se</p>
                        </div>

                        {/* Exibe mensagens de erro */}
                        {erro && <div className="alert alert-danger">{erro}</div>}

                        <form onSubmit={handleCadastro}>
                            <div className="p-3">
                                <input
                                    type="text"
                                    className="form-control p-3 rounded-5"
                                    placeholder="Digite seu Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="p-3">
                                <input
                                    type="email"
                                    className="form-control p-3 rounded-5"
                                    placeholder="Digite seu Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="p-3">
                                <input
                                    type="password"
                                    className="form-control p-3 rounded-5"
                                    placeholder="Crie sua Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <button type="submit" className="rounded-5 w-100 text-white btn btn-lg btn-dark">
                                    Cadastrar-se
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-4">
                            <small className="mb-0">Já tem uma conta na Zene? </small>
                            <a href="/login" className="text-dark">Faça seu login</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cadastro;
