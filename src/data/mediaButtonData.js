const mediaButtonData = [
    {
        link: "https://twitter.com/intent/tweet?text=",
        imageURL: "./images/twitter.svg",
        name: "Twitter",
        key: "twitter",
        toApiText: function(text, author) {
            return `"${text.trim()}" - ${author}`
        },
    },
    {
        link: "https://www.instagram.com/",
        imageURL: "./images/instagram.svg",
        name: "Instagram",
        key: "instagram",
        toApiText: function(text, author) {
            return "";
        },
    }
];

export default mediaButtonData;