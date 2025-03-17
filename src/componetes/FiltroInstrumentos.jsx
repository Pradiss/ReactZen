const FiltroInstrumentos = ({filtroInstrumento, setFiltroInstrumento}) =>{
    return (
        <div className="my-4">
        <label className="mb-1 fw-bold">Instrumentos:</label>
        <select 
            id="instrumentos"
            name="instrumentos"
            className="form-select rounded-5"
            value={filtroInstrumento}
            onChange={(e) => setFiltroInstrumento(e.target.value)}
        >
            <option value="">Todos</option>
            <option value="1">Violão</option>
            <option value="2">Bateria</option>
            <option value="3">Cavaco</option>
            <option value="4">Cantor(a)</option>
            <option value="5">Baixo</option>
        </select>
    </div>
)   
    
}

export default FiltroInstrumentos