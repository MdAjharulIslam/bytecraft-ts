function add(a :number, b:number) :number{
    return a+b;
}


const add2 = function(a:number, b:number):number{
    return a*b;
}

const add3 = (a:number, b:number) :number =>{
    return a+b;
}

function greet(name:string):void{
    console.log(` Hello ${name}`)
}
console.log("add : " ,add(2,5));
console.log("multiplication : " , add2(2,6))
console.log("add3 : " ,add3(3,5));
greet("ajharul")


function combine(a:number, b:number) :number;


function combine(a:number, b:number):number{
    return a+b;
}
console.log(combine(3,6));
