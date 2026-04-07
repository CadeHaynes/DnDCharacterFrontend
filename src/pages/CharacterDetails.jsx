import { useState, useEffect } from 'react';
import { getCharacter } from '../api';
import { useParams } from 'react-router-dom';
export default function CharacterDetails() {

    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        getCharacter(id).then(data => {
            setCharacter(data);
        });
    }, [id]);

    if (!character) {
        return (
            <div>

                <h2>Loading...</h2>

            </div>
        )
    }
    else {
        return (
            <div>

                <h2>{character.name}</h2>

                <h3>Stats</h3>
                <p>STR: {character.strength}</p>

            </div>
        )
    }
}