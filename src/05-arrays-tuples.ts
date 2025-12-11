// const fruits:string[] = ["apple", "banana"];
// const age:number[] = [12,22,40]
// age.unshift(33)

// console.log(age)

//type inference

// const fruit = ["apple", "banana"]
// const number = [34,54]
// fruit.push("mango")
// number.push(12)

// const myArr: (string | number)[]  = [12,43,"aj"]
// myArr.push("bj")
// console.log(myArr)

interface Person {
    firstName: string,
    lastName: string,
    age?:number
}

const myArr2:Person[] = [{firstName:"Ajharul", lastName:"islam", age:22}]
myArr2.push({firstName:"kamrul", lastName:"hasan"})

console.log(myArr2)
console.log(myArr2.length)

// tuples
//array with fixed size and types

type myCustomTuplesType = [string,string,number]
const muCustomTuples: myCustomTuplesType= ["ajharul","islam", 22]
console.log(muCustomTuples)
