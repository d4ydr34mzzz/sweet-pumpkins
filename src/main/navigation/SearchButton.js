import React from "react";
import "./SearchButton.css";

class SearchButton extends React.Component {
    render() {
        return(
            <div className="search-button">
                <button onClick={this.props.onSearchButtonClick}>Search</button>
            </div>
        );
    }
}

export default SearchButton;