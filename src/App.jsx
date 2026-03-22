import { useState, useEffect } from 'react';
import { getCharacters } from './api';

import './App.css';

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

            {characters.map(c => (
                <div key={c.id}>
                    {c.name}
                </div>
            )) }
      </div>
  )
}

export default App
