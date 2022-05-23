import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./css/reset.css";
import "./css/style.css";
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Seats from './pages/Seats';
import Success from './pages/Success';

export default function App () {
    return (
        <BrowserRouter>
            <header>CINEFLEX</header>
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/sessoes/:idMovie" element={<Movie />} />
                <Route path="/assentos/:idHour" element={<Seats />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}