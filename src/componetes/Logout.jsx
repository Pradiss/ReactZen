import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true });

            // Removendo qualquer dado de autenticação do localStorage (se houver)
            localStorage.removeItem("user");

            // Redireciona para login
            navigate("/login");
        } catch (error) {
            console.error("Erro ao fazer logout", error);
        }
    };

    return (
        <button onClick={handleLogout} className="btn btn-danger">
            Logout
        </button>
    );
};

export default Logout;
