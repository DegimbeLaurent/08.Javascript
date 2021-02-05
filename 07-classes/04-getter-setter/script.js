// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here

    class Person{
        lasteName;
        #firstName;

        constructor(l,f){
            this.lasteName = l;
            this.#firstName = f;
        }

        get name(){
            return console.log(this.lasteName + " f sdgrdwxtj" + this.#firstName);
        }

        set name(n){
            n = n.split(" ");
            this.lasteName = n[0];
            this.#firstName = n[1];
        }

    }

    document.getElementById("run").addEventListener("click", () => {

        let toto = new Person("toto","tutu");
        console.log(toto.lasteName)
        console.log(toto.firstName)
        toto.name;

    })
})();
