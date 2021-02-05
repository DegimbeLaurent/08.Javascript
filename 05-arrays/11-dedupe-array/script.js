// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let unique = [];
        fruits.forEach( f => {
            if(unique.indexOf(f) === -1) unique.push(f);
        })
        unique.forEach(u => console.log(u));
    })

})();
