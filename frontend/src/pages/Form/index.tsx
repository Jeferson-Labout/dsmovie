import FormCard from 'components/FormCard'
import { Link, useParams } from 'react-router-dom'
import { Movie } from 'types/movie'

type Props = {
  movie: Movie
}
function Form({ movie }: Props) {
  const parameters = useParams()
  return <FormCard movieId={`${parameters.movieId}`} />
}

export default Form
