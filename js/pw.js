function isValid(){
    var password = document.getElementById('password').value;
    console.log("nope");
    if (password == "123") {
        top.location.href="./page.html";
        console.log("Hello world!");
    } else {
        window.location.reload();
        console.log("Unlucky");
    }
}
