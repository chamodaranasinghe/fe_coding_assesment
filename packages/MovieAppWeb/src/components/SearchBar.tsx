
import { searchMovies } from "@assessment/datastore";
import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useAppDispatch } from "../hooks/ReduxHooks";
import { setSearchMoviesLoading, setSearchMoviesError, setSearchMovies } from "../reducers/SearchMovieReducer";


const SearchBar: React.FC = () => {
    const [searchText, setSearchText] = React.useState('');
    const dispatch = useAppDispatch();
    const search = async (searchText: string) => {
        dispatch(setSearchMoviesLoading(true));
        dispatch(setSearchMoviesError(null));
        try {
            const searchedMovies = await searchMovies(searchText);
            dispatch(setSearchMovies(searchedMovies));
            dispatch(setSearchMoviesError(null));
        } catch (error) {
            dispatch(setSearchMoviesError('Error searching movies'));
            dispatch(setSearchMovies([]));
        } finally {
            dispatch(setSearchMoviesLoading(false));
        }
    };

    const handleSearch = () => {
        search(searchText);
    };

    return (<InputGroup className="mb-3">
        <Form.Control
            placeholder="Search..."
            aria-label="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch} variant="primary">
            Search
        </Button>
    </InputGroup>)
};

export default SearchBar;