import Image from 'next/image'
import './styles.scss'

export const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>Hi, i'm Matheus!🖖</h1>
        <h2>Developer Front-end</h2>
      </div>
        <Image
          className="img"
          src="/contato.jpg"
          alt="Next.js Logo"
          width={300}
          height={300}
          priority
        />
      </div>
  )
}