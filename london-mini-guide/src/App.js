import logo from './logo.svg';
import './App.css';
import CityDropdownMenu from "./components/CityDropdownMenu";
import PlaceButtons from "./components/PlaceButtons";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className= "header-container">
        <h1>City Mini Guide</h1>
        <CityDropdownMenu />
        <PlaceButtons />
        <Table />
      </header>
    </div>
  );
}

export default App;
