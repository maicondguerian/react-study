import './App.css';
import Top from './Components/Top/Top.js';
import SearchBar from './Components/SearchBarMenu/SearchBarMenu';
import PictureBanner from './Components/PictureBanner/PictureBanner';
import NavLinks from './Components/NavLinks/NavLinks';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top/>
        <SearchBar/>
        <NavLinks/>
        <PictureBanner/>
      </header>
    </div>
  );
}
export default App;
