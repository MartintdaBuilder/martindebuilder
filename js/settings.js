// MARTIN THE BUILDER 2022

//                          ---------------------------
//                              STYLE AND SETTINGS     
//                          ---------------------------

//////////////////////////////////////////////////////////////////////////////////////////

//WARNING!!! DON'T LEAVE EMPNTY EMPY PROPERTY

// DONT: fileNameAndExt: ,
// DO:   fileNameAndExt: "",

//USE THIS TO SEE AVAILABLE ANIMATIONS https://animate.style/#usage

//IF YO WANT SOMETHIN EMPTY JUST LEAVE "" or 0 if number or 


//is for the main title and the title of the page
const title = "Martin the Builder";
//default color "#202529"
const titleColor = "white";

//////////////////////////////////////////////////////////////////////////////////////////



//PROFILE PICTURE AND BORDER
//file and ext of the pfpf
const profilePicture = "diamonds.webp";
const pfpAnimation = "animate__fadeIn";
const pfpBorder = {
    fileNameAndExt: "",
    //better to keep it squere...
    width: 32,
    height: 32,
    //pivot offset
    offsetX: -1,
    offsetY: -1
};

//////////////////////////////////////////////////////////////////////////////////////////



//the background of the center card
const cardImage = {
    //DONT FOGET THE FILE EXTENCION
    fileNameAndExt: "diamonds.webp", //MIDDLE background
    //if for some reason the image is unavailable it will set this color for background
    //combined with the gradient eventualy
    fallbackColor: "white",
    //move the background on the X and Y axises it will be probe adn erro sorry
    offsetX: 0,
    offsetY: 0,
    //mirrors the background and it's gradient
    mirror: false
};

//same like the chenter but for the left side of the screen
const leftImage = {
    fileNameAndExt: "ssa.webp", //LEFT background
    fallbackColor: "deeppink",
    offsetX: 50,
    offsetY: 0,
    mirror: true
};

//same like the chenter but for the left side of the screen
const rightImage = {
    fileNameAndExt: "arlecchino.webp", //RIGHT background
    fallbackColor: "deeppink",
    offsetX: 50,
    offsetY: 0,
    mirror: false
};

//////////////////////////////////////////////////////////////////////////////////////////



//This is the above-mentioned gradient overlay for the images on each sides 

//RIGHT FILTER

const ROpFilter = {
    opacity: 35, //Set opacity to the RIGHT background
    gradient: "linear-gradient(90deg, hsla(254, 68%, 9%, 1) 0%, hsla(253, 77%, 58%, 1) 61%, hsla(320, 77%, 55%, 1) 87%, hsla(316, 41%, 93%, 1) 100%)" //To mirror the gradient place a "-" befor the "deg"
};

//LEFT FILTER

const LOpFilter = {
    opacity: 35, //Set opacity to the LEFT background
    gradient: "linear-gradient(90deg, hsla(189, 100%, 50%, 1) 0%, hsla(185, 77%, 59%, 1) 19%, hsla(133, 68%, 75%, 1) 91%)" //To mirror the gradient place a "-" befor the "deg"
};

//CENTER/MIDDLE FILTER

const MOpFilter = {
    opacity: 80, //Set opacity to the MIDDLE background
    gradient: "linear-gradient(0deg, hsla(213, 77%, 14%, 1) 9%, hsla(202, 35%, 66%, 1) 79%, hsla(202, 44%, 85%, 1) 98%)" //To mirror the gradient place a "-" befor the "deg"
};

//////////////////////////////////////////////////////////////////////////////////////////



//LIST OF BUTTONS

//read README.md if you cant figure out how to add new buttons
const buttons = [{
    //the text in the button there are some special like twitter they will add an icon of the app
    btnText: "Twitter",
    //link to go if you click
    btnLink: "https://twitter.com/martindabuilder",
    //button color it can be gradient too
    btnColor: "#1da1f2",
    //if you set color to gradiet select a fallback color cus text cant be gradient or it can be for 2.99$ a mounth
    btnFallbackColor: "#1da1f2",
    animation: "animate__fadeIn"
}, {
    btnText: "Instagram",
    btnLink: "https://www.instagram.com/martindabuilder",
    btnColor: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    btnFallbackColor: "#f50401",
    animation: "animate__fadeIn"
}, {
    btnText: "Pixiv",
    btnLink: "https://www.pixiv.net/en/users/69814881",
    btnColor: "#0077c7",
    btnFallbackColor: "#0077c7",
    animation: "animate__fadeIn"
}, {
    btnText: "Ko-Fi",
    btnLink: "https://ko-fi.com/martinthebuilder80998#paypalModal",
    btnColor: "#ff5e5b",
    btnFallbackColor: "#ff5e5b",
    animation: "animate__fadeIn"
}, {
    btnText: "Artstation",
    btnLink: "https://www.artstation.com/martinthebuilder",
    btnColor: "#14aff0",
    btnFallbackColor: "#14aff0",
    animation: "animate__fadeIn"
}];
