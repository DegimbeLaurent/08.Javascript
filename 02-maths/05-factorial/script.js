
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        
        let number = new Number(document.getElementById("number").value)
        let total = number;
        for (number; number > 1; number--) {
            total = total * (number-1); 
        }
        alert(total);
    });

})();
