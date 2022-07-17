import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AppHeader from './component/appHeader/AppHeader'
import HeroPage from './component/heroPage/HeroPage';
import './App.scss';
import MainPage from "./component/pages/MainPage";
import ComicsPage from './component/pages/ComicsPage';
import NoMatch404 from "./component/pages/404/404";
import ComicPage from "./component/pages/ComicPage/ComicPage";

function App() {
  return (
    <div className="container">
      
      <Router>
        <AppHeader/>
        
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/comics" element={<ComicsPage/>}/>
          <Route path="*" element={<NoMatch404/>}></Route>
          <Route path="/comics/:comicId" element={<ComicPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
