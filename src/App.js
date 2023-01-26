import './App.css';
import Header from './Header/Header';
import Top from './Top/Top.js';
import { FaSearch,FaUserCircle,FaStoreAlt, FaHeart, FaShoppingBasket} from "react-icons/fa";
import SearchBar from './SearchBarMenu/SearchBarMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top/>
       <SearchBar/>
       
       
        
      </header>
    </div>
  );
}

export default App;
