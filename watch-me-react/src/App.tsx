import { Header } from './components/Header'
import { SelectButton, SelectButtonOptionProp } from './components/SelectButton'
import './styles/global.scss';

export function App() {
  const options: SelectButtonOptionProp[] = [
    { label: 'Acao', value: 'acao'},
    { label: 'Drama', value: 'drama'},
  ]
  return (
    <div className="app">
      <Header />
      <SelectButton options={options} />
    </div>
  )
}