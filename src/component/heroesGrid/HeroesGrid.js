import {Component} from "react";
import "./heroesGrid.scss";
import woman from '../.././resources/img/woman.jpg';

import HeroGridInfo from "../heroGridInfo/HeroGridInfo";


class HeroesGrid extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <section className="heroesGrid">
                <ul className="heroesGrid__list">
                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>
                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>
                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>


                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>
                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>
                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>


                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>
                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>
                    <li className="heroesGrid__item">
                        <img src={woman} alt="hero" className="heroesGrid__img" />
                        <p className="heroesGrid__name">ABYSS</p>
                    </li>
                </ul>
                <HeroGridInfo/>
                <button className="button button__long button__main">
                    <div className="inner">load more</div>
                </button>
            </section>
        )
    }
}

export default HeroesGrid