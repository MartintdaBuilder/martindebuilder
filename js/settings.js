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
    fileNameAndExt: "guuji_of_the_grand_narukami_shrine.webp", //LEFT background
    fallbackColor: "deeppink",
    offsetX: 50,
    offsetY: 0,
    mirror: false
};

//same like the chenter but for the left side of the screen
const rightImage = {
    fileNameAndExt: "black_bird_manipulation.webp", //RIGHT background
    fallbackColor: "deeppink",
    offsetX: 10,
    offsetY: 0,
    mirror: true
};

//////////////////////////////////////////////////////////////////////////////////////////



//This is the above-mentioned gradient overlay for the images on each sides 

//RIGHT FILTER

const ROpFilter = {
    opacity: 80, //Set opacity to the RIGHT background
    gradient: "linear-gradient(-90deg, hsla(147, 94%, 80%, 1) 0%, hsla(349, 77%, 47%, 1) 100%)" //To mirror the gradient place a "-" befor the "deg"
};

//LEFT FILTER

const LOpFilter = {
    opacity: 80, //Set opacity to the LEFT background
    gradient: "linear-gradient(-90deg, hsla(147, 94%, 80%, 1) 0%, hsla(349, 77%, 47%, 1) 100%)" //To mirror the gradient place a "-" befor the "deg"
};

//CENTER/MIDDLE FILTER

const MOpFilter = {
    opacity: 80, //Set opacity to the MIDDLE background
    gradient: "linear-gradient(-90deg, hsla(0, 0%, 98%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)" //To mirror the gradient place a "-" befor the "deg"
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
    //color of the text
    btnTextColor: "#ffffff",
    animation: "animate__bounceInLeft"
}, {
    btnText: "Instagram",
    btnLink: "https://www.instagram.com/martindabuilder",
    btnColor: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    btnTextColor: "#ffffff",
    animation: "animate__bounceInRight"
}, {
    btnText: "Pixiv",
    btnLink: "https://www.pixiv.net/en/users/69814881",
    btnColor: "#0077c7",
    btnTextColor: "#ffffff",
    animation: "animate__bounceInLeft"
}, {
    btnText: "Ko-Fi",
    btnLink: "https://ko-fi.com/martinthebuilder80998#paypalModal",
    btnColor: "#ff5e5b",
    btnTextColor: "#ffffff",
    animation: "animate__bounceInRight"
}, {
    btnText: "Artstation",
    btnLink: "https://www.artstation.com/martinthebuilder",
    btnColor: "#14aff0",
    btnTextColor: "#ffffff",
    animation: "animate__bounceInLeft"
}];
