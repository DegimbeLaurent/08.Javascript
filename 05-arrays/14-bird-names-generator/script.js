// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let bird = birds[Math.floor(Math.random()* (birds.length-1))];
        let test = adjectives.values();
        let adje;
        for (let index = 0; index < Math.floor(Math.random()* (adjectives.size)); index++) {
            adje = test.next().value;
        }
        
        if(bird.fem){
            document.getElementById("target").innerHTML = "la "+ bird.name + " "  + adje+ "e";
        }else{
            document.getElementById("target").innerHTML = "le "+ bird.name + " "+adje ;
        }
    })
})();
