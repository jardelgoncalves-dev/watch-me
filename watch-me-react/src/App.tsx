import { Header } from './components/Header'
import { HomePage } from './pages/Home';
import './styles/global.scss';

export function App() {
  
  return (
    <div className="app">
      <Header />
      <HomePage />
    </div>
  )
}