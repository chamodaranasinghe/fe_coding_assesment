import React from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useAppSelector } from "../hooks/ReduxHooks";
import Loading from "./Loading";
import ErrorLabel from "./Error";

type MovieDetailsProps = {
    show: boolean;
    onHide: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ show, onHide }) => {
    const movieDetails = useAppSelector(state => state.MovieDetails.movie);
    const loading = useAppSelector(state => state.MovieDetails.loading);
    const error = useAppSelector(state => state.MovieDetails.error);
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
        >
            {loading && <Modal.Body><Loading /></Modal.Body>}
            {error && <Modal.Body><ErrorLabel /></Modal.Body>}
            {movieDetails && (
                <Modal.Body>
                    {movieDetails.poster ? <Card.Img variant="top" src={movieDetails.poster} /> : <Card.Img variant="top" src={'no-poster.jpeg'} />}
                    <h4>{movieDetails.name}</h4>
                    <p>
                        {movieDetails.description}
                    </p>
                </Modal.Body>
            )}
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
        //TODO: Show additional movie details here
    )
};

export default MovieDetails;