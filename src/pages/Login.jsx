import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
   

    const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                "http://localhost:8000/api/login",
                { email, senha },
                { headers: { "Content-Type": "application/json" } }
            );
    
            console.log("Resposta da API:", response.data);
    
            
            navigate("/");
        } catch (error) {
            console.error("Erro ao fazer login:", error.response?.data || error);
            alert(error.response?.data?.message || "Falha no login.");
        }
    };

    return (
        <section className="vh-100 bg-lite">
            <div className="container py-2 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="bg-white text-dark rounded-5 p-5 text-center">
                            <h2 className="mb-2 display-4 fw-medium text-capitalize">Olá Músico</h2>
                            <p className="text-dark-50 mb-4">Bem-vindo ao <strong>Zen</strong>!!</p>

                            <form onSubmit={handleLogin}>
                                <div className='p-3'>
                                    <input
                                        type="email"
                                        className="form-control p-3 rounded-5"
                                        placeholder="Digite seu Usuário"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='p-3'>
                                    <input
                                        type="password"
                                        className="form-control p-3 rounded-5"
                                        placeholder="Digite sua Senha"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                    <div className="text-end">
                                        <a href="#" className="text-dark"><small>Esqueceu sua senha?</small></a>
                                    </div>
                                </div>
                                <div className="m-3">
                                    <button type="submit" className="rounded-5 w-100 btn btn-lg btn-dark">
                                        Acessar
                                    </button>
                                </div>
                            </form>

                            <small>Não tem uma conta na Zene? </small>
                            <a href="/cadastro" className="text-dark">Cadastre-se</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
