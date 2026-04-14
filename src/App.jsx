import { useState, useEffect } from 'react';
import { getCharacters } from './api';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import CharacterEdit from './pages/CharacterEdit';

function App() {
    let nav = useNavigate();

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(data => {
            console.log("API Response: ", data);
            setCharacters(data);
        })
    }, []);

    return (
      <div>
            <h1>Dungeons & Dragons Character Manager</h1>

            <button onClick={() => nav("/")}>Home</button>
            <button onClick={() => nav("/characters")}>Characters</button>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters characters={characters} />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="/characters/:id/edit" element={<CharacterEdit />} />
            </Routes>

      </div>
  )
}

export default App
