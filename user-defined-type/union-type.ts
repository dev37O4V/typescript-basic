let myId : string | number;
myId = 120;
myId = '120';

function displayMyInfo(myInfo: number | string){
    console.log(myInfo);
}
displayMyInfo(4)