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
    if(pfpAnimation != null) pfp.parentElement.classList.add(pfpAnimation);

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
        buttonToAdd.classList.add("btn", "rounded-pill", "py-2", "w-100", 'animate__animated');
        buttonToAdd.textContent = button.btnText;

        if(button.animation != null) buttonToAdd.classList.add(button.animation);

        setDefaultBackground(buttonToAdd, button);
        buttonToAdd.addEventListener('mouseover', function( event ) {
            setBackground(event.target, button);
        }, false);
        buttonToAdd.addEventListener('mouseout', function( event ) {
            setDefaultBackground(event.target, button);
        }, false);
       
        addIconsToButtons(buttonToAdd, icon);

        buttonList.appendChild(linkToAdd);
        buttonList.lastChild.appendChild(buttonToAdd);
    });
}

function addIconsToButtons(obj, icon) {
    let text = obj.textContent.toLowerCase();
    // '<span class="iconify" data-icon="ant-design:twitter-circle-filled" data-width="25" data-height="25"></span>';
    if (text.includes("twitter")) {
        icon.setAttribute("data-icon", "ant-design:twitter-circle-filled");
        obj.appendChild(icon);
    }
    else if (text.includes("instagram")) {
        icon.setAttribute("data-icon", "ant-design:instagram");
        obj.appendChild(icon);
    }
    else if (text.includes("pixiv")) {
        icon.setAttribute("data-icon", "arcticons:pixiv");
        obj.appendChild(icon);
    }
    else if (text.includes("artstation")) {
        icon.setAttribute("data-icon", "cib:artstation");
        obj.appendChild(icon);
    }
    else if (text.includes("ko-fi")) {
        icon.setAttribute("data-icon", "cib:ko-fi");
        obj.appendChild(icon);
    }
    else if (text.includes("discord")) {
        icon.setAttribute("data-icon", "simple-icons:discord");
        obj.appendChild(icon);
    }
}

function setDefaultBackground(obj, btninfo)
{
    obj.setAttribute('style', `background: white; background-image: white; color: ${btninfo.btnFallbackColor}; color: ${btninfo.btnColor};`);
}

function setBackground(obj, btninfo) {
    obj.setAttribute('style', `
    background: ${btninfo.btnColor};
    background-image: -moz-${btninfo.btnColor};
    background-image: -webkit-${btninfo.btnColor};
    background-image: -ms-${btninfo.btnColor};
    background-image: -o-${btninfo.btnColor};
    color:white;
    `);
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