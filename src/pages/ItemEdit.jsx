import { useState, useEffect } from 'react';
import { getItem } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

export default function ItemEdit() {
    let nav = useNavigate();

    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(id).then(data => {
            setItem(data);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //await updateItem(id, item);

        //nav(`/characters/${item.characterId}`);
    }

    if (!item) {
        return (
            <div>

            <h2>Edit Item</h2>

            <h2>Loading...</h2>

            </div>
        )
    }
    else {
        return (
            <div>
                <form onSubmit={handleSubmit}>

                    <h2>Edit Item</h2>

                    <h2>{item.name}</h2>

                    <p>Name: <input name="name" value={item.name} onChange={handleChange}></input></p>
                    <br />

                    <p>Description: <textarea name="description" value={item.description} onChange={handleChange} style={{ resize: 'none', verticalAlign: 'top', width: '300px', height: '80px' }}></textarea> </p>

                    <button type="submit">Save Changes</button>

                </form>
            </div>
        )
    }
}