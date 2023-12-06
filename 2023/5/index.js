// Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

// . = Road
// S = Santa's Sled
// * = Open barrier
// | = Closed barrier
// Example of a road: S...|....|.....

// Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

// All barriers start closed, but after 5 units of time, they all open forever.

// Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:

// const road = 'S..|...|..'
// const time = 10 // units of time
// const result = cyberReindeer(road, time)

// /* -> result:
// [
//   'S..|...|..', // initial state
//   '.S.|...|..', // sled advances on the road
//   '..S|...|..', // sled advances on the road
//   '..S|...|..', // sled stops at the barrier
//   '..S|...|..', // sled stops at the barrier
//   '...S...*..', // barrier opens, sled advances
//   '...*S..*..', // sled advances on the road
//   '...*.S.*..', // sled advances on the road
//   '...*..S*..', // sled advances on the road
//   '...*...S..', // passes through the open barrier
// ]
// */
// The result is an array where each element shows the road at each unit of time.

// Take into account that if the sled is in the same position as a barrier, then it takes its place in the array.

// The elves were inspired by this Code Wars challenge.


function cyberReindeer(road, time) {
    let result = [road]
    let sledIndex = road.indexOf("S")
    let over = "."
    for (let i = 0; i <= time; i++){
        let updatedRoad = result[result.length-1]
        if (i == 5){
            updatedRoad = updatedRoad.replaceAll("|","*")
        }
        if (updatedRoad.charAt(sledIndex+1) !== "|"){
            updatedRoad = replaceAt(updatedRoad,sledIndex,over)
            over = updatedRoad.charAt(sledIndex+1)
            updatedRoad = replaceAt(updatedRoad,sledIndex+1,"S")
            sledIndex++
        }
        console.log(updatedRoad)
        result.push(updatedRoad)
    }
    return result
}

function replaceAt(str,index,char){
    if (index > str.length-1) return str
    const result = str.substring(0,index) + char + str.substring(index+1)
    return result
}

cyberReindeer("S..|...",10)

cyberReindeer("...S|...|.",10)