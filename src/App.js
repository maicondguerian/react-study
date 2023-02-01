import './App.css';
import Top from './Top/Top.js';
import SearchBar from './SearchBarMenu/SearchBarMenu';
import Modal from './Modal/Modal';

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
