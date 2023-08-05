import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Aprende como se planifica una operación minera subterránea...paso a paso'}/>
    </div>
  );
}

export default App;
