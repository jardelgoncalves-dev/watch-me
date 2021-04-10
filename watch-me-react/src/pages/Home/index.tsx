import { useEffect, useState } from 'react';
import { MovieProp } from '../../components/CardMovie';
import { Container } from "../../components/Container";
import { Row } from "../../components/Row";
import { SelectGenres, SelectGenresOptionProp } from "../../components/SelectGenres";
import { api } from '../../service/api';
import { ListCardMovie } from "./components/ListCardMovie";
import { LoadingCardMovie } from "./components/LoadingCardMovie";
import { LoadingSelectGenres } from "./components/LoadingSelectGenres";

import './styles.scss';

export function HomePage() {
  const [genre, setGenre] = useState<SelectGenresOptionProp | null>(null)
  const [genres, setGenres] = useState<SelectGenresOptionProp[]>([])
  const [movies, setMovies] = useState<MovieProp[]>([])
  const [loadings, setLoadings] = useState({
    fetchMovies: false,
    fetchGenres: false
  })

  useEffect(() => {
    setLoadings(old => ({
      ...old,
      fetchGenres: true
    }))
    api.get('/genres')
      .then(({ data }) => {
        setGenres(data)
        setGenre(data[0])
      })
      .finally(() => {
        setLoadings(old => ({
          ...old,
          fetchGenres: false
        }))
      })
  }, [])

  useEffect(() => {
    const genreId = genre?.id || genres[0]?.id
    if(genreId) {
      setLoadings(old => ({
        ...old,
        fetchMovies: true
      }))
      api.get(`/movies?Genre_id=${genreId}`)
        .then(({ data }) => setMovies(data))
        .finally(() => {
          setLoadings(old => ({
            ...old,
            fetchMovies: false
          }))
        })
    }

  }, [genre])
  
  return (
    <Container>
      <div className="genre-select">
        <h3>Genre</h3>
        <LoadingSelectGenres loading={loadings.fetchGenres} />
        {!loadings.fetchGenres && <SelectGenres options={genres} onChange={setGenre} />}
      </div>
      <Row>
        <LoadingCardMovie loading={loadings.fetchMovies} quantity={5} />
        {!loadings.fetchMovies && <ListCardMovie movies={movies} />}
      </Row>
    </Container>
  )
}