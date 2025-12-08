// const fruits:string[] = ["apple", "banana"];
// const age:number[] = [12,22,40]
// age.unshift(33)

// console.log(age)

//type inference

const fruit = ["apple", "banana"]
const number = [34,54]
fruit.push("mango")
number.push(12)

const myArr: (string | number)[]  = [12,43,"aj"]
myArr.push("bj")
console.log(myArr)