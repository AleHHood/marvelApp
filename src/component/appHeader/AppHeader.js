import './appHeader.scss';
import leftImg from '../../resources/img/Avengers.png'
import rightImg from '../../resources/img/AvengersLogo.png'
import { NavLink, Link } from 'react-router-dom';

const AppHeader = ()=> {
    return(
        <header>
            <div className="header__wrapper">
                <h1><Link to="/"><span>Marvel</span> information portal</Link></h1>
                <nav>
                    <ul className='nav__menu'>
                        <li className='nav__item'>
                            <NavLink end to="/" 
                            style={({ isActive }) => ({ color: isActive ? '#9F0013' : '#000' })}>Characters</NavLink>
                        </li>
                            <span className="nav_separator">/</span>
                        <li className='nav__item'>
                            <NavLink to="/comics" 
                            style={({ isActive }) => ({ color: isActive ? '#9F0013' : '#000' })}>Comics</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="header__comics">
                    <img src={leftImg} alt="" className="header__left" />
                    <p className="header__text">
                        New comics every week!<br/>
                        Stay tuned!</p>
                    <img src={rightImg} alt="" className="header__right" />
                </div>
        </header>
    )
}
export default AppHeader
