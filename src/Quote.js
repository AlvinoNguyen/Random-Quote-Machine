import React from "react";

class Quote extends React.Component {
    render() {
        return (
            <div className="quote-container">
                <div className="quote-text">
                    <img src="" alt=""/>
                    <span id="text">Success is a journey, not a destination.</span>
                </div>
                <div className="quote-author">
                    - <span id="author">Arthur Ashe</span>
                </div>
            </div>
        );
    }
}

export default Quote;