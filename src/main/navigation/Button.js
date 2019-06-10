import React from "react";
import "./Button.css";

class Button extends React.Component {
    render() {
        return(
            <div className="search-button">
                <button onClick={this.props.onClick}>
                    {this.props.children}
                </button>
            </div>
        );
    }
}

export default Button;