import React from "react";
import Quote from './Quote.js';
import Buttons from './Buttons.js';

class App extends React.Component {
    render() {
        return (
            <div id="quote-box">
                <Quote/>
                <Buttons/>
            </div>
        );
    }
}

export default App;