import React from "react";
import { Link } from "react-router-dom";
const SearchResults = ({ results }) => {
  return (
    <div className="mt-3">
     {results.length > 0 ? (
        <div className="row">
          {results.map((user) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-2" key={user.idUsuario}>
              <div className="rounded-5 p-3 sombra">
                <img src={user.foto} className="card-img-top rounded-5" alt={user.nome} />
                <div className="my-3 text-center">
                  <h4 className="card-title text-black mb-3">{user.nome}</h4>
                  <p className="text-secondary mb-1 text-dark">
                    {user.idInstrumento} | {user.idCategoria}
                  </p>
                  <p className="card-text text-secondary mb-4">
                    <i className="bi bi-house-fill"></i> {user.cidade} | R$ {user.preco}
                  </p>
                  <Link to={`/perfil/${user.idUsuario}`} id="btnCard" className="btn btn-primary rounded-5">
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">Nenhum resultado encontrado.</p>
      )}

    </div>
  );
};

export default SearchResults;
