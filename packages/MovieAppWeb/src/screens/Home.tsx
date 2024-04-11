import React, { useEffect } from "react";
import RandomMovies from "../components/RandomMovies";
import useRandomMovies from "../hooks/useRandomMovies";
import { Container, Navbar } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import SearchMovies from "../components/SearchMovies";
import { useAppSelector } from "../hooks/ReduxHooks";

const Home: React.FC = () => {
    const { randomMovies } = useRandomMovies();
    const searchIsActive = useAppSelector((state) => state.SearchMovies.isActive);
    useEffect(() => {
        randomMovies();
        //need to load on component mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">
                        <SearchBar />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
        {
            searchIsActive ? <SearchMovies /> : <RandomMovies />
        }

    </>);
};

export default Home;