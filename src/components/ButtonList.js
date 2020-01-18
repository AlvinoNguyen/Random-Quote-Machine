import React from "react";
import MediaButton from "./MediaButton.js";
import mediaButtonData from "../data/mediaButtonData.js";

const ButtonList = (props) => {
    const styles = {
        backgroundColor: props.color
    };

    const mediaButtonList = mediaButtonData.map(media => (
        <MediaButton
            link={`${media.link}${media.toApiText(props.text, props.author)}`}
            imageURL={media.imageURL}
            name={media.name}
            key={media.key}
            styles={styles}
        />
    ));

    return (
        <div className="button-container">
            {mediaButtonList}
            <button
                className="button"
                id="new-quote"
                onClick={() => {props.handleClick()}}
                style={styles}
            >
                New quote
            </button>
        </div>
    );
}

export default ButtonList;