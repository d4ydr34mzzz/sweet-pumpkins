import React from "react";
import "./Navigation.css";
import Selection from "./Selection";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {genre: "Action"};
    }

    onGenreChange(event) {
        this.setState({genre: event.target.value});
    }

    render() {
        return(
            <section className="navigation">
                <Selection genre={this.state.genre} onGenreChange={this.onGenreChange} />  
            </section>
        );
    }
}

export default Navigation;