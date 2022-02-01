
import FormEdit from 'components/FormEdit'
import { useParams } from 'react-router-dom'
import { Movie } from 'types/movie'

type Props = {
  movie: Movie
}
function FormEd({ movie }: Props) {
  const parameters = useParams()
  return <FormEdit movieId={`${parameters.movieId}`} />
}

export default FormEd
