//07-classes/02-methods/script.js - 7.2: methods


(() => {

    class Person{
        #firstname;
        #lastname;

        constructor(n,l){
            this.#firstname = n;
            this.#lastname = l;
        }

        sayHello(){
            return "Hello my name is "+this.#firstname+ " "+this.#lastname;
        }

    }

    // your code here

    document.getElementById("run").addEventListener("click", ()=>{
        let p1 = new Person("laurent","degimbe");
        console.log(p1.sayHello());
    })
})();
