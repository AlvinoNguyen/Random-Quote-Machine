import React from "react";

class Quote extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="quote-container">
                <div className="quote-text">
                    <img className="quote-icon" src="./images/quote-left-solid.svg" alt=""/>
                    <span id="text">{`${this.props.text}`}</span>
                </div>
                <div className="quote-author">
                    - <span id="author">{`${this.props.author}`}</span>
                </div>
            </div>
        );
    }
}

export default Quote;