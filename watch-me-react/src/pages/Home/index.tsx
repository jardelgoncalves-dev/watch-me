import { CardMovie } from "../../components/CardMovie";
import { Col } from "../../components/Col";
import { Container } from "../../components/Container";
import { Row } from "../../components/Row";
import { SelectButton, SelectButtonOptionProp } from "../../components/SelectButton";
import { ListCardMovie } from "./components/ListCardMovie";
import { LoadingCardMovie } from "./components/LoadingCardMovie";
import { LoadingSelectButton } from "./components/LoadingSelectButton";

import './styles.scss';

export function HomePage() {
  const options: SelectButtonOptionProp[] = [
    { label: 'Acao', value: 'acao'},
    { label: 'Drama', value: 'drama'},
    { label: 'Drama 2', value: 'drama 2'},
    { label: 'Drama 3', value: 'drama 3'},
  ]

  const movies = [{
    Title: "Underdog",
    Runtime: "84 min",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTk5NjkyNzEwOV5BMl5BanBnXkFtZTcwODc5NDI1MQ@@._V1_SX300.jpg",
    imdbRating: "4.7",
  }]
  
  return (
    <Container>
      <div className="genre-select">
        <h3>Genre</h3>
        {/* <SelectButton options={options} /> */}
        <LoadingSelectButton loading />
      </div>
      <Row>
        <LoadingCardMovie enabled quantity={5} />
        <ListCardMovie movies={movies} />
      </Row>
    </Container>
  )
}