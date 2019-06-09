import React from "react";
import "./Main.css";
import Navigation from "./navigation/Navigation";
import Movies from "./movies/Movies";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: 'Fantasy',
            genres: [],
            year: {
                label: "year",
                min: 1990,
                max: 2017,
                step: 1,
                value: {min: 2000, max: 2017}
            },
            rating: {
                label: "rating",
                min: 0,
                max: 10,
                step: 1,
                value: { min: 8, max: 10 }
            },
            runtime: {
                label: "runtime",
                min: 0,
                max: 300,
                step: 15,
                value: { min: 60, max: 120 }
            },
            moviesURL: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
        };
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
        this.setGenres = this.setGenres.bind(this);
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
        this.generateURL = this.generateURL.bind(this);
    }
    
    onGenreChange(data) {
        this.setState({genre: data});
    }
    
    onSliderChange(data) {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value
            }
        });
    }

    setGenres(genres) {
        this.setState({genres});
    }

    generateURL() {
        const {genres, year, rating, runtime} = this.state;
        const selectedGenre = genres.find((genre) => { 
            return genre.name === this.state.genre;
        });
        const genreID = selectedGenre.id;
        
        const moviesURL = `https://api.themoviedb.org/3/discover/movie?` + 
                          `api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
                          `language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=PG-13&` +
                          `primary_release_date.gte=${year.value.min}-01-01&` +
                          `primary_release_date.lte=${year.value.max}-12-31&` +
                          `vote_average.gte=${rating.value.min}&` + 
                          `vote_average.lte=${rating.value.max}&` +
                          `with_genres=${genreID}&` +
                          `with_runtime.gte=${runtime.value.min}&` +
                          `with_runtime.lte=${runtime.value.max}&`;
        console.log(moviesURL)
        this.setState({moviesURL});
    }

    onSearchButtonClick() {
        this.generateURL();
    }

    render() {
        return(
            <section className="main">
                <Navigation onGenreChange={this.onGenreChange} onSliderChange={this.onSliderChange} setGenres={this.setGenres} onSearchButtonClick={this.onSearchButtonClick} {...this.state} />
                <Movies url={this.state.moviesURL} />
            </section>
        );
    }
}

export default Main;