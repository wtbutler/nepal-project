/* Set the width of the textbar to 250px and the left margin of the page content to 250px */
function openNav() {
    //document.getElementById("myTextbar").style.width = "250px";
    document.getElementById("myTextbar").style.right = "0px";
    console.log("Tried to open");
}

/* Set the width of the textbar to 0 and the left margin of the page content to 0 */
function closeNav() {
    //document.getElementById("myTextbar").style.width = "0";
    const element = document.querySelector(".textbar");
    const style = getComputedStyle(element)
    const width = style.width;
    document.getElementById("myTextbar").style.right = '-'+width;
    console.log("Tried to close");
} 

function changeText(filename) {
    console.log("Opening: " + filename + ".txt");
    var pathname = "https://wtbutler.github.io/tibet-project/info/"+filename+".html";
    fetch(pathname)
        .then(response => response.text())
        .then(text => document.getElementById("desc").innerHTML = text);
    openNav();
}
