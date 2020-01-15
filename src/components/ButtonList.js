import React from "react";
import MediaButton from "./MediaButton.js";
import mediaButtonData from "../data/mediaButtonData.js";

const ButtonList = (props) => {
    const mediaButtonList = mediaButtonData.map(media => (
        <MediaButton
            link={media.link}
            imageURL={media.imageURL}
            name={media.name}
            key={media.key}
        />
    ));

    return (
        <div className="button-container">
            {mediaButtonList}
            <button
                className="button"
                id="new-quote"
                onClick={() => {props.handleClick()}}
            >
                New quote
            </button>
        </div>
    );
}

export default ButtonList;