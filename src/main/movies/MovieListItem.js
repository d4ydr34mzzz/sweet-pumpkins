import React from "react";
import "./MovieListItem.css";

function MovieListItem(props) {
    const {title, poster_path} = props.movie;
    const imageURL = `https://image.tmdb.org/t/p/w342/${poster_path}`

    return(
        <li className="movie-item">
            <img src={imageURL} alt="" />
            <span>{title}</span>
        </li>
    );
}

export default MovieListItem;