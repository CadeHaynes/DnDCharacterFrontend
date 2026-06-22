import { useState, useEffect } from 'react';
import { getAbility, updateAbility, deleteAbility, createAbility } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

export default function AbilityEdit() {
    let nav = useNavigate();

    const { characterId, id } = useParams();
    const [ability, setAbility] = useState({
        name: '',
        description: ''
    });
    const [abilityName, setAbilityName] = useState('');

    const isNew = id === "new";

    useEffect(() => {
        if (isNew) return;

        getAbility(id).then(data => {
            setAbility(data);
            setAbilityName(data.name);
        });
    }, [id, isNew]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAbility(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isNew) {
            await createAbility(characterId, ability);
        }
        else {
            await updateAbility(id, ability);
        }

        nav(`/characters/${characterId}`);
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        await deleteAbility(id);

        nav(`/characters/${characterId}`);
    }

    if (!ability) {
        return (
            <div>

            <h2>{isNew ? "Create" : "Edit"} Ability</h2>

            <h2>Loading...</h2>

            </div>
        )
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <h2>{isNew ? "Create" : "Edit"} Ability</h2>

                    <h2>{abilityName}</h2>

                    <p>Name: <input name="name" value={ability.name} onChange={handleChange}></input></p>
                    <br />

                    <p>Description: <textarea name="description" value={ability.description} onChange={handleChange} style={{ resize: 'none', verticalAlign: 'top', width: '300px', height: '80px' }}></textarea> </p>

                    <button type="submit">Save</button>
                    <button type="button" onClick={() => nav(`/characters/${characterId}`)}>Cancel</button>
                    <button type="button" onClick={handleDelete}>Delete</button>

                </form>
            </div>
        )
    }
}