import { useEffect, useState } from "react";
import "./heroesGrid.scss";

import HeroGridInfo from "../heroGridInfo/HeroGridInfo";
import useMarvelService from "../../services/MarvelService";
import ErorrMessge from "../erorrMessge/ErorrMessge";
import Spinner from "../spinner/Spinner";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { offset as defOffset } from "../../services/constant";
import { func } from "prop-types";

const HeroesGrid = () => {
  const [arrChar, setArrChar] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [offset, setOffset] = useState(defOffset);
  const [charListEnded, setCharEnd] = useState(false);

  const {loading, error, getAllCharacters} = useMarvelService();

  useEffect(() => {
    updateCharacters();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScrollLoading);
    return () => {
      window.removeEventListener("scroll", onScrollLoading);
    };
  });

  function onRequest() {
    if (!loading) {
      updateCharacters();
    }
  }

  function updateCharacters() {
      getAllCharacters(offset)
      .then((arrChar) => {
        onloading(arrChar);
      });
  }

  function onloading(nextArrChar) {
    let ended = false;
    if (nextArrChar.length < 9) {
      ended = true;
    }

    setArrChar((arrChar) => [...arrChar, ...nextArrChar]);
    setOffset((offset) => offset + 9);
    setCharEnd(ended);
  }

  const refArr = [];

  function onRefItemHero(itemHero) {
    refArr.push(itemHero);
  }

  function onActiveItem(activeItem) {
    refArr.forEach((ref) => {
      ref.classList.remove("heroesGrid__item-active");
    });

    activeItem.classList.add("heroesGrid__item-active");
  }

  function onGetIdCharacter(id, e) {
    if (e.code === "Enter" || e.type === "click") {
      onActiveItem(e.currentTarget);
      setActiveId(id);
    }
  }

  //Метод до загрузки элементов по скролу
  function onScrollLoading() {
    if (
      document.documentElement.scrollHeight <=
      document.documentElement.clientHeight + window.scrollY + 50
    ) {
      onRequest();
    }
  }

  //Метод создания контента (таблицы героев)
  function renderHeroes() {
    const heroes = arrChar.map((char) => {
      const { name, thumbnail, id } = char;
      return (
        <li
          key={id}
          className="heroesGrid__item"
          tabIndex={0}
          onClick={(e) => onGetIdCharacter(id, e)}
          onKeyDown={(e) => onGetIdCharacter(id, e)}
          ref={onRefItemHero}
        >
          <img src={thumbnail} alt={name} className="heroesGrid__img" />
          <p className="heroesGrid__name">{name}</p>
        </li>
      );
    });

    return heroes;
  }

  const errorMessage = error ? <ErorrMessge /> : null;
  const spinner = loading ? <Spinner /> : null;
  const endedClass = charListEnded ? "none" : "block";

  return (
    <section className="heroesGrid">
      <ul className="heroesGrid__list">
        <div className="heroesGrid__wrapper">
          {errorMessage}
          
        </div>
        {renderHeroes()}
        {spinner}
      </ul>
      <ErrorBoundary>
        <HeroGridInfo activeId={activeId} />
      </ErrorBoundary>
      {/*                 <a onClick={this.onRequest} className={`button button__long button__main ` + loadClass} 
                style={{'display': endedClass}}>
                <div className="inner">load more</div>
            </a> */}
    </section>
  );
};

export default HeroesGrid;
