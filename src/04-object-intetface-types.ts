//we should use interface for object and type for others like array,...
//we cannot reopen type but we can reopen interface


//type

// type Person = {
//     firstName:string,
//     lastName:string,
//     age?:number  //?means optional
// };

// const person:Person = {
//     firstName:"ajharul",
//     lastName:"islam",
    
// }
// console.log(person)

// interface
interface Person  {
    firstName:string,
    lastName:string,
    age?:number
};
interface Person {
    address:string
}

const person:Person = {
    firstName:"ajharul",
    lastName:"islam",
    age:22,
    address:"dhaka"
    
}
console.log(person)