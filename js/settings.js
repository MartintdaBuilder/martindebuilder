const title = "Martin the asdasd";
//default color "#202529"
const titleColor = "red";

const cardImage = {
    fileNameAndExt: "diamonds.png", //MIDDLE background
    fallbackColor: "white",
    offsetX: 0,
    offsetY: 0,
    mirror: false
};

const leftImage = {
    fileNameAndExt: "guuji_of_the_grand_narukami_shrine.png", //LEFT background
    fallbackColor: "deeppink",
    offsetX: 50,
    offsetY: 0,
    mirror: false
};

const rightImage = {
    fileNameAndExt: "black_bird_manipulation.png", //RIGHT background
    fallbackColor: "deeppink",
    offsetX: 10,
    offsetY: 0,
    mirror: true
};

const ROpFilter = {
    opacity: 80, //Set opacity to the RIGHT background
    gradient: "linear-gradient(45deg, hsla(147, 94%, 80%, 1) 0%, hsla(349, 77%, 47%, 1) 100%)" //To mirror the gradient place a "-" befor the "deg"
};

const LOpFilter = {
    opacity: 80, //Set opacity to the LEFT background
    gradient: "linear-gradient(-90deg, hsla(147, 94%, 80%, 1) 0%, hsla(349, 77%, 47%, 1) 100%)" //To mirror the gradient place a "-" befor the "deg"
};

const MOpFilter = {
    opacity: 80, //Set opacity to the MIDDLE background
    gradient: "linear-gradient(-90deg, hsla(0, 0%, 98%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)" //To mirror the gradient place a "-" befor the "deg"
};

const buttons = [{
    btnText: "Twitter",
    btnLink: "https://twitter.com/martindabuilder",
    btnColor: "#1da1f2",
    btnTextColor: "#ffffff"
}, {
    btnText: "Instagram",
    btnLink: "https://www.instagram.com/martindabuilder",
    btnColor: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    btnTextColor: "#ffffff"
}, {
    btnText: "Pixiv",
    btnLink: "https://www.pixiv.net/en/users/69814881",
    btnColor: "#0077c7",
    btnTextColor: "#ffffff"
}, {
    btnText: "Artstation",
    btnLink: "https://www.artstation.com/martinthebuilder",
    btnColor: "#14aff0",
    btnTextColor: "#ffffff"
}, {
    btnText: "Ko-Fi",
    btnLink: "https://ko-fi.com/martinthebuilder80998#paypalModal",
    btnColor: "#ff5e5b",
    btnTextColor: "#ffffff"
}];