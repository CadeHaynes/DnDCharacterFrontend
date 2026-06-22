import { useState, useEffect } from 'react';
import { getItem, updateItem, deleteItem, createItem } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

export default function ItemEdit() {
    let nav = useNavigate();

    const { characterId, id } = useParams();
    const [item, setItem] = useState({
        name: '',
        description: ''
    });
    const [itemName, setItemName] = useState('');

    const isNew = id === "new";

    useEffect(() => {
        if (isNew) return;

        getItem(id).then(data => {
            setItem(data);
            setItemName(data.name);
        });
    }, [id, isNew]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isNew) {
            await createItem(characterId, item);
        }
        else {
            await updateItem(id, item);
        }

        nav(`/characters/${characterId}`);
    }

    const handleDelete = async (e) => {
        e.preventDefault();

        await deleteItem(id);

        nav(`/characters/${characterId}`);
    }

    if (!item) {
        return (
            <div>

            <h2>{isNew ? "Create" : "Edit"} Item</h2>

            <h2>Loading...</h2>

            </div>
        )
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <h2>{isNew ? "Create" : "Edit"} Item</h2>

                    {isNew ? "" : <h2>{itemName}</h2>}

                    <p>Name: <input name="name" value={item.name} onChange={handleChange}></input></p>
                    <br />

                    <p>Description: <textarea name="description" value={item.description} onChange={handleChange} style={{ resize: 'none', verticalAlign: 'top', width: '300px', height: '80px' }}></textarea> </p>

                    <button type="submit">Save</button>
                    <button type="button" onClick={() => nav(`/characters/${characterId}`)}>Cancel</button>
                    <button type="button" onClick={handleDelete}>Delete</button>

                </form>
            </div>
        )
    }
}