import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacters } from '../api';

export default function Characters() {
    const nav = useNavigate();

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(data => {
            setCharacters(data);
        })
    }, []);

    return (
        <div>

            <h2>Characters</h2>

            {characters.map(c => (
                <div key={c.id}>
                    <Link to={`/characters/${c.id}`}>{c.name}</Link>
                </div>
            ))}

            <button onClick={() => nav(`/characters/new/edit`)}>New Character</button>

        </div>
    )
}