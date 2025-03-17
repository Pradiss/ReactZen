const FiltroCidades = ({filtroCidade, setFiltroCidade, filtroEstado, setFiltroEstado}) => {
    return (
        <div className="my-4 d-flex justify-content-between">
            <span className="me-2 ">
            <label className="mb-1 fw-bold">Cidades :</label>
                <select 
                
                    id="cidade"
                    name="cidade"
                    className="form-select rounded-5"
                    value={filtroCidade}
                    onChange={(e) => setFiltroCidade(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="Limeira">Limeira</option>
                    <option value="Americana">Americana</option>
                    <option value="Cosmopolis">Cosmopolis</option>
                    <option value="Piracicaba">Piracicaba</option>
                
                
                </select>
            </span>
            <span>
                <label className="mb-1  fw-bold">Estados:</label>
                    <select 
                        
                        id="uf"
                        name="uf"
                        className="form-select rounded-5"
                        value={filtroEstado}
                        onChange={(e) => setFiltroEstado(e.target.value)}
                    >
                        <option value="">Todas</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                        <option value="Parana">Parana</option>
                    
                    
                    </select>
            </span>
           
    </div>
)   
    
}

export default FiltroCidades