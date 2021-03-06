import React from "react";
import "./Movies.css";
import MovieListItem from "./MovieListItem"
import Button from "../navigation/Button";

class Movies extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.storeMovies = this.storeMovies.bind(this);
    //     this.fetchMovies = this.fetchMovies.bind(this);
    //     this.state = {
    //         movies: []
    //     };
    // }
    
    // componentDidMount() {
    //     const apiURL = this.props.url;
        
    //     this.fetchMovies(apiURL);
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props.url !== nextProps.url) {
    //         this.fetchMovies(nextProps.url);
    //     }
    // }

    // fetchMovies(url) {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => this.storeMovies(data))
    //         .catch(error => console.log(error))
    // }

    // storeMovies(data) {
    //     const movies = data.results.map(result => {
    //         const {vote_count, id, genre_ids, poster_path, title, vote_average, release_date} = result;
    //         return {vote_count, id, genre_ids, poster_path, title, vote_average, release_date};
    //     });

    //     this.setState({ movies });
    // }

    render() {
        return(
            <section>
                <ul className="movies">
                    {
                        this.props.movies.map((movie) =>
                            <MovieListItem key={movie.id} movie={movie} />
                        )
                    }
                </ul>
                <div className="pagination">
                    <Button onClick={this.props.onPageDecrease}>Previous</Button>
                    <span>{`Page ${this.props.page}`}</span>
                    <Button onClick={this.props.onPageIncrease}>Next</Button>
                </div>
            </section>
        );
    }
}

export default Movies;
