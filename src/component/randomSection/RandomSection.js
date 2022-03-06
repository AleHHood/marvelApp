import {Component} from "react";
import './randomSection.scss'
import woman from '../.././resources/img/woman.jpg'
import randomBg from '../.././resources/img/RandomBg.png'



class RandomSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <section className="random">
                <div className="random__hero">
                    <img className="random__img" src={woman} alt="Woman"/>
                    <div className="random__info">
                        <p className="random__header">THOR</p>
                        <p className="random__descrp">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                        <div className="random__btns">
                        <button className="button button__main">
                            <div className="inner">Homepage</div>
                        </button>
                        <button className="button button__secondary">
                            <div className="inner">WIKI</div>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="random__choose">
                    <p className="random__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="random__chooseDescrp">
                        Or choose another one
                    </p>
                        <button className="button button__main">
                                <div className="inner">Try it</div>
                        </button>
                    <img className="random__chooseBg" alt="" src={randomBg}/>
                </div>
            </section>
        )
    }
}

export default RandomSection