import { Link, useNavigate } from 'react-router-dom';

export default function Characters({ characters }) {
    let nav = useNavigate();

    return (
        <div>

            <h2>Characters</h2>

            <button onClick={() => nav("/")}>Home</button>

            {characters.map(c => (
                <div key={c.id}>
                    {c.name}
                </div>
            ))}

        </div>
    )
}