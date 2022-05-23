import styled from "styled-components";

export default function Success () {
    return (
        <Container>
            <h1>Pedido feito</h1>
            <h1>com sucesso!</h1>
            <h3>Filme e sessão</h3>
            <span>enolinha</span>
            <span>datinha</span>
            <h3>Ingressos</h3>
            <span>assento tal</span>
            <h3>Comprador</h3>
            <span>fulano</span>
            <span>123.456.789-10</span>
            <button>Voltar pra Home</button>
        </Container>
    )
}

const Container = styled.div`
    margin: 100px 0px 150px 0px;
    display: flex;
    flex-direction: column;
    padding: 0px 25px 0px 25px;

h1 {
    font-size: 24px;
    font-weight: 700;
    color: #247A6B;
    align-self: center;
}

h3 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 10px;
}

span {
    font-size: 22px;
}

button {
    margin-top: 100px;
    color: white;
    background-color: #E8833A;
    height: 42px;
    width: 225px;
    border: none;
    border-radius: 3px;
    align-self: center;
    font-size: 18px;
}
`