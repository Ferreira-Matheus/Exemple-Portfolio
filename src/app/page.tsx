import { Header } from './components/header/Header'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <div className="experience">
        <h3>Experience</h3>
        <p>Texto</p>
        <div className="experience-time"></div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages">
            <span>EN - Fluent</span>
            <span>PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>Aaqui alguma coisa tbm</span>
            <span>Texto grande só pra encher aqui e depois eu escrevo</span>
          </div>
        </div>
        <div className="buttons">
          <div className="social"></div>
          <button className='contact'>Contact Me</button>
        </div>
      </div>

    </main>
  )
}
