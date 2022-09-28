var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //constructor
    function User(x, y) {
        this.userName = x;
        this.age = y;
    }
    //method
    User.prototype.display = function () {
        console.log("Student name is ".concat(this.userName, ". And age is ").concat(this.age, " years old. "));
    };
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.studentId = z;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Student name is ".concat(this.userName, ". And age is ").concat(this.age, " years old. And last not lest student id is ").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student('imran Mahmud Ulalsh', 23, 20202);
student1.display();
