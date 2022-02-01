

import { useNavigate } from 'react-router-dom'
import axios, { AxiosRequestConfig } from "axios";
import './styles.css'
import { BASE_URL } from 'utils/request'



function Register() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = (event.target as any).title.value;
    const imagem = (event.target as any).imagem.value;


    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'POST',
      url: '/movies',
      data: {
        title: title,
        image: imagem
      }
    }
    axios(config).then((response) => {
console.log(response.data)

      navigate("/list")
    })

  }
  return (
    <div className="dsmovie-form-container">
      <form className="dsmovie-form" onSubmit={handleSubmit}>
        <div className="form-group dsmovie-form-group">
          <label htmlFor="title">Informe o titulo do Filme</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group dsmovie-form-group">
          <label htmlFor="imagem">Informe a URL da Imagem</label>
          <input type="text" className="form-control" id="imagem" />
        </div>
        <div className="dsmovie-form-btn-container">
          <button type="submit" className="btn btn-primary dsmovie-btn">
            Salvar
          </button>          
        </div>
      </form>
    </div>
  );
}

export default Register;