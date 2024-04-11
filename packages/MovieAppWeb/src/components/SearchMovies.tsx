import React from "react";
import { useAppSelector } from "../hooks/ReduxHooks";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import ErrorLabel from "./Error";

const SearchMovies: React.FC = () => {
    const searchedMovies = useAppSelector(state => state.SearchMovies.list);
    const isLoading = useAppSelector(state => state.SearchMovies.loading);
    const error = useAppSelector(state => state.SearchMovies.error);
    if (error) return <ErrorLabel />;
    if (isLoading) return <Loading />;
    if (!searchedMovies) return <></>;
    return (<>
        <Container fluid className="p-10">
            <Row className="justify-content-center">
                {searchedMovies.map(movie => <MovieCard key={movie["#IMDB_ID"]} movie={movie} />)}
            </Row>

        </Container>
    </>);
};

export default SearchMovies;