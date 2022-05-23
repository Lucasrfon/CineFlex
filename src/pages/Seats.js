import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Footer from '../components/Footer';

export default function Seats({movieFinal, setMovieFinal, dateFinal, setDateFinal, hourFinal, setHourFinal, selected, setSelected, form, setForm}) {
    const idHour = useParams();
    const [seats, setSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idHour.idHour}/seats`);

        promisse.then((a) => {
            setDateFinal(a.data.day.weekday); 
            setHourFinal(a.data.name);
            setMovieFinal(a.data.movie);
            setSeats(a.data.seats);
        })
    }, []);

    function sentRequest(event) {
        event.preventDefault();
        setForm({...form, ids: selected, name: name, cpf: cpf});
        console.log(form)
    }

    return (
        <>
            <Container>
                <h2>Selecione o(s) assento(s)</h2>
                <ContainerAssentos>
                    {seats.map((a) => (
                        a.isAvailable ?
                        <SeatOk key={a.id} onClick={() => setSelected([...selected, a.id])}>{a.name}</SeatOk> :
                        <SeatNOk key={a.id} onClick={() => alert("Esse assento não está disponível")}>{a.name}</SeatNOk>
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
                <form onSubmit={sentRequest}>
                    <label htmlFor="name">Nome do comprador:</label>
                    <input placeholder='Digite seu nome...' id="name" value={name} onChange={e => setName(e.target.value)} />
                    <label htmlFor="cpf">CPF do comprador:</label>
                    <input placeholder='Digite seu CPF...' id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />

                    <button type="submit">Reservar assento(s)</button>

                </form>
            </Container>
            <Footer date={`${dateFinal} - ${hourFinal}`} movie={movieFinal}/>
        </>
    )
}

const Container = styled.div`
    margin: 100px 0px 150px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 25px 0px 25px;

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
    font-size: 18px;
}

input {
    height: 51px;
    margin: 5px 0px 15px 0px;
    font-size: 18px;
    padding: 15px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
}

button {
    margin-top: 60px;
    color: white;
    background-color: #E8833A;
    height: 42px;
    width: 225px;
    border: none;
    border-radius: 3px;
    align-self: center;
    font-size: 18px;
}
`;

const ContainerAssentos = styled.div`
    display: flex;
    flex-wrap: wrap;
    widht: 100%;
    justify-content: center;
`

const SeatOk = styled.div`
    background-color: #C3CFD9;
    margin-right: 10px;
    margin-bottom: 20px;
    font-size: 11px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #7B8B99;
`

const SeatNOk = styled.div`
    background-color: #FBE192;
    margin-right: 10px;
    margin-bottom: 20px;
    font-size: 11px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #F7C52B;
`

const SeatSelect = styled.div`
    background-color: #8DD7CF;
    margin-right: 10px;
    margin-bottom: 20px;
    font-size: 11px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px #1AAE9E;
`

const Status = styled.div`
    display: flex;

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 15px;
    font-size: 13px;
}
`