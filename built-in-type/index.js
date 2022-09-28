// built in type: number, string, number, boolean, void, undefined, null
var userId = 12;
;
var userName = 'Imran';
var isActivated = true;
var fullName = userName.concat(' Mahmud Ullash');
console.log(fullName.split(" "));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
function display() {
    console.log('hi this is display');
}
display();
console.log("Name of student is ".concat(fullName, ".and his user id is ").concat(userId, ". Your account activated ").concat(isActivated));
