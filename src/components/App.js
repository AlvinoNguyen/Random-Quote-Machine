import React, {Component} from "react";
import Quote from './Quote.js';
import ButtonList from './ButtonList.js';
import colors from '../data/colors.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            color: '#000000',
            quoteText: "",
            quoteAuthor: ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClick();
    }

    getRandomColor() {
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        while(newColor === this.state.color)
            newColor = colors[Math.floor(Math.random() * colors.length)];
        return newColor;
    }

    handleClick() {
        fetch('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                color: this.getRandomColor(),
                quoteText: data.quoteText,
                quoteAuthor: data.quoteAuthor ? data.quoteAuthor : "Unknown"
            });
        })
        .catch(err => {
            console.log(err);
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
                        text={this.state.quoteText}
                        author={this.state.quoteAuthor}
                        color={this.state.color}
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        );
    }
}

export default App;