import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/Footer';

export default function Seats() {
    const idHour = useParams();
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [movie, setMovie] = useState("");
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHour.idHour}/seats`);
        console.log(promisse)

        promisse.then((a) => {
            setDate(a.data.day.weekday); 
            setHour(a.data.name);
            setMovie(a.data.movie);
            setSeats(a.data.seats);
        })
    }, []);
    return (
        <>
            <Container>
                <h2>Selecione o(s) assento(s)</h2>
                <ContainerAssentos>
                    {seats.map((a) => (
                        a.isAvailable ?
                        (<SeatOk key={a.id}>{a.name}</SeatOk>) :
                        <SeatNOk onClick={alert("Esse assento não está disponível")} key={a.id}>{a.name}</SeatNOk>
                    ))}
                </ContainerAssentos>
                <Status>
                    <div>
                        <SeatSelect></SeatSelect>
                        <span>Selecionado</span>
                    </div>
                    <div>
                        <SeatOk></SeatOk>
                        <span>Disponível</span>
                    </div>
                    <div>
                        <SeatNOk></SeatNOk>
                        <span>Indisponível</span>
                    </div>
                </Status>
                <form>
                    <input placeholder='Digite seu nome...' />
                    <input placeholder='Digite seu CPF...' />
                </form>
            </Container>
            <Footer date={`${date} - ${hour}`} movie={movie}/>
        </>
    )
}

const Container = styled.div`
    margin: 100px 0px 150px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContainerAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 15px;

    widht: 100%;
    justify-content: center;
`

const SeatOk = styled.div`
    background-color: #C3CFD9;
    margin-right: 25px;
    margin-bottom: 25px;
    font-size: 11px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SeatNOk = styled.div`
    background-color: #F7C52B;
    margin-right: 25px;
    margin-bottom: 25px;
    font-size: 11px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SeatSelect = styled.div`
    background-color: #8DD7CF;
    margin-right: 25px;
    margin-bottom: 25px;
    font-size: 11px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Status = styled.div`
    display: flex;
`