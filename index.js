const users = [
    [[10,12],[11,14]],
    [[13,11],[10,11]],
    [[10,10],[11,11]],
]
const finish = [20,20]
const vitesse = 5;

function getDistance(x1, y1, x2, y2){
    let y = x2 - x1;
    let x = y2 - y1;

    return Math.sqrt(x * x + y * y);
}

function getDistanceUserFinish(user){
    let userPos = user[0];
    let restoPos = user[1];
    let userRestaurant = getDistance(userPos[0],userPos[1],restoPos[0],restoPos[1])
    let restoFinish = getDistance(restoPos[0],restoPos[1],finish[0],finish[1]);
    let totalD = userRestaurant + restoFinish;
    return totalD
}

function getTime(distance){
    let time = distance/vitesse
    return time
}

function timeUser(){
    users.forEach((user) =>{
        let distance = getDistanceUserFinish(user);
        let time = getTime(distance)
        console.log("User " + (users.indexOf(user) + 1) + " met " + time)
    })
}

timeUser()



