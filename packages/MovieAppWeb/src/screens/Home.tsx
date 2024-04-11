import React, { useEffect } from "react";
import RandomMovies from "../components/RandomMovies";
import useRandomMovies from "../hooks/useRandomMovies";

const Home: React.FC = () => {
    const { randomMovies } = useRandomMovies();

    useEffect(() => {
        randomMovies();
        //need to load on component mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
        <RandomMovies />
    </>);
};

export default Home;