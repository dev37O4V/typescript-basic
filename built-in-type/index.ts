// built in type: number, string, number, boolean, void, undefined, null

const userId:number = 12;;
const userName:string='Imran';
const isActivated:boolean = true;

const fullName:string = userName.concat(' Mahmud Ullash')

console.log(fullName.split(" "));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

function display():void{
    console.log('hi this is display');
}
display()

console.log(`Name of student is ${fullName}.and his user id is ${userId}. Your account activated ${isActivated}`);
