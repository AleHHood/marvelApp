import {Component} from "react";
import "./heroesGrid.scss";

import HeroGridInfo from "../heroGridInfo/HeroGridInfo";
import MarvelService from "../../services/MarvelService";
import ErorrMessge from "../erorrMessge/ErorrMessge";
import Spinner from "../spinner/Spinner";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import {offset} from "../../services/constant"


class HeroesGrid extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrChar: [],
            error: false,
            loading: true,
            activeId: null,
            loadingMoreItems: false,
            offset: offset,
            charListEnded: false
        }
    }

    componentDidMount() {
        this.updateCharacters()
    }

    marvelService = new MarvelService();

    onRequest = () => {
        if(!this.state.loadingMoreItems){
            this.setState({loadingMoreItems: true})
            this.updateCharacters()
        }
    }

    updateCharacters = () => {
        
        this.marvelService.getAllCharacters(this.state.offset)
        .then((arrChar) => {this.onloading(arrChar)})
        .catch(() => {
            this.onError()
        })
    }

    onError = () => {
        this.setState(
            {
                loading: false,
                error: true
            }
        )
    }

    onloading = (nextArrChar) => {
        let ended = false;
        if(nextArrChar.length < 9){
            ended= true;
        }
            this.setState(({arrChar, offset}) => (
                {
                    arrChar: [...arrChar, ...nextArrChar],
                    error: false,
                    loading: false,
                    loadingMoreItems: false,
                    offset: offset + 9,
                    charListEnded: ended
                }
            )
        )
    }


    onGetIdCharacter = (id) => {
        this.setState({activeId: id})
    }

    //Метод создания контента (таблицы героев)
    renderHeroes = () => {
        const {arrChar} = this.state;
    
        const heroes = arrChar.map(char => {
            
            const {name, thumbnail, id} = char;
            return(
                <li key = {id} className="heroesGrid__item" onClick={() => this.onGetIdCharacter(id)}>
                    <img src={thumbnail} alt={name} className="heroesGrid__img" />
                    <p className="heroesGrid__name">{name}</p>
                </li>
            )
        });

        return heroes
    }

    render(){
        const {error, loading, activeId, loadingMoreItems, charListEnded} = this.state;
        const errorMessage = error ? <ErorrMessge/> : null;
        const spinner = loading ? <Spinner/> : null;
        const loadClass = loadingMoreItems ? 'button-noActive' : null;
        const content = !(loading || error) ? this.renderHeroes() : '';
        const endedClass = charListEnded ? 'none' : 'block';

        return(
            <section className="heroesGrid">
                <ul className="heroesGrid__list">
                    <div className="heroesGrid__wrapper">
                    {errorMessage}
                    {spinner}
                </div>
                {content}
                </ul>
                <ErrorBoundary>
                    <HeroGridInfo activeId={activeId}/>
                </ErrorBoundary>
                <a onClick={this.onRequest} className={`button button__long button__main ` + loadClass} 
                    style={{'display': endedClass}}>
                    <div className="inner">load more</div>
                </a>
            </section>
        )
    }
}

export default HeroesGrid