class User{
// properties , method, constructor

    //properties
    userName: string;
    age: number;

    //constructor
    constructor(x: string, y: number){
        this.userName=x;
        this.age=y;
    }

    //method
    display(): void{
        console.log(`User name is ${this.userName}. And age is ${this.age} years old.`);
    }
}

// class Object

let user1 = new User('Imran ',12);
let user2 = new User(' Mahmud',12);
let user3 = new User(' Ullash',12);
user1.display()
user2.display()
user3.display()