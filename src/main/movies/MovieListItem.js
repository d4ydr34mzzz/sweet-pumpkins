import React from "react";
import "./MovieListItem.css";

function MovieListItem(props) {
    const {title, poster_path, vote_average, release_date} = props.movie;
    const imageURL = `https://image.tmdb.org/t/p/w500/${poster_path}`
    const releaseYear = release_date.substring(0, 4);

    return(
        <li className="movie-item">
            <img src={imageURL} alt="" />   
            <div className="movie-description">
                <h2>{title}</h2>
                <section className="movie-details">
                    <div className="movie-year">
                        <span className="title">Year</span>
                        <span>{releaseYear}</span>
                    </div>
                    <div className="movie-rating">
                        <span className="title">Rating</span>
                        <span>{vote_average}</span>
                    </div>
                </section>        
            </div>
        </li>
    );
}

export default MovieListItem;