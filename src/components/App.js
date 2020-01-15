import React, {Component} from "react";
import Quote from './Quote.js';
import ButtonList from './ButtonList.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            color: "",
            quoteText: "Success is a journey, not a destination.",
            quoteAuthor: "Authur Ashe"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            color: "",
            quoteText: "Changed quote",
            quoteAuthor: "Changed author"
        });
    }

    render() {
        return (
            <div id="quote-box">
                <Quote
                    color={this.state.color}
                    text={this.state.quoteText}
                    author={this.state.quoteAuthor}
                />
                <ButtonList
                    color={this.state.color} 
                    handleClick={this.handleClick}
                />
            </div>
        );
    }
}

export default App;