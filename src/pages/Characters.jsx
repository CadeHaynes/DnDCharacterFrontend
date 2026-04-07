import { Link } from 'react-router-dom';

export default function Characters({ characters }) {
    return (
        <div>

            <h2>Characters</h2>

            {characters.map(c => (
                <div key={c.id}>
                    <Link to={`/characters/${c.id}`}>{c.name}</Link>
                </div>
            ))}

        </div>
    )
}