import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./css/reset.css";
import "./css/style.css";
import Movies from './pages/Movies';
import Movie from './pages/Movie';

export default function App () {
    return (
        <BrowserRouter>
            <header>CINEFLEX</header>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:idMovie" element={<Movie />} />
                <Route path="/sessao" element={<main>assento</main>} />
                <Route path="/sucesso" element={<main>conferir</main>} />
            </Routes>
        </BrowserRouter>
    )
}