const FiltroGenero = ({filtroGenero, setFiltroGenero}) =>{
    return (
        <div className="my-4">
        <label className="mb-1 fw-bold">Genero Musical:</label>
        <select 
            id="genero"
            name="genero"
            className="form-select rounded-5"
            value={filtroGenero}
            onChange={(e) => setFiltroGenero(e.target.value)}
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
)   
    
}

export default FiltroGenero