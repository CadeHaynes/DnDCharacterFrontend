import { useState, useEffect } from 'react';
import { getCharacters } from './api';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Characters from './pages/Characters';

function App() {
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

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters characters={characters} />} />
            </Routes>
      </div>
  )
}

export default App
