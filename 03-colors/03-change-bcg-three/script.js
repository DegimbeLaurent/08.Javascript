
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    document.getElementById("run").addEventListener("click", function() {
        document.body.style.background= get_random_color();
    });

    function get_random_color(){
        var color = "";
        for(var i = 0; i < 3; i++) {
            var sub = Math.floor(Math.random() * 256).toString(16);
            color += (sub.length == 1 ? "0" + sub : sub);
        }
        return "#" + color;
    }

})();
