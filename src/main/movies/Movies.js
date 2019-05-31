import React from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem"

const movies = ['Test','Test2']

class Movies extends React.Component {
    render() {
        return(
            <section className="movies">
                <ul className="movies">
                    {
                        movies.map((movie, index) =>
                            <MovieListItem key={index} title={movie} />
                        )
                    }
                </ul>
            </section>
        );
    }
}

export default Movies;