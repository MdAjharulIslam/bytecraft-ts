// type casting
function addOrConCat(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
}
console.log(addOrConCat(2, 2, 'add'));
console.log(addOrConCat(2, 2, "concat"));
const value1 = addOrConCat(2, 2, "concat");
const value2 = addOrConCat(2, 2, "add"); //this is type casting
console.log(value1);
console.log(value2);
//DOM
//select input field
const name = document.getElementById("name");
const age = document.getElementById("age");
const form = document.getElementById("user-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = name.value;
    const ageValue = age.value;
    console.log(nameValue, ageValue);
});
export {};
