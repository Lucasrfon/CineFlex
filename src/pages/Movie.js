import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Day from "../components/Day";
import Footer from "../components/Footer";

export default function Movie () {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);

        promisse.then((a) => {setMovie(a.data)});
    }, []);

    return (
        <main>
            <h2>Selecione o horário</h2>
            <Day day="QUINTA FEIRA - 24/05/2022"/>
            <Footer movie={movie} />
        </main>
    )
}