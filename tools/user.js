import passworldHash from './passworldHash.js';

class User{

    #name;
    #lastName;
    #year;
    #password;

    constructor(){
        this.#name = prompt("your name");
        this.#lastName = prompt("your lastname");
        this.#year = prompt("your year");
        this.#password =  passworldHash.generate(prompt("your password"));
    }
    
    constructor(n,l,y,p){
        this.#name = n;
        this.#lastName = l;
        this.#year = y;
        this.#password =  passworldHash.generate(p);
    }

    get name(){
        return this.#name;
    }
    
    get lastName(){
        return this.#lastName;
    }

    get year(){
        return this.#year;
    }

    get passwordValide(pass){
        if(this.#password == passworldHash.generate(pass)){
            return true 
        }else{
            return false;
        }  
    }

    set name(n){
        this.#name = n ;
    }
    
    set lastName(l){
        this.#lastName = l;
    }

    set year(y){
        this.#year = y;
    }

    set passwordValide(pass,newpass){
        if(this.#password == passworldHash.generate(pass)){
            this.#password = passworldHash.generate(newpass); 
        }else{
            alert("passworld invalide");
        }  
    }

}

console.log(new User());