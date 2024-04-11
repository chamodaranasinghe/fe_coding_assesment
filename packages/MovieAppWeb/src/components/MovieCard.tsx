import { MovieSummary } from '@assessment/datastore';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type MovieCardProps = {
    movie: MovieSummary;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (<><Card style={{ width: '18rem' }}>
        {movie['#IMG_POSTER'] ? <Card.Img variant="top" src={movie['#IMG_POSTER']} /> : <Card.Img variant="top" src={require('../assets/no-poster.jpeg')} />}
        <Card.Body>
            <Card.Title>{movie['#TITLE']}</Card.Title>
            <Card.Text>
                {movie['#AKA']}
            </Card.Text>
            <Button variant="primary">View</Button>
        </Card.Body>
    </Card></>);
};

export default MovieCard;