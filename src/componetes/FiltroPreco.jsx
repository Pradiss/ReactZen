const FiltroPreco = ({filtroPrecoMin, setFiltroPrecoMin, filtroPrecoMax, setFiltroPrecoMax}) => {
    return (

        <div className="mb-4  d-flex justify-content-between">
        <span>
            <label className="form-label fw-bold ">Preço Mínimo</label>
            <input 
                placeholder="Preço mínimo"
                type="number"
                id="preco_min"
                className="form-control rounded-5  "
                value={filtroPrecoMin}
                onChange={(e) => setFiltroPrecoMin(e.target.value)}
            />
        </span>
        <span className="mx-2">
            <label className="form-label fw-bold" >Preço Máximo</label>
            <input 
                placeholder="Preço máximo"
                type="number"
                id="preco_max"
                className="form-control rounded-5"
                value={filtroPrecoMax}
                onChange={(e) => setFiltroPrecoMax(e.target.value)}
            />
        </span>
    </div>
)
    
}

export default FiltroPreco