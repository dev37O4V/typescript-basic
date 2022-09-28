var User = /** @class */ (function () {
    //constructor
    function User(x, y) {
        this.userName = x;
        this.age = y;
    }
    //method
    User.prototype.display = function () {
        console.log("User name is ".concat(this.userName, ". And age is ").concat(this.age, " years old."));
    };
    return User;
}());
// class Object
var user1 = new User('Imran ', 12);
var user2 = new User(' Mahmud', 12);
var user3 = new User(' Ullash', 12);
user1.display();
user2.display();
user3.display();
