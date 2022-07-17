import RandomSection from "../randomSection/RandomSection";
import HeroesGrid from "../heroesGrid/HeroesGrid";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import vision from "../../resources/img/vision.png"


  const MainPage = () => {
    return (
        <>
            <ErrorBoundary><RandomSection/></ErrorBoundary>
            <ErrorBoundary><HeroesGrid/></ErrorBoundary>
            <footer>
              <img src={vision} alt="" className="footer__vision" />
            </footer>
        </>
    )
  }

  export default MainPage;