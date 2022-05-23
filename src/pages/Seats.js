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
    const [selection, setSelection] = useState([]);

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
        setForm({...form, ids: selection, name: name, cpf: cpf});
        axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', form)
    }

    function test (a) {
        if(selection.includes(a.id)){
            setSelection(selection.filter((i) => i !== a.id));
            setSelected(selected.filter((i) => i !== a.name));

        } else {
            setSelection([...selection, a.id]);
            setSelected([...selected, a.name]);
        }
    }
    

    return (
        <>
            <Container>
                <h2>Selecione o(s) assento(s)</h2>
                <ContainerAssentos>
                    {seats.map((a) => (
                        a.isAvailable ?
                        <Seat key={a.id} color="#7B8B99" backgroundcolor="#C3CFD9" onClick={() => test(a)}>{a.name}</Seat> :
                        <Seat key={a.id} color="#F7C52B" backgroundcolor="#FBE192" onClick={() => alert("Esse assento não está disponível")}>{a.name}</Seat>
                    ))}
                </ContainerAssentos>
                <Status>
                    <div>
                        <Seat color="#1AAE9E" backgroundcolor="#8DD7CF"></Seat>
                        <span>Selecionado</span>
                    </div>
                    <div>
                        <Seat color="#7B8B99" backgroundcolor="#C3CFD9"></Seat>
                        <span>Disponível</span>
                    </div>
                    <div>
                        <Seat color="#F7C52B" backgroundcolor="#FBE192"></Seat>
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

const Seat = styled.div`
    background-color: ${props => props.backgroundcolor};
    margin-right: 10px;
    margin-bottom: 20px;
    font-size: 11px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px ${props => props.color};
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