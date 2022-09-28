abstract class User{
    // properties , constructor, method
    
        //properties
        userName: string;
        age: number;
    
        //constructor
        constructor(x: string, y: number){
            this.userName=x;
            this.age=y;
        }
    
        //method
        abstract display(): void;
}

class Student extends User{
    studentId: number;

    constructor(x: string, y: number, z: number){
        super(x, y)
        this.studentId =z
    }
    display(): void{
        console.log(`Student name is ${this.userName}. And age is ${this.age} years old. And last not lest student id is ${this.studentId}`);
  }

}

let student1 = new Student('imran Mahmud Ulalsh', 23, 20202);
student1.display()