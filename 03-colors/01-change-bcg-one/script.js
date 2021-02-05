
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    document.getElementById("red").addEventListener("click", function() {
        document.body.style.background= "red";
    });

    document.getElementById("yellow").addEventListener("click", function() {
        document.body.style.background= "yellow"
    });

    document.getElementById("blue").addEventListener("click", function() {
        document.body.style.background= "blue";
    });

    document.getElementById("green").addEventListener("click", function() {
        document.body.style.background= "green";
    });
})();
