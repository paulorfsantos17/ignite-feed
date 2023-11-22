import   style from'./Header.module.css'
import iginiteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return(
    <header className={style.header}>
      <img src={iginiteLogo} alt="Logotipo do Ignite" />
      <strong >Ingite Feed</strong>
    </header>
  )
}