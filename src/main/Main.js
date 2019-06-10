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
                max: 2019,
                step: 1,
                value: {min: 2000, max: 2019}
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
            page: 1,
            moviesURL: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&certification_country=US&certification.lte=PG-13&include_adult=false&include_video=false&page=1`,
            movies: [],
            total_pages: 1
        };
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
        this.setGenres = this.setGenres.bind(this);
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
        this.generateURL = this.generateURL.bind(this);
        this.storeMovies = this.storeMovies.bind(this);
        this.fetchMovies = this.fetchMovies.bind(this);
        this.onPageIncrease = this.onPageIncrease.bind(this);
        this.onPageDecrease = this.onPageDecrease.bind(this);
    }
    
    componentDidMount() {
        this.fetchMovies(this.state.moviesURL);
    }

    componentWillUpdate(nextProps, nextState) {
        if(this.state.moviesURL !== nextState.moviesURL){
            this.fetchMovies(nextState.moviesURL);
        }

        if(this.state.page !== nextState.page) {
            this.generateURL();
        }
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
                          `with_runtime.lte=${runtime.value.max}&` +
                          `page=${this.state.page}`;
        this.setState({moviesURL});
    }

    onSearchButtonClick() {
        this.setState({page: 1});
        this.generateURL();
    }

    fetchMovies(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => this.storeMovies(data))
            .catch(error => console.log(error))
    }

    storeMovies(data) {
        const movies = data.results.map(result => {
            const {vote_count, id, genre_ids, poster_path, title, vote_average, release_date} = result;
            return {vote_count, id, genre_ids, poster_path, title, vote_average, release_date};
        });
        
        this.setState({movies, total_pages: data.total_pages});
    }

    onPageIncrease() {
        const {page, total_pages} = this.state;
        const nextPage = page + 1;
        if(nextPage <= total_pages) {
            this.setState({page: nextPage})
        }
    }

    onPageDecrease() {
        const nextPage = this.state.page - 1;
        if(nextPage > 0) {
            this.setState({page: nextPage})
        }
    }

    render() {
        return(
            <section className="main">
                <Navigation onGenreChange={this.onGenreChange} onSliderChange={this.onSliderChange} setGenres={this.setGenres} onSearchButtonClick={this.onSearchButtonClick} {...this.state} />
                <Movies movies={this.state.movies} page={this.state.page} onPageIncrease={this.onPageIncrease} onPageDecrease={this.onPageDecrease} />
            </section>
        );
    }
}

export default Main;