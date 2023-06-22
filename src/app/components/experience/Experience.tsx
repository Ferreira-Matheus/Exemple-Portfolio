import { SectionTitle } from '../sectionTitles/SectionTitle'
import './styles.scss'

export const Experience = () => {
  return (
      <div className="experience">
        <SectionTitle text='Experience' />
        <p>Descrever um pouco das experiencias das aqual ja passou ou fez.</p>
        <div className="experience-time"></div>
      </div>
  )
}
