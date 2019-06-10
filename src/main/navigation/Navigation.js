import React from "react";
import "./Navigation.css";
import Selection from "./Selection";
import Slider from "./Slider";
import Button from "./Button";

class Navigation extends React.Component {
    componentDidMount() {
        const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`;
        fetch(genresURL)
            .then(response => response.json())
            .then(data => this.props.setGenres(data.genres))
            .catch(error => console.log(error));
    }

    render() {
        return(
            <section className="navigation">
                <Selection genre={this.props.genre} genres={this.props.genres} onGenreChange={this.props.onGenreChange} />  
                <Slider data={this.props.year} onSliderChange={this.props.onSliderChange} />
                <Slider data={this.props.rating} onSliderChange={this.props.onSliderChange} />
                <Slider data={this.props.runtime} onSliderChange={this.props.onSliderChange} />
                <Button onClick={this.props.onSearchButtonClick}>Search</Button>
            </section>
        );
    }
}

export default Navigation;