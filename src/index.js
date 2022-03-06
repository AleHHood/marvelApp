import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import vision from "./resources/img/vision.png"

import AppHeader from './component/appHeader/AppHeader'
import RandomSection from './component/randomSection/RandomSection';
import HeroesGrid from './component/heroesGrid/HeroesGrid';
import AppComics from './component/appComics/AppComics';
import SingleComics from './component/singleComics/SingleComics';
import HeroPage from './component/heroPage/HeroPage';




ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <AppHeader/>
      {/* <RandomSection/>
      <HeroesGrid/>
      <footer>
        <img src={vision} alt="" className="footer__vision" />
      </footer> */}
      {/* <SingleComics/> */}
      <HeroPage/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
