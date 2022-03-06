import './appHeader.scss';
import leftImg from '../../resources/img/Avengers.png'
import rightImg from '../../resources/img/AvengersLogo.png'

const AppHeader = ()=> {
    return(
        <header>
            <div className="header__wrapper">
                <h1><a href=""><span>Marvel</span> information portal</a></h1>
                <nav>
                    <ul className='nav__menu'>
                        <li className='nav__item nav__item-active'>
                            <a href="">Characters</a>
                        </li>
                            <span className="nav_separator">/</span>
                        <li className='nav__item'>
                            <a href="">Comics</a>
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
