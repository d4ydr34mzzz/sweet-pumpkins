import React from "react";
import "./Selection.css";

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onGenreChange(event.target.value);
    }
    
    render() {
        return(
            <div className="selection">
                <label>Genre</label>
                <select value={this.props.genre} onChange={this.handleChange}>
                    {
                        this.props.genres.map((genre) =>
                            <option key={genre.id} value={genre.name}>{genre.name}</option>
                        )
                    }
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>        
                </select>
            </div>
        );
    }
}

export default Selection;