import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import Movies from './pages/Movies';
import Footer from './components/Footer';
import Schedule from './pages/Schedule';

export default function App () {
    const [footer, setFooter] = useState(false);
    const movies = [
        { movie: "https://i.pinimg.com/236x/e5/87/be/e587be3c42f3af392db81996f3884068.jpg", nome: "animais fant"},
        { movie: "https://upload.wikimedia.org/wikipedia/pt/3/33/Encantados_%28filme%29.jpg", nome: "encantados"},
        { movie: "https://www.exibidor.com.br/fotos/producoes/img_grande/10729.jpg", nome: "jumanji"},
        { movie: "https://i.pinimg.com/originals/0a/c1/c1/0ac1c1b71551cf720cc1671b356249e2.jpg", nome: "willow"},
        { movie: "https://i.pinimg.com/236x/e5/87/be/e587be3c42f3af392db81996f3884068.jpg", nome: "animais fant"},
        { movie: "https://upload.wikimedia.org/wikipedia/pt/3/33/Encantados_%28filme%29.jpg", nome: "encantados"},
        { movie: "https://www.exibidor.com.br/fotos/producoes/img_grande/10729.jpg", nome: "jumanji"},
        { movie: "https://i.pinimg.com/originals/0a/c1/c1/0ac1c1b71551cf720cc1671b356249e2.jpg", nome: "willow"},
        { movie: "https://i.pinimg.com/236x/e5/87/be/e587be3c42f3af392db81996f3884068.jpg", nome: "animais fant"},
        { movie: "https://upload.wikimedia.org/wikipedia/pt/3/33/Encantados_%28filme%29.jpg", nome: "encantados"},
        { movie: "https://www.exibidor.com.br/fotos/producoes/img_grande/10729.jpg", nome: "jumanji"},
        { movie: "https://i.pinimg.com/originals/0a/c1/c1/0ac1c1b71551cf720cc1671b356249e2.jpg", nome: "willow"}        
    ]
    return (
        <BrowserRouter>
            <header onClick={() => setFooter(!footer)}>CINEFLEX</header>
            <Routes>
                <Route path="/" element={<Movies movies={movies} />} />
                <Route path="/filme" element={<Schedule />} />
                <Route path="/sessao" element={<main>assento</main>} />
                <Route path="/sucesso" element={<main>conferir</main>} />
            </Routes>
            {footer ? <Footer movies={movies} /> : ""}
        </BrowserRouter>
    )
}