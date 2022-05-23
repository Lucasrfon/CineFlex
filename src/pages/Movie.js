import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Day from "../components/Day";
import Footer from "../components/Footer";

export default function Movie () {
    const idMovie = useParams();
    const [movie, setMovie] = useState({});
    const [days, setDays] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie.idMovie}/showtimes`);

        promisse.then((a) => {setMovie(a.data); setDays(a.data.days)});
    }, []);

    return (
        <main>
            <h2>Selecione o horário</h2>
            {days.map((i) => (
                <Day day={`${i.weekday} - ${i.date}`} hour={i.showtimes} key={i.id}/>
            ))}
            <Footer movie={movie} />
        </main>
    )
}