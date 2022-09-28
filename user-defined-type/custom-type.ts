

type objectType= {name: string, id: number};

let toObject: objectType[];
toObject=[];

let newObject:objectType;
newObject={name: 'ullasjh', id:12};

toObject.push(newObject)

let newObject2:objectType;
newObject2={name: 'dk', id:12};

toObject.push(newObject2)

let newObject3:objectType;
newObject3={name: 'pk', id:12};

toObject.push(newObject3)

// console.log(toObject);

type RequestType= "GET" | "POST";
let getRequest: RequestType;

getRequest = "GET";

function requestType(requType: RequestType){
    console.log(requType);
}
requestType("GET")

