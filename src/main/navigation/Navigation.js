import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";
import SearchButton from "./SearchButton";

class Navigation extends React.Component {
    /* constructor(props) {
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
            }
        };
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
    } */

    componentDidMount() {
        const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
        fetch(genresURL)
            .then(response => response.json())
            .then(data => this.props.setGenres(data.genres))
            .catch(error => console.log(error));
    }

    /* onGenreChange(data) {
        this.setState({genre: data});
    }
    
    onSliderChange(data) {
        this.setState({
            [data.type]: {
                ...this.state[data.type],
                value: data.value
            }
        });
    } */

    render() {
        return(
            <section className="navigation">
                <Selection genre={this.props.genre} genres={this.props.genres} onGenreChange={this.props.onGenreChange} />  
                <Slider data={this.props.year} onSliderChange={this.props.onSliderChange} />
                <Slider data={this.props.rating} onSliderChange={this.props.onSliderChange} />
                <Slider data={this.props.runtime} onSliderChange={this.props.onSliderChange} />
                <SearchButton />
            </section>
        );
    }
}

export default Navigation;