import { SectionTitle } from '../sectionTitles/SectionTitle'
import './styles.scss'

export const Information = () => {
  return (
    <div className="information">
    <SectionTitle text='Languages' />
    <div className="languages-info">
      <span>EN - Basic (Writing and Reading)</span>
      <span>PT-BR - Native Speaker</span>
    </div>
    <SectionTitle text='Education' />
    <div className="educational-info">
      <span>Aaqui alguma coisa tbm</span>
      <span>Texto grande só pra encher aqui e depois eu escrevo</span>
    </div>
  </div>
  )
}
