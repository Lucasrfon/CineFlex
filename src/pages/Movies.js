import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function Movies () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

    promisse.then(a => {setMovies(a.data)})
    }, []);


    return (
        <main>
            <h2>Selecione o filme</h2>
            <div className="moviesContainer">
                {movies.map((i) => (
                <Link to={`/sessoes/${i.id}`} key={i.id}>
                    <MovieCard 
                    movie={i.posterURL} 
                    name={i.title}
                    />
                </Link>))}
            </div>
        </main>
    )
}