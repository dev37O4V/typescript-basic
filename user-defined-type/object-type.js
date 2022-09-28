var myObject;
myObject = { myName: 'ullash', myId: 220 };
var myArrayOfObject;
myArrayOfObject = [];
myArrayOfObject.push(myObject, myObject);
//console.log(myArrayOfObject);
for (var key in myArrayOfObject) {
    console.log(myArrayOfObject[key]['myName']);
}
