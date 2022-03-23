function getEle(id) {
    return document.getElementById(id);
}

function changeInnerHTML(id, text) {
    var numvr= 23;
    var theP = getEle(id);
    console.log(theP);
    theP.innerHTML = text;
}

function anThe(id) {
    var the = getEle(id);
    the.style.display = "none";
}
function thayDoiStyle(id) {
    var the = getEle(id);
    the.style.fontSize = "30px"
    the.style.color = "red"
}

