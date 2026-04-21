import { useState, useEffect } from 'react';
import { getCharacter, updateCharacter } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

export default function CharacterEdit() {
    let nav = useNavigate();

    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        getCharacter(id).then(data => {
            setCharacter(data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCharacter(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await updateCharacter(id, character);

        nav(`/characters/${id}`);
    }

    if (!character) {
        return (
            <div>

            <h2>Edit Character</h2>

            <h2>Loading...</h2>

            </div>
        )
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <h2>Edit Character</h2>

                    <h2>{character.name}</h2>

                    <p>Name: <input name="name" value={character.name} onChange={handleChange}></input> </p>

                    <h3>Stats</h3>
                    <p> <strong>STR: </strong> <input name="strength" value={character.strength} onChange={handleChange}></input> <br />
                        <strong>DEX: </strong> <input name="dexterity" value={character.dexterity} onChange={handleChange}></input> <br />
                        <strong>CON: </strong> <input name="constitution" value={character.constitution} onChange={handleChange}></input> <br />
                        <strong>INT: </strong> <input name="intelligence" value={character.intelligence} onChange={handleChange}></input> <br />
                        <strong>WIS: </strong> <input name="wisdom" value={character.wisdom} onChange={handleChange}></input> <br />
                        <strong>CHA: </strong> <input name="charisma" value={character.charisma} onChange={handleChange}></input></p>

                    <br />
                    <button type="submit">Save Changes</button>

                </form>
            </div>
        )
    }
}