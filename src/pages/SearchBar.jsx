import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [nome, setNome] = useState("");
  

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ nome});
  };

  return (

    <div class="">
      <form onSubmit={handleSearch} className="input-group w-100  rounded-5 ">
        <input
          type="text"
          className="form-control rounded-start-5"
          placeholder="Nome do usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        
      
        <button class="btn btn-white border rounded-end-5   " type="button"><i class="bi bi-search fs-4"></i></button>
      </form>
    </div>
  );
};

export default SearchBar;
