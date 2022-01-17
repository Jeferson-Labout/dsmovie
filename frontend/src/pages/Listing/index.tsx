import axios from 'axios'
import MovieCard from 'components/MovieCard'
// import MovieScore from 'components/MovieScore'
// import MovieStars from 'components/MovieStars'
import Pagination from 'components/Paginaton'
import { BASE_URL } from 'utils/request'

function Listing() {
  // forma errada
  axios.get(`${BASE_URL}/movies`).then(response => {
    console.log(response.data)
  })
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Listing
