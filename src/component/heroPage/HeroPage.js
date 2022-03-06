import { Component } from "react";
import "./heroPage.scss";
import woman from '../.././resources/img/woman.jpg'

class HeroPage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <section className="hero">
                <img src={woman} alt="" className="hero__img" />
                <div className="hero__info">
                    <h2 className="hero__name">
                        LOKI
                    </h2>
                    <div className="hero__descrp">
                        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
                    </div>
                </div>
            </section>
        )
    }
}

export default HeroPage