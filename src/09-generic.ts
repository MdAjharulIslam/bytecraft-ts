// Generics

// function indetity(data:any){
//     return data;
// }

// const val = indetity("hello world");
// console.log(val.toLowerCase());


//identity function with generics


// function identity<CustomType>(data:CustomType){
//     return data;
// }

// const val = identity<string>("hello world")
// val.toLowerCase();

// const val2 = identity<number>(12)


//Generix with constent type

// function indetityWithContraints<T extends string| number>(data:T) :T{
//     return data;
// }

// const val = indetityWithContraints<string>("ajharul")
// const val2 = indetityWithContraints<number>(12);

// console.log(val)
// console.log(val2);


// generices with arrays

// function getFirstElements<T>(arr:T[]):T{
//     return arr[0]
// }

// console.log(getFirstElements<string>(["abcd","efgh"]))
// console.log(getFirstElements<number>([12,14]))


// generices with pair

function pair<T,U>(key:T, val:U):[T,U]{
    return [key,val]
}

console.log(pair("ajh","harul"))