
//enms

enum Direction {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}
function getUserDirection(direction:Direction):void{
    if(direction==Direction.UP){
        console.log("user is going up")

    }else if(direction==Direction.DOWN){
        console.log("user is going down")
    }else if(direction==Direction.LEFT){
        console.log("user is going left")
    }
    else if(direction==Direction.RIGHT){
        console.log("user is going right")
    }
}
getUserDirection(Direction.RIGHT)

console.log(Direction.DOWN)
console.log(Direction.LEFT)
console.log(Direction.RIGHT)
console.log(Direction.UP)