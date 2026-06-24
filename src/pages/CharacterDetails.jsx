import { useState, useEffect } from 'react';
import { getCharacter } from '../api';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function CharacterDetails() {
    let nav = useNavigate();

    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    const [openEntities, setOpenEntities] = useState(new Set());

    useEffect(() => {
        getCharacter(id).then(data => {
            setCharacter(data);
        });
    }, [id]);

    const toggleEntity = (entityName) => {
        setOpenEntities(prev => {
            const newSet = new Set(prev);

            if (newSet.has(entityName)) {
                newSet.delete(entityName);
            }
            else {
                newSet.add(entityName);
            }
            return newSet;
        });
    };

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

                <h3>Items <br />
                <button onClick={() => nav(`/characters/${character.id}/item/new`)}>New Item</button></h3>

                {character.items && character.items.length > 0 ? (
                    character.items.map(item => (
                        <div key={item.id}>
                            <span onClick={() => toggleEntity(item.name)} style={{ cursor: 'pointer', color: 'blue' }}><strong><p>{item.name} </p></strong></span>
                            {openEntities.has(item.name) && (< span style={{ whiteSpace: 'pre-line' }}> <p>{item.description}</p>
                            <button onClick={() => nav(`/characters/${character.id}/item/${item.id}`)}>Edit</button>
                            <button>Delete</button>
                            </span>)}
                            
                        </div>
                    ))
                ) : (
                    <p>No items</p>
                )}

                <h3>Abilities <br />
                <button onClick={() => nav(`/characters/${character.id}/ability/new`)}>New Ability</button></h3>                

                {character.abilities && character.abilities.length > 0 ? (
                    character.abilities.map(ability => (
                        <div key={ability.id}>
                            <span onClick={() => toggleEntity(ability.name)} style={{ cursor: 'pointer', color: 'blue' }}><strong><p>{ability.name}</p></strong></span>
                            {openEntities.has(ability.name) && (<span style={{ whiteSpace: 'pre-line' }}><p>{ability.description}</p>
                            <button onClick={() => nav(`/characters/${character.id}/ability/${ability.id}`)}>Edit</button>
                            <button>Delete</button>
                            </span>)}
                        </div>
                    ))
                ) : (
                    <p>No abilities</p>
                )}
            </div>
        )
    }
}