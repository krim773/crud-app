import logo from './logo.svg';
import './App.css'; 
// importar el hook
import {useState} from 'react';
import List from './components/List';
import Form from './components/Form';


function App() {
  // una constante que se desestrurara de useState
  const [ lista, setLista] = useState(
    [
      {
        nombre:"Mario",
        mundo: "Nintendo64"
      }
  ])
  return (
    <div className="App d-flex p-5">
      {/* importar el form */}
      <Form  lista = {lista} setLista ={setLista}/>

      {/* usar props */}
      {/* tener en cuenta que se la ve a enciar, el arreglo o que  */}
      <List lista={lista} setLista ={setLista} />

    </div>
  );
}

export default App;
