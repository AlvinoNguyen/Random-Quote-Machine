import React from "react";

const MediaButton = (props) => (
    <a
        className="button"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        style={props.styles}
    >
        <img
            className="icon-image"
            src={props.imageURL}
            alt={props.name}
        />
    </a>
);

export default MediaButton;