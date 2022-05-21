export default function MovieCard ({ movie, name }) {
    return (
        <div className="movieCard">
            <img src={movie} alt={name} />
        </div>
    )
}