import axios,{AxiosRequestConfig} from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Movie } from 'types/movie'
import { BASE_URL } from 'utils/request'
import './styles.css'

type Props = {
  movieId: string
}
function FormEdit({ movieId }: Props) {

  const navigate= useNavigate();
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`).then(response => {
      setMovie(response.data);
    });
  },[movieId]);
const handleSubmit =(event: React.FormEvent<HTMLFormElement> ) => {
event.preventDefault();
const title = (event.target as any).title.value;
const image = (event.target as any).image.value;
const score= movie?.score;
const count= movie?.count;




const config: AxiosRequestConfig = {
	baseURL: BASE_URL,
	method: 'PUT',
	url: `/movies/${movieId}`,
	data: {
		title: title,
		score: score,
    count: count,
		image: image
	}
}
axios(config).then((response) => {


  navigate("/list")
})
}
  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="title">Titulo</label>
            <input  type="text" defaultValue={movie?.title}   className="form-control" id="title" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="image">URL Imagem</label>
            <input type="text"  defaultValue={movie?.image}   className="form-control" id="image" />
           
          </div>
          
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/list">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  )
}

export default FormEdit
