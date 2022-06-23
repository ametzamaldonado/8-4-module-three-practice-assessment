import "./App.css";
import Nav from './Nav/NavComponent';
import { Route, Routes } from "react-router-dom";

// Components:
import Home from './Components/Home';
import Berries from './Components/Berries/SortBerries';
import Locations from './Components/Locations/ShowLocations';
import Pokemon from './Components/Pokemon/PokemonSearch'
import { useState, useEffect } from "react";

export default function App() {
  const [berries, setBerries] = useState([]);
  const [pokemons, setPokemon] = useState('');
  const [locations, setLocation] = useState('');

  const [input, setInput] = useState('');

  function getBerries() {
    return fetch(`https://pokeapi.co/api/v2/berry/${input}`)
      .then((response) => response.json())
      .then((data) => { //
        setBerries(data.results)
      })
  }

  function getPokemon() {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      .then((response) => response.json())
      .then((data) => { 
        setPokemon(data.results)
      })
  }

  function getLocation() {
    return fetch(`https://pokeapi.co/api/v2/location/${input}`)
      .then((response) => response.json())
      .then((data) => { 
        setLocation(data.results)
      })
  }

  useEffect(() => {
    getBerries();
    getPokemon();
    getLocation();
  }, [input])

  console.log(berries);
  console.log(pokemons);
  console.log(locations);
  
  return (
    <div className="app">
      <nav>
        <Nav />
      </nav>
      <main>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/berries" element={< Berries  berries={berries} setInput={setInput} input={input}/>} />
          <Route exact path="/locations" element={< Locations locations={locations} />} />
          <Route exact path="/pokemon" element={< Pokemon pokemons={pokemons} />} />
        </Routes>
      </main>
    </div>
  );
}


