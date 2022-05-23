import styled from "styled-components";
import MovieCard from "./MovieCard";

export default function Footer ({movie, date}) {
    return (
        <footer>
            <MovieCard movie={movie.posterURL} name={movie.title} />
            <Container>
                <h3>{movie.title}</h3>
                <span>{date}</span>
            </Container>
        </footer>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
`;