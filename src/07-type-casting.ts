// type casting

function addOrConCat(a:number,b:number, c:"add"|"concat"):number|string{
    if(c==="add"){
        return a+b;
    }else{
        return ""+a+b
    }
}

console.log(addOrConCat(2,2,'add'))
console.log(addOrConCat(2,2,"concat"))
const value1:string = addOrConCat(2,2,"concat") as string;
const value2:number = addOrConCat(2,2,"add") as number; //this is type casting
console.log(value1)
console.log(value2)

//DOM
//select input field
const name = document.getElementById("name") ! as HTMLInputElement
const age = document.getElementById("age")! as HTMLInputElement
const form = document.getElementById("user-form")! as HTMLFormElement

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nameValue = name.value;
    const ageValue = age.value;
    console.log(nameValue, ageValue)
})