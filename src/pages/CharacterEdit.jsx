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

                    <input name="name" value={character.name} onChange={handleChange}></input>

                    <button type="submit">Save Changes</button>

                </form>
            </div>
        )
    }
}