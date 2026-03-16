import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState('');
  useEffect(() => {
    const fetchTitulo = async () => {
      try {
      const response = await fetch('http://localhost:5000/conteudo');
      const conteudo = await response.json();
      setName(conteudo.titulo.name);
      } catch (e) {
        console.log("Error", e);
      }
    }
    fetchTitulo();
  }, []);
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default App;
