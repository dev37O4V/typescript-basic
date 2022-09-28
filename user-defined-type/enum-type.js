// numaric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 5] = "readData";
    RequestType[RequestType["saveData"] = 6] = "saveData";
    RequestType[RequestType["deleteData"] = 7] = "deleteData";
})(RequestType || (RequestType = {}));
//console.log(RequestType);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
//console.log(RequestType2.readData);
// heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "READ_DATA";
    RequestType3["deleteData"] = "DELETE_DATA";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
