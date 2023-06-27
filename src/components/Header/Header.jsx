import './Header.scss'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = ({variant = false}) => {

    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
                <img src={logo} width={50} height={50} alt='logo'/>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos/minutas">Minutas</Link>
                    <Link className="header__link" to="/productos/entradas">Entradas</Link>
                    <Link className="header__link" to="/productos/ensaladas">Ensaladas</Link>
                    <Link className="header__link" to="/productos/pastas">Pastas</Link>
                    <Link className="header__link" to="/productos/parrilla">Parrilla</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header