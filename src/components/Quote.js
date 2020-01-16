import React from "react";

const Quote = (props) => {
    const styles = {
        color: props.color
    };

    return (
        <div className="quote-container" style={styles}>
            <div className="quote-text">
                <span id="text">
                    <span className="quotation">“</span>
                    {`${props.text}`}
                </span>
            </div>
            <div className="quote-author">
                <span id="author">- {`${props.author}`}</span>
            </div>
        </div>
    );
}

export default Quote;