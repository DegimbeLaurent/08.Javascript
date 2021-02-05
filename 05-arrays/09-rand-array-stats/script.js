// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    
    document.getElementById("run").addEventListener("click", ()=>{
        let tab = [];
        let tem = 0;

        for (let index = 0; index < 10; index++) {

            tab.push(Math.floor(Math.random()* 100));
            document.getElementById('n-'+(index+1)).innerHTML = tab[index];

        }

        tab.forEach(element => {
            tem += element;
        }); 

        document.getElementById("min").innerHTML =  Math.min.apply(null, tab);
        document.getElementById("max").innerHTML =  Math.max.apply(null, tab);
        document.getElementById("sum").innerHTML = tem;
        document.getElementById("average").innerHTML =  tem/(tab.length)
    })
})();




