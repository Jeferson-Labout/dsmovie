import axios from "axios";
import MovieList from "components/MovieList";
import { useEffect, useState } from "react";
import Pagination from 'components/Paginaton';
import { Movie, MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

type Props = {
  movie: Movie
}
function List({ movie }: Props) {
  const [pageNumber, setPageNumber] = useState(0)

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  })

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?sort=score,desc&size=20&page=${pageNumber}`)
      .then(response => {
        const data = response.data as MoviePage

        setPage(data);
      })
  }, [pageNumber]);

const handlePageChange = (newPageNumber: number)=>{
  setPageNumber(newPageNumber);
}
  return (
    <>
    <Pagination page={page} onChange={handlePageChange}/>
    <div className="container">
    <div className="row">
      {page.content.map(movie => (
        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
          <MovieList movie={movie} />
        </div>
      ))}
    </div>
  </div>
  </>
  )
}

export default List
