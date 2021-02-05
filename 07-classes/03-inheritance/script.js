// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        name; 
        static greeting;

        constructor(name) {
            this.name = name;
        }
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {

        static greeting = "salut";

        constructor(name) {
            super(name);
        }
    }

    class Dog extends Animal {

        static greeting = "hello";

        constructor(name) {
            super(name);
        }
    }
    
    document.getElementById("run").addEventListener("click", ()=>{

        let firstcat = new Cat("Poupouce");
        let test = new Dog("test");

        console.log(firstcat.sayHello());
        console.log(test.sayHello());

    }) 

})();