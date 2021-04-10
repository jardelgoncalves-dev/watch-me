import { Play, Star } from '../Icons'

import './styles.scss';


export interface MovieProp {
  Title: string;
  Runtime: string;
  Poster: string;
  imdbRating: string;
}

interface CardMovieProp {
  movie: MovieProp
}

export function CardMovie({ movie }: CardMovieProp) {
  return (
    <div className="card-movie">
      <div className="card-movie__poster">
        <img src={movie.Poster} alt={movie.Title} className="card-movie__poster__img"/>
        <div className="card-movie__poster__play-icon">
          <Play />
        </div>
        <div className="card-movie__poster__imdb">
          <Star />
          <span>{movie.imdbRating}</span>
        </div>
      </div>
      <h3 className="card-movie__title">{movie.Title}</h3>
      <p className="card-movie__description">Duration {movie.Runtime}</p>
    </div>
  )
}