import React from "react";

const Quote = (props) => {
    const styles = {
        color: props.color
    };

    return (
        <div className="quote-container" style={styles}>
            <div className="quote-text">
                <span id="text">
                    <span class="quotation">“</span>
                    {`${props.text}`}
                    <span class="quotation">”</span>
                </span>
            </div>
            <div className="quote-author">
                <span id="author">- {`${props.author}`}</span>
            </div>
        </div>
    );
}

export default Quote;