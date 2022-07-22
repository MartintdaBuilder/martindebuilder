function setupSettings() {
    document.getElementById("title").textContent = title;
    document.getElementById("title").style.color = titleColor;

    let centerCard = document.getElementById("card").style;
    let leftSide = document.getElementById("leftSpace").style;
    let rightSide = document.getElementById("rightSpace").style;

    let RFilter = document.getElementById("rightFilter").style;
    let LFilter = document.getElementById("leftFilter").style;
    let MFilter = document.getElementById("centerFilter").style;

    setOpacityToFilter(RFilter, ROpFilter);
    setOpacityToFilter(LFilter, LOpFilter);
    setOpacityToFilter(MFilter, MOpFilter);

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
    obj.style.backgroundImage = "-moz-" + bg;
    obj.style.backgroundImage = "-webkit-" + bg;
    obj.style.backgroundImage = "-ms-" + bg;
    obj.style.backgroundImage = "-o-" + bg;
}

function setSideBackground(obj, dataObj) {
    obj.backgroundColor = dataObj.fallbackColor;
    obj.backgroundImage = "url('res/" + dataObj.fileNameAndExt + "')";
    obj.backgroundPositionX = dataObj.offsetX + "%";
    obj.backgroundPositionY = dataObj.offsetY + "%";
    obj.transform = "scaleX(" + -1 * ((dataObj.mirror * 2) - 1) + ")";
}

function setOpacityToFilter(obj, dataObj) {
    obj.opacity = dataObj.opacity + "%";

    obj.backgroundImage = dataObj.gradient;
    obj.backgroundImage = "-moz-" + dataObj.gradient;
    obj.backgroundImage = "-webkit-" + dataObj.gradient;
    obj.backgroundImage = "-ms-" + dataObj.gradient;
    obj.backgroundImage = "-o-" + dataObj.gradient;
}

setupSettings();
getAdditionalButtons();
console.log();