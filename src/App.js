import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import "./css/reset.css";
import "./css/style.css";
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Seats from './pages/Seats';
import Success from './pages/Success';

export default function App () {
    const [movieFinal, setMovieFinal] = useState("");
    const [dateFinal, setDateFinal] = useState("");
    const [hourFinal, setHourFinal] = useState("");
    const [selected, setSelected] = useState([]);
    const [form, setForm] = useState({});

    return (
        <BrowserRouter>
            <header>CINEFLEX</header>
            <Routes>
                <Route path="/" element={<Movies />} />

                <Route path="/sessoes/:idMovie" element={<Movie />} />

                <Route path="/assentos/:idHour" element={<Seats movieFinal={movieFinal} setMovieFinal={setMovieFinal} dateFinal={dateFinal} setDateFinal={setDateFinal} hourFinal={hourFinal} setHourFinal={setHourFinal} selected={selected} setSelected={setSelected} form={form} setForm={setForm} />} />

                <Route path="/sucesso" element={<Success movieFinal={movieFinal} dateFinal={dateFinal} hourFinal={hourFinal} selected={selected} form={form} />} />
            </Routes>
        </BrowserRouter>
    )
}