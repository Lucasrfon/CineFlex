import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function Movies () {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

    promisse.then((a) => {setMovies(a.data)})
    }, []);


    return (
        <main>
            <h2>Selecione o filme</h2>
            <div className="moviesContainer">
                {movies.map((a) => (
                <Link to={`/sessoes/${a.id}`} key={a.id}>
                    <MovieCard 
                    movie={a.posterURL} 
                    name={a.title}
                    />
                </Link>))}
            </div>
        </main>
    )
}