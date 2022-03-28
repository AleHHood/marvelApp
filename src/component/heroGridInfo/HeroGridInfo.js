import './heroGridInfo.scss'
import AppModal from "../appModal/AppModal";
import { Component } from 'react';
import PropTypes from 'prop-types';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErorrMessge from '../erorrMessge/ErorrMessge';
import Skeleton from '../skeleton/Skeleton';
import { maxComicsName, maxComicsItems } from '../../services/constant';

class HeroGridInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            char: null,
            loading: false,
            error: false,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.activeId !== this.props.activeId){
            this.updateCharacter();
        }
    }

    marvelService = new MarvelService();

    updateCharacter = () => {

        this.setState({loading: true}, () => {
            this.marvelService.getCharacter(this.props.activeId)
            .then(res => this.onCharLoaded(res))
            .catch(this.onError)
        })
    }



    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
            })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    onGetRandomChar = () => {
        this.updateCharacter();
    }

    onGetComics = () => {
        if(!this.state.char) return
        
        const comics = this.state.char.comics;


        const elements = comics.map((item, i) => {

            if(i >= maxComicsItems) return;

            const {resourceURI, name} = item;

            return(

                <li className="heroGridInfo__item" key={i}>
                    <a href={resourceURI} className="heroGridInfo__link">
                        {(name.length < maxComicsName) ? name : name.slice(0, maxComicsName) + '...'}
                    </a>
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


    render(){
        const {char, error, loading} = this.state;

        const skeleton = (char || loading || error) ?  null : <Skeleton/>
        const spinner = loading ? <Spinner/> : null
        const errorMesage = error ? <ErorrMessge/> : null
        const content = !(loading || error || skeleton) ? <><View char={char}/> {this.onGetComics()}</> : null

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