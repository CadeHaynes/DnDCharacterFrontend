import { useState, useEffect } from 'react';
import { getCharacter } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

export default function CharacterDetails() {
    let nav = useNavigate();

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

                <h2>Characters</h2>

                <h2>Loading...</h2>

            </div>
        )
    }
    else {
        return (
            <div>

                <h2>Characters</h2>

                <h2>{character.name}</h2>

                <button onClick={() => nav(`/characters/${character.id}/edit`)}>Edit</button>

                <h3>Stats</h3>
                <p> <strong>STR:</strong> {character.strength} <br />
                    <strong>DEX:</strong> {character.dexterity} <br />
                    <strong>CON:</strong> {character.constitution} <br />
                    <strong>INT:</strong> {character.intelligence} <br />
                    <strong>WIS:</strong> {character.wisdom} <br />
                    <strong>CHA:</strong> {character.charisma}</p>

                <h3>Items</h3>
                {character.items && character.items.length > 0 ? (
                    character.items.map(item => (
                        <div key={item.id}>
                            <strong>{item.name}</strong>: {item.description}
                        </div>
                    ))
                ) : (
                    <p>No items</p>
                )}

                <h3>Abilities</h3>
                {character.abilities && character.abilities.length > 0 ? (
                    character.abilities.map(ability => (
                        <div key={ability.id}>
                            <strong>{ability.name}</strong>: {ability.description}
                        </div>
                    ))
                ) : (
                    <p>No abilities</p>
                )}

            </div>
        )
    }
}