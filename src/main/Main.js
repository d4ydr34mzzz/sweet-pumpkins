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
            }
        };
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
        this.setGenres = this.setGenres.bind(this);
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

    render() {
        return(
            <section className="main">
                <Navigation onGenreChange={this.onGenreChange} onSliderChange={this.onSliderChange} setGenres={this.setGenres} {...this.state} />
                <Movies />
            </section>
        );
    }
}

export default Main;