import { SectionTitle } from '../sectionTitles/SectionTitle'
import './styles.scss'

import Image from 'next/image'

export const Experience = () => {
  return (
      <div className="experience">
        <SectionTitle text='Experience' />
        <p>Descrever um pouco das experiencias das aqual ja passou ou fez.</p>
        <div className="experience-time">
          <div className='experience-language'>
          <Image
          className="img"
          src="/react2.png"
          alt="react Logo"
          width={40}
          height={40}
          priority
          />
          <div className="experience-unit">
            <div className="experience-measure measure-1">
              <span>1 year</span>
            </div>
          </div>
          </div>
          <div className='experience-language'>
          <Image
          className="img"
          src="/ts2.png"
          alt="TypeScript Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unit">
            <div className="experience-measure measure-3">
            <span>3 years</span>
            </div>
          </div>
          </div>
          <div className='experience-language'>
          <Image
          className="img"
          src="/js2.png"
          alt="JavaScript Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unit">
            <div className="experience-measure measure-2">
            <span>2 years</span>
            </div>
          </div>
          </div>
          <div className='experience-language'>
          <Image
          className="img"
          src="/java2.png"
          alt="Java Logo"
          width={40}
          height={40}
          priority
        />
        <div className="experience-unit">
            <div className="experience-measure measure-1">
            <span>1 year</span>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}
