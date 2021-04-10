import { CardMovie, MovieProp } from "../../../../components/CardMovie";
import { Col } from "../../../../components/Col";

interface ListCardMovieProp {
  movies: MovieProp[]
}
export function ListCardMovie({ movies }: ListCardMovieProp) {
  return (
    <>
      {
        movies.map(movie => (
          <Col key={movie.Title}>
            <CardMovie movie={movie} />
          </Col>
        ))
      }
    </>
  )
}