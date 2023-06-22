import { Experience } from './components/experience/Experience'
import { Header } from './components/header/Header'
import { Information } from './components/information/Information'
import { SocialBtns } from './components/social-btns/Social-btns'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Information />
      <div className="buttons">
        <SocialBtns />
        <button className='primary-btn'>Contact Me</button>
      </div>

    </main>
  )
}
