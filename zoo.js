



// function eat(name,food){
//     console.log(name+ " eats " + food);
//     if(favoriteFood==(name,food)){
//         console.log("YUM!!! " + name + " wants more " + food);
//     }else{
//         sleep(name);
//     }
// }
/*

function sleep(name){
    console.log(name+" sleeps for 8 hours ");
}*/




// class Tiger{
//     constructor(name){
//         this.name=name;
//         this.favoriteFood= "meat";
//
//     }
//     sleep(){
//         console.log(this.name + " sleeps for 8 hours");
//     }
//     eat(food){
//         console.log(this.name+ " eats " + food);
//         if(this.favoriteFood===food){
//             console.log("YUM!!! " + this.name + " wants more " + food);
//         }else{
//             this.sleep(this.name);
//         }
//     }
// }
//
// class Bear{
//     constructor(name){
//         this.name=name;
//         this.favoriteFood= "fish";
//
//     }
//     eat(food){
//         console.log(this.name+ " eats " + food);
//         if(this.favoriteFood===food){
//             console.log("YUM!!! " + this.name + " wants more " + food);
//         }else{
//             this.sleep(this.name);
//         }
//     }
//     sleep(){
//         console.log(this.name + " hibernates for 4 months");
//     }
//
// }

animalPopulation=0;
function run(){
    var tigger= new Tiger("Tigger");

    // tigger.eat("meat");


    var pooh = new Bear("Pooh");
    //
    // pooh.eat("fish");
    // pooh.eat("meat");

    var rarity = new Unicorn("Rarity");

    // rarity.eat("marshmallows");
    // rarity.sleep();

    var gemma = new Giraffe("Gemma");

    // gemma.eat("meat");
    // gemma.eat("leaves");
    // gemma.sleep();

    var stinger = new Bee("Stinger");

    // stinger.eat("ice cream");
    // stinger.eat("pollen");
    // stinger.sleep();

    var animals = [tigger, pooh, rarity, gemma, stinger ];

    var zoebot= new Zookeeper("Zoebot");

    zoebot.feedAnimals(animals, "avocados");

    Animal.getPopulation();


}

class Animal{
    constructor(name,favoriteFood){
        this.name=name;
        this.favoriteFood=favoriteFood;
        animalPopulation++;
    }
    sleep(){
        console.log(this.name + " sleeps for 8 hours");
    }
    eat(food){
        console.log(this.name+ " eats " + food);
        if(this.favoriteFood===food){
            console.log("YUM!!! " + this.name + " wants more " + food);
        }else{
            this.sleep(this.name);
        }
    }
    static getPopulation(){
        console.log(animalPopulation);
    }
}

class Tiger extends Animal {
    constructor(name,favoriteFood) {
        super("Tiger");
        this.name=name;
        this.favoriteFood="meat";
    }
}
class Bear extends Animal {
    constructor(name,favoriteFood) {
        super("Pooh");
        this.name=name;
        this.favoriteFood="fish";
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }
}
class Unicorn extends Animal {
    constructor(name,favoriteFood){
        super("Unicorn");
        this.name=name;
        this.favoriteFood="marshmallows"
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}
class Giraffe extends Animal {
    constructor(name,favoriteFood){
        super("Giraffe");
        this.name=name;
        this.favoriteFood="leaves"
    }
    eat(food){
        if(this.favoriteFood===food){
            console.log(this.name+ " eats " + food);

            console.log("YUM!!! " + this.name + " wants more " + food);

        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }



}
class Bee extends Animal {
        constructor(name) {
        super("Bee");
        this.name = name;
        this.favoriteFood = "pollen";
        }
        eat(food){

            if(this.favoriteFood===food){
                console.log(this.name+ " eats " + food);

                console.log("YUM!!! " + this.name + " wants more " + food);

            }else{

                console.log("YUCK!!! " + this.name + " will not eat " + food);
            }
        }
        sleep(){
            console.log(this.name + " never sleeps");
        }


}
class Zookeeper{
    constructor(name){
        this.name=name;
    }
    feedAnimals(animals,food){
        this.food=food;
        console.log(this.name + " is feeding " + this.food + " to " + animals.length + " animals out of  " + animalPopulation + " animals"  );
        for(var i=0; i<animals.length; i++){
            animals[i].eat(food);
        }
    }
}
