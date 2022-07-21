function setupSettings() {
    document.getElementById("title").textContent = title;
    document.getElementById("title").style.color = titleColor;

    let centerCard = document.getElementById("card").style;
    let leftSide = document.getElementById("leftSpace").style;
    let rightSide = document.getElementById("rightSpace").style;

    setSideBackground(centerCard, cardImage);
    setSideBackground(leftSide, leftImage);
    setSideBackground(rightSide, rightImage);
}

function getAdditionalButtons() {
    let buttonList = document.getElementById("down");
    buttons.forEach(button => {
        let linkToAdd = document.createElement("a");
        let buttonToAdd = document.createElement("button");

        linkToAdd.href = button.btnLink;
        linkToAdd.draggable = false;
        linkToAdd.target = "_blank";
        linkToAdd.classList.add("link-none", "w-75", "my-3");

        buttonToAdd.type = "button";
        buttonToAdd.classList.add("btn", "rounded-pill", "py-3", "w-100");
        buttonToAdd.textContent = button.btnText;

        setBackground(buttonToAdd, button.btnColor);

        buttonToAdd.style.color = button.btnTextColor;

        buttonList.appendChild(linkToAdd);
        buttonList.lastChild.appendChild(buttonToAdd);
    });
}

function setBackground(obj, bg) {
    obj.style.background = bg;
    obj.style.background = "-moz-" + bg;
    obj.style.background = "-webkit-" + bg;
    obj.style.background = "-moz-" + bg;
}

function setSideBackground(obj, dataObj) {
    obj.backgroundColor = dataObj.fallbackColor;
    obj.backgroundImage = "url('res/" + dataObj.fileNameAndExt + "')";
    obj.backgroundPositionX = dataObj.offsetX + "%";
    obj.backgroundPositionY = dataObj.offsetY + "%";
    obj.transform = "scaleX(" + -1 * ((dataObj.mirror * 2) - 1) + ")";
}

setupSettings();
getAdditionalButtons();
console.log();