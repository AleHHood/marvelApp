import './heroGridInfo.scss'
import woman from '../.././resources/img/woman.jpg';
import AppModal from "../appModal/AppModal";

const HeroGridInfo = (props) => {
    return(
        <div className="heroGridInfo">
            <div className="heroGridInfo__container">
                <div className="heroGridInfo__wrapper">
                    <img src={woman} alt="" className="heroGridInfo__img" />
                    <div className="heroGridInfo__btnWrapper">
                        <p className="heroGridInfo__name">
                            LOKI
                        </p>
                        <button className="button button__main">
                            <div className="inner">Homepage</div>
                        </button>

                        <button className="button button__secondary">
                            <div className="inner">wiki</div>
                        </button>
                    </div>
                </div>

                <p className="heroGridInfo__descrp">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                </p>
                
                <ul className="heroGridInfo__list"> Comics:
                    <li className="heroGridInfo__item">
                        <a href="" className="heroGridInfo__link">
                            All-Winners Squad: Band of Heroes (2011) #3
                        </a>
                    </li>

                    <li className="heroGridInfo__item">
                        <a href="" className="heroGridInfo__link">
                            All-Winners Squad: Band of Heroes (2011) #3
                        </a>
                    </li>

                    <li className="heroGridInfo__item">
                        <a href="" className="heroGridInfo__link">
                            All-Winners Squad: Band of Heroes (2011) #3
                        </a>
                    </li>

                    <li className="heroGridInfo__item">
                        <a href="" className="heroGridInfo__link">
                            All-Winners Squad: Band of Heroes (2011) #3
                        </a>
                    </li>

                    <li className="heroGridInfo__item">
                        <a href="" className="heroGridInfo__link">
                            All-Winners Squad: Band of Heroes (2011) #3
                        </a>
                    </li>

                    <li className="heroGridInfo__item">
                        <a href="" className="heroGridInfo__link">
                            All-Winners Squad: Band of Heroes (2011) #3
                        </a>
                    </li>
                </ul>
                
            </div>
            <AppModal/>
        </div>
    )
}

export default HeroGridInfo;