import AppHeader from './component/appHeader/AppHeader'
import RandomSection from './component/randomSection/RandomSection';
import HeroesGrid from './component/heroesGrid/HeroesGrid';
import AppComics from './component/appComics/AppComics';
import SingleComics from './component/singleComics/SingleComics';
import HeroPage from './component/heroPage/HeroPage';
import './App.scss';
import vision from './resources/img/vision.png'
import ErrorBoundary from './component/errorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="container">
      <AppHeader/>
      <ErrorBoundary><RandomSection/></ErrorBoundary>
      <ErrorBoundary><HeroesGrid/></ErrorBoundary>
      <footer>
        <img src={vision} alt="" className="footer__vision" />
      </footer>
      {/* <SingleComics/> */}
      {/* <HeroPage/> */}
    </div>
  );
}

export default App;
