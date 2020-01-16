import React, {Component} from "react";
import Quote from './Quote.js';
import ButtonList from './ButtonList.js';
import colors from '../data/colors.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            color: this.getRandomColor(),
            quoteText: "Success is a journey, not a destination.",
            quoteAuthor: "Authur Ashe"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    handleClick() {
        this.setState({
            color: this.getRandomColor(),
            quoteText: "Changed quote",
            quoteAuthor: "Changed author"
        });
    }

    render() {
        const styles = {
            backgroundColor: this.state.color
        };

        return (
            <div id="app-container" style={styles}>
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
            </div>
        );
    }
}

export default App;