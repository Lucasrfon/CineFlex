import MovieCard from "./MovieCard";

export default function Footer ({movie, date}) {
    return (
        <footer>
            <MovieCard movie={movie.posterURL} name={movie.title} />
            <h3>{movie.title}</h3>
            <span>{date}</span>
        </footer>
    )
}