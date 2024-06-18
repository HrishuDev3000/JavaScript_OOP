console.log("Hello World!\n==========\n");

// Exercise 1,2,3 Section
console.log("EXERCISE 1,2,3:\n==========\n");

class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info(){
      let info = [this.name, this.pets, this.residence, this.hobbies];
      return info;
    }

    soundOff(){
        console.log("My name is " + this.name + ", don't mess with me if you know whats good for you!")
    }
    addHobby(hobby) {
      this.hobbies.push(hobby);
    }

    removeHobby(startIn) {
        if(startIn > -1){
        this.hobbies.splice(startIn,1);
        }
      }

    greeting() {
        console.log("Whats good Homie!")
    }
}



class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);
        this.occupation = "Full Stack Web Developer";
    }

    greeting() {
        console.log("Greetings, my fellow Software engineers.")
    }

    soundOff(){
        console.log("My name is " + this.name + ", don't mess with me or i'll hack in your Fortnight account and steal your V-bucks !");
    }
}

let dude = new Person("Tyrone", 'pitbull', "Chicago", ["C++ ", "Java"] );
dude.addHobby("lifting weights");
console.log(dude);
dude.soundOff()

let nerd = new Coder("Demarcus", 'AI Chatbot', "Mom's Basement", ["League of Legends", "C++ ", "Java"] );
nerd.removeHobby(1);
console.log(nerd);
nerd.greeting();
nerd.soundOff();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{
    constructor(result = 0){
        this.result = result;

    }

    add(a,b){
        if(b == undefined || b == null){
            b = this.result;
        }
        if(a == undefined || a == null){
            a = this.result;
        }
        this.result = a + b
        return this.result;
    }

    minus(a,b){
        if(b == undefined || b == null){
            b = this.result;
        }
        if(a == undefined || a == null){
            a = this.result;
        }
        this.result = a - b
        return this.result;
    }


    multiply(a,b){
        if(b == undefined || b == null){
            b = this.result;
        }
        if(a == undefined || a == null){
            a = this.result;
        }
        this.result = a * b
        return this.result;
    }


    divide(a,b){
        if(b == undefined || b == null){
            b = this.result;
        }
        if(a == undefined || a == null){
            a = this.result;
        }
        this.result = a / b
        return this.result;
    }



}

let num = new Calculator();
console.log(num.add(4));

