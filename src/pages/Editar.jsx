import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../componentes/Header'

const Editar = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [nomeCategoria, setNomeCategoria] = useState('')
  const [status, setStatus] = useState(1)

  // Adicione o cabeçalho de autenticação
  const authHeader = React.useMemo(() => ({
    headers: {
      Authorization: `Basic ${btoa('admin@example.com:password')}`,
    },
  }), [])

  useEffect(() => {
    if (id) {
      axios.get(`http://127.0.0.1:8000/api/categorias/${id}`,authHeader)
        .then((response) => {
          setNomeCategoria(response.data.nome_categoria)
          setStatus(response.data.status)
        })
        .catch((error) => console.error('Erro ao carregar usuarios:', error))
    }
  }, [id, authHeader])

  const salvarCategoria = (e) => {
    e.preventDefault()
    const usuarios = { nome_categoria: nomeCategoria, status }

    if (id) {
      axios.put(`http://127.0.0.1:8000/api/usuarios/${id}`, usuarios, authHeader)
        .then(() => navigate('/usuarios'))
        .catch((error) => console.error('Erro ao atualizar usuarios:', error))
    } else {
      axios.post('http://127.0.0.1:8000/api/usuarios', usuarios, authHeader)
        .then(() => navigate('/usuarios'))
        .catch((error) => console.error('Erro ao criar usuarios:', error))
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="container">

          <div class="card">
            <div class="card-header d-flex justify-content-between py-3">
              <span className="fs-5 fw-bold">{id ? 'EDITAR CATEGORIA' : 'NOVA CATEGORIA'}</span>
            </div>
            <div class="card-body">

              <form onSubmit={salvarCategoria}>
                <div className="mb-3">
                  <label htmlFor="nomeCategoria" className="form-label">Nome da Categoria</label>
                  <input
                    id="nomeCategoria"
                    type="text"
                    className="form-control"
                    value={nomeCategoria}
                    onChange={(e) => setNomeCategoria(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(parseInt(e.target.value))}
                  >
                    <option value={1}>Ativo</option>
                    <option value={0}>Inativo</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">Salvar</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/usuarios')}>Cancelar</button>
              </form>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Editar