import "./appComics.scss"
import { useEffect, useState } from "react"
import useMarvelService from '../../services/MarvelService'
import Spinner from "../spinner/Spinner";
import ErorrMessge from "../erorrMessge/ErorrMessge";
import { comicsOffset } from "../../services/constant";
import { Link } from "react-router-dom";

const AppComics = () => {

    const [arrComics, setArrComics] = useState([]);
    const {loading, error, getAllComics} = useMarvelService();
    const [offset, setOffset] = useState(+comicsOffset);

    useEffect(() => {
        updateComics();
    }, [])

    const updateComics = () => {
        getAllComics(offset)
        .then(res => onloaded(res))
    }
    

    const onloaded = (res)=> {
        setOffset(offset + 8);
        setArrComics([...arrComics, ...res]);
    }

    //Функция рендоринга комиксов
    const renderComics = () => {
        const comics = arrComics.map((data, i) => {
            const {id, title, image, price} = data;

            return(
            <li className="comics__item" key={id}>
                <Link to={`/comics/${id}`} className="comics__link">
                <img src={image} alt={title} className="comics__img" />
                    {title}
                </Link>
                <span className="comics__price">{price}</span>
            </li>)
        })

        return comics
    }

    //LoadMore

    const loadMoreComics = () => {
        updateComics();
        
    }

    const spinner = (loading && !error) ? <Spinner/> : null
    const errorMsg = error ? <ErorrMessge/> : null

    return(
        <section className="comics">
            <ul className="comics__list">
                {renderComics()}
                {spinner}
                {errorMsg}
            </ul>
            <button className="button button__long button__main" onClick={() => loadMoreComics()}>
                <div className="inner">load more</div>
            </button>
        </section>
    )
}

export default AppComics