import { MovieSummary } from '@assessment/datastore';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from './MovieDetails';

type MovieCardProps = {
    movie: MovieSummary;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const [showDetails, setShowDetails] = React.useState(false);
    const { loadMovieDetails } = useMovieDetails(movie['#IMDB_ID']);
    const handleButtonClick = () => {
        setShowDetails(true);
        loadMovieDetails();
    };
    return (<><Card style={{ width: '18rem' }}>
        {movie['#IMG_POSTER'] ? <Card.Img variant="top" src={movie['#IMG_POSTER']} /> : <Card.Img variant="top" src={'no-poster.jpeg'} />}
        <Card.Body>
            <Card.Title>{movie['#TITLE']}</Card.Title>
            <Card.Text>
                {movie['#YEAR']}
            </Card.Text>
            <Button onClick={handleButtonClick} variant="primary">View</Button>
        </Card.Body>
    </Card>
        <MovieDetails show={showDetails} onHide={() => setShowDetails(false)} />
    </>);
};

export default MovieCard;