import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
    let nav = useNavigate();

    return (
        <div>
            <h2>Home</h2>

            <p><Link to="/characters">Characters</Link></p>

            <button onClick={() => nav("/characters")}>Characters</button>
        </div>
    )
}