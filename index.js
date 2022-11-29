const users = [
    [[100,120],[11,14]],
    [[13,11],[10,11]],
    [[10,10],[11,11]],
]
const finish = [20,20]
const meetTime = new Date();
meetTime.setHours(13)
meetTime.setMinutes(0);
meetTime.setSeconds(0)
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

function getTimeToLeave(time,meetTime){
    let newDate = new Date(meetTime.getTime() - time * 6000)
    return newDate
}

function timeUser(){
    users.forEach((user) =>{
        let distance = getDistanceUserFinish(user);
        let time = getTime(distance)
        let departTime = getTimeToLeave(time,meetTime)
        console.log("User " + (users.indexOf(user) + 1) + " doit partir à " + departTime)
    })
}

timeUser()



