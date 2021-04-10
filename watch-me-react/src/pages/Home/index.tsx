import { Container } from "../../components/Container";
import { Row } from "../../components/Row";
import { SelectButton, SelectButtonOptionProp } from "../../components/SelectButton";
import { LoadingCardMovie } from "./components/LoadingCardMovie";

import './styles.scss';

export function HomePage() {
  const options: SelectButtonOptionProp[] = [
    { label: 'Acao', value: 'acao'},
    { label: 'Drama', value: 'drama'},
    { label: 'Drama 2', value: 'drama 2'},
    { label: 'Drama 3', value: 'drama 3'},
  ]
  
  return (
    <Container>
      <div className="genre-select">
        <h3>Genre</h3>
        <SelectButton options={options} />
      </div>
      <Row>
        <LoadingCardMovie enabled quantity={5} />
      </Row>
    </Container>
  )
}