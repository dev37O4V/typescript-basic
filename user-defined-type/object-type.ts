let myObject: {myName: string, myId: number};
myObject= {myName: 'ullash', myId:220};

let myArrayOfObject : object[];
myArrayOfObject=[];
myArrayOfObject.push(myObject, myObject)
//console.log(myArrayOfObject);

for (const key in myArrayOfObject) {
    console.log(myArrayOfObject[key]['myName']);
}