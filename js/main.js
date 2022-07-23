function setupSettings() {
    document.querySelector("title").textContent = title;
    document.getElementById("title").textContent = title;
    document.getElementById("title").style.color = titleColor;

    let pfp = document.getElementById("pfp");
    let borderPfp = document.getElementById("pfp-border");

    let centerCard = document.getElementById("card").style;
    let leftSide = document.getElementById("leftSpace").style;
    let rightSide = document.getElementById("rightSpace").style;

    let RFilter = document.getElementById("rightFilter").style;
    let LFilter = document.getElementById("leftFilter").style;
    let MFilter = document.getElementById("centerFilter").style;

    setPfpAndBorder(pfp, borderPfp);

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
        let icon = document.createElement("span");

        icon.classList.add('iconify', 'mx-2');
        icon.setAttribute("data-width", 25);
        icon.setAttribute("data-height", 25);

        linkToAdd.href = button.btnLink;
        linkToAdd.draggable = false;
        linkToAdd.target = "_blank";
        linkToAdd.classList.add("link-none", "w-75", "my-3");

        buttonToAdd.type = "button";
        buttonToAdd.classList.add("btn", "rounded-pill", "py-3", "w-100");
        buttonToAdd.textContent = button.btnText;

        setBackground(buttonToAdd, button.btnColor);

        buttonToAdd.style.color = button.btnTextColor;

        addIconsToButtons(buttonToAdd, icon);

        buttonList.appendChild(linkToAdd);
        buttonList.lastChild.appendChild(buttonToAdd);
    });
}

function addIconsToButtons(button, icon) {
    let text = button.textContent.toLowerCase();
    // '<span class="iconify" data-icon="ant-design:twitter-circle-filled" data-width="25" data-height="25"></span>';
    if (text.includes("twitter")) {
        icon.setAttribute("data-icon", "ant-design:twitter-circle-filled");
        button.appendChild(icon);
    }
    else if (text.includes("instagram")) {
        icon.setAttribute("data-icon", "ant-design:instagram");
        button.appendChild(icon);
    }
    else if (text.includes("pixiv")) {
        icon.setAttribute("data-icon", "arcticons:pixiv");
        button.appendChild(icon);
    }
    else if (text.includes("artstation")) {
        icon.setAttribute("data-icon", "cib:artstation");
        button.appendChild(icon);
    }
    else if (text.includes("ko-fi")) {
        icon.setAttribute("data-icon", "cib:ko-fi");
        button.appendChild(icon);
    }
    else if (text.includes("discord")) {
        icon.setAttribute("data-icon", "simple-icons:discord");
        button.appendChild(icon);
    }
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

function setPfpAndBorder(pfp, border) {
    pfp.setAttribute("src", "res/" + profilePicture);

    if (pfpBorder.fileNameAndExt == "" || pfpBorder.fileNameAndExt == null || pfpBorder.fileNameAndExt == " ") {
        border.style.display = "none"
        return;
    }

    border.setAttribute("src", "res/" + pfpBorder.fileNameAndExt);
    border.style.width = pfpBorder.width + "vh";
    border.style.height = pfpBorder.height + "vh";
    border.style.transform = `Translate(${pfpBorder.offsetX}vh, ${pfpBorder.offsetY}vh)`;

}

setupSettings();
getAdditionalButtons();