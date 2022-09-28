// numaric enum

enum RequestType{
    readData=5,
    saveData,
    deleteData
}
//console.log(RequestType);

// string enum

enum RequestType2{
    readData= 'READ_DATA',
    deleteData= 'DELETE_DATA',
}

//console.log(RequestType2.readData);


// heterogenous enum
enum RequestType3{
    readData= 'READ_DATA',
    deleteData= 'DELETE_DATA',
    id=101
}

console.log(RequestType3);
