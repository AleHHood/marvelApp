import {Component} from "react";
import "./appComics.scss"
import ImgComics from '../../resources/img/UW.png'

class AppComics extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <section className="comics">
                <ul className="comics__list">
                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>
                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>
                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>

                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>
                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>
                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>

                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>
                    <li className="comics__item">
                        <a href="" className="comics__link">
                        <img src={ImgComics} alt="" className="comics__img" />
                            ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
                        </a>
                        <span className="comics__price">9.99$</span>
                    </li>
                </ul>
                <button className="button button__long button__main">
                    <div className="inner">load more</div>
                </button>
            </section>
        )
    }
}

export default AppComics