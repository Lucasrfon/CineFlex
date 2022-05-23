import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/Footer';

export default function Seats() {
    const idHour = useParams();
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [movie, setMovie] = useState("")

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHour.idHour}/seats`);
        console.log(promisse)

        promisse.then((a) => {
            setDate(a.data.day.weekday); 
            setHour(a.data.name);
            setMovie(a.data.movie)
        })
    }, []);
    return (
        <>
            <Container>
                <h2>oi</h2>
            </Container>
            <Footer date={`${date} - ${hour}`} movie={movie}/>
        </>
    )
}

const Container = styled.div`
    margin: 100px 0px 150px 0px;
`;