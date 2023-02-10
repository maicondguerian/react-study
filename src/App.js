import './App.css';
import Top from './Components/Top/Top.js';
import SearchBar from './Components/SearchBarMenu/SearchBarMenu';
import PictureBanner from './Components/PictureBanner/PictureBanner';
import NavLinks from './Components/NavLinks/NavLinks';
import NewCarousel from './Components/ElasticCarouseel/Caroussel';
import MiniCarousel from './Components/MiniCarrosel/Caroussel';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top/>
        <SearchBar/>
        <NavLinks/>
        <PictureBanner/>
        <NewCarousel/>
        <MiniCarousel/>
      </header>
    </div>
  );
}
export default App;
