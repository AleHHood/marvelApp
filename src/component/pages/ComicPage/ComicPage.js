import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useMarvelService from "../../../services/MarvelService";
import ErorrMessge from "../../erorrMessge/ErorrMessge";
import Spinner from "../../spinner/Spinner";
import "./comicPage.scss";

const ComicPage = () => {

    const [comic, setComic] = useState(null);
    const {comicId} = useParams();
    const {loading, error, clearError, getComic} = useMarvelService();

    useEffect(() => updateComic(comicId), [comicId])

    const updateComic = (comicId) => {
        clearError();
        getComic(comicId)
        .then(res => setComic(res[0]))
    }

    const renderComic = () => {
        return(
            <>
                <img src={comic.image} alt={comic.title} className="singleComics__img"/>
                <div className="singleComics__info">
                    <h2 className="singleComics__name">
                        {`${comic.title}`}
                    </h2>
                    <p className="singleComics__descrp">
                        {comic.description ? comic.description : 'Sorry no descriptions yet:('}
                    </p>
                    <span className="singleComics__pages">{comic.ComicPage ? `${comic.ComicPage} pages` : ''}</span>
                    <span className="singleComics__lang">Language: en-us</span>
                    <span className="singleComics__price">{comic.price}</span>
                </div>
            </>
        );

    }

    const content = (comic && !loading && !error)  ? renderComic() : null,
          spinner = (loading && !error) ? <Spinner/> : null,
          errorMesage = error ? <ErorrMessge/> : null;

    return(
        <section className="singleComics">
            {content}
            {spinner}
            {errorMesage}
            <Link to={"/comics"} className="singleComics__link">
                Back to all
            </Link>
        </section>
    )
}

export default ComicPage