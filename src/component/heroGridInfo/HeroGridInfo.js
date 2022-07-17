import './heroGridInfo.scss'
import AppModal from "../appModal/AppModal";
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErorrMessge from '../erorrMessge/ErorrMessge';
import Skeleton from '../skeleton/Skeleton';
import { maxComicsName, maxComicsItems } from '../../services/constant';
import { Link } from 'react-router-dom';


const HeroGridInfo = (props) => {

    const [char, setChar] = useState(null);    
    const {getCharacter, loading, error} = useMarvelService();

    useEffect(()=> {
        if(props.activeId){
            updateCharacter();
        }
    }, [props.activeId])

    function updateCharacter() {
        getCharacter(props.activeId)
        .then(res => onCharLoaded(res))
    }


    function onCharLoaded(char) {
        setChar(char);
    }


    function onGetComics(){
        if(!char) return
        
        const comics = char.comics;
        const elements = comics.map((item, i) => {

            if(i >= maxComicsItems) return;
            const {resourceURI, name} = item;

            return(

                <li className="heroGridInfo__item" key={i}>
                    <Link to={`/comics/${cutIdFromURI(resourceURI)}`} className="heroGridInfo__link">
                        {(name.length < maxComicsName) ? name : name.slice(0, maxComicsName) + '...'}
                    </Link>
                </li>
            )
        }) 

        const content = elements.length ? elements : (" Sorry no comics yet:")
        
        return (
            <ul className="heroGridInfo__list"> Comics:
                {content}
            </ul>
        )
    }


    function cutIdFromURI(URI) {
        const comicId = [];
        const arrURI = URI.split('');

        for (let i = (arrURI.length - 1); i > 0; i--) {
            if(arrURI[i] === '/'){
                break;
            }
            comicId.unshift(arrURI[i]);
        }

        return comicId.join('');
    } 


    const skeleton = (char || loading || error) ?  null : <Skeleton/>
    const spinner = loading ? <Spinner/> : null
    const errorMesage = error ? <ErorrMessge/> : null
    const content = !(loading || error || skeleton) ? <><View char={char}/> {onGetComics()}</> : null

    return(
        <div className="heroGridInfo">
            <div className="heroGridInfo__container">
                {skeleton}
                {content}
                <div className="heroGridInfo__message">
                    {spinner}
                    {errorMesage}
                </div>
                                        
            </div>
            <AppModal/>
        </div>
    )
}



const View = (propsView) => {
    const {char: {name, thumbnail, description, wiki, homepage}} = propsView;
    
    return(
        <>
            <div className="heroGridInfo__wrapper">
                <img src={thumbnail} alt="" className="heroGridInfo__img" />
                <div className="heroGridInfo__btnWrapper">
                    <p className="heroGridInfo__name">
                        {name}
                    </p>
                    <a href={homepage} className="button button__main">
                        <div className="inner">Homepage</div>
                    </a>

                    <a href={wiki} className="button button__secondary">
                        <div className="inner">wiki</div>
                    </a>
                </div>
            </div>

            <p className="heroGridInfo__descrp">
                {description}
            </p>
        </>
    )
}

HeroGridInfo.propTypes = {
    activeId: PropTypes.number
  };


export default HeroGridInfo;