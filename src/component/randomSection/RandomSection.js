import {useEffect, useState} from "react";
import './randomSection.scss'
import randomBg from '../.././resources/img/RandomBg.png'
import useMarvelService from "../../services/MarvelService";
import Spinner from "../../component/spinner/Spinner.js";
import ErorrMessge from "../erorrMessge/ErorrMessge";



const RandomSection = () => {

    const [char, setChar] = useState({});
    const {loading, error, clearError, getCharacter} = useMarvelService();

    useEffect(()=> {
        updateCharacter();
    }, [])

    
    function updateCharacter() {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        clearError();
        getCharacter(id)
        .then(res => setChar(res))
    }

    const spinner = loading ? <Spinner/> : null
    const errorMesage = error ? <ErorrMessge/> : null
    const content = !(loading || error) ? <View {...char}/> : null
    
    return(
        <section className="random">
            <div className="random__hero">
                {content}
                {spinner}
                {errorMesage}
            </div>
            <div className="random__choose">
                <p className="random__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="random__chooseDescrp">
                    Or choose another one
                </p>
                    <button className="button button__main" onClick={updateCharacter}>
                            <div className="inner">Try it</div>
                    </button>
                <img className="random__chooseBg" alt="" src={randomBg}/>
            </div>
        </section>
    )
    
}

const View = (props) => {
    const {name, description, thumbnail, wiki, homepage} = props;
    return(

        <>            
            <img className="random__img" src={thumbnail} alt={name}/>
            <div className="random__info">
                <p className="random__header">{name}</p>
                <p className="random__descrp">{description}</p>
                <div className="random__btns">
                <a href={homepage} className="button button__main">
                    <div className="inner">homepage</div>
                </a>
                <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                </a>
                </div>
            </div>
        </>        
    )
}

export default RandomSection