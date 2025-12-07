function add(a, b) {
    return a + b;
}
const add2 = function (a, b) {
    return a * b;
};
const add3 = (a, b) => {
    return a + b;
};
function greet(name) {
    console.log(` Hello ${name}`);
}
console.log("add : ", add(2, 5));
console.log("multiplication : ", add2(2, 6));
console.log("add3 : ", add3(3, 5));
greet("ajharul");
function combine(a, b) {
    return a + b;
}
console.log(combine(3, 6));
export {};
