import React from "react";
import { useAppSelector } from "../hooks/ReduxHooks";
import { Container } from "react-bootstrap";
import MovieCard from "./MovieCard";

const RandomMovies: React.FC = () => {
    const randomMovies = useAppSelector(state => state.RandomMovies.list);
    const isLoading = useAppSelector(state => state.RandomMovies.loading);
    const error = useAppSelector(state => state.RandomMovies.error);
    return (<>
        <Container fluid>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {randomMovies.map(movie => <MovieCard key={movie["#IMDB_ID"]} movie={movie} />)}
        </Container>
    </>);
};

export default RandomMovies;