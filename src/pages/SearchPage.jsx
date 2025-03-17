import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (filters) => {
    setLoading(true);
    try {
      const params = new URLSearchParams(filters).toString();
      const response = await axios.get(`http://localhost:8000/api/perfil/search?${params}`);
      setResults(response.data);
    } catch (error) {
      console.error("Erro ao buscar:", error);
    }
    setLoading(false);
  };

  return (
    <div className="">
    
      <SearchBar onSearch={handleSearch} />
      {loading ? <p>Carregando...</p> : <SearchResults results={results} />}
    </div>
  );
};

export default SearchPage;
