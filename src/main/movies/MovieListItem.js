import React from "react";
import "./MovieListItem.css";

function MovieListItem(props) {
    return(
        <li className="movie-item">
            {props.title}
        </li>
    );
}

export default MovieListItem;