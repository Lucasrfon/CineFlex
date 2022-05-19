import { Link } from "react-router-dom";

export default function MovieCard ({filme, nome, index}) {
    return (
        <Link to="filme">
            <div className="movieCard">
                <img src={filme} alt={nome} />
            </div>
        </Link>
    )
}