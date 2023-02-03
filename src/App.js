import './App.css';
import Top from './Components/Top/Top.js';
import SearchBar from './Components/SearchBarMenu/SearchBarMenu';



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
