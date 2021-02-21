import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h2>Try our pizza builder!</h2>
            <Link to='/pizza'>
                <button class="build">Build Pie!</button>
            </Link>
            </div>
    );
};
export default Home;