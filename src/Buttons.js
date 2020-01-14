import React from "react";

class Buttons extends React.Component {
    render() {
        return (
            <div className="button-container">
                <a className="button" href="" target="_blank"></a>
                <a className="button" href="" target="_blank"></a>
                <button className="button" id="new-quote">New quote</button>
            </div>
        );
    }
}

export default Buttons;