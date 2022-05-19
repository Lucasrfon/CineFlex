import MovieCard from "../components/MovieCard";

export default function Movies ({movies}) {
    return (
        <main>
            <h2>Selecione o filme</h2>
            <div className="moviesContainer">
                {movies.map((i, index) => 
                <MovieCard 
                filme={i.movie} 
                nome={i.nome} 
                index={index}
                />)}
            </div>
        </main>
    )
}