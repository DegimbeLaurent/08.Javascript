
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation =>{
        switch(operation){
            case "addition":
                alert(new Number(document.getElementById("op-one").value)+new Number(document.getElementById("op-two").value));
            break;
            case "substraction":
                alert(new Number(document.getElementById("op-one").value)-new Number(document.getElementById("op-two").value));
            break;
            case "multiplication":
                alert(new Number(document.getElementById("op-one").value)*new Number(document.getElementById("op-two").value));
            break;
            case "division":
                alert(new Number(document.getElementById("op-one").value)/new Number(document.getElementById("op-two").value));
            break;
        }   
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
