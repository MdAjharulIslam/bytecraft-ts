const user = {
    id: 1,
    name: "Ajharul",
    userName: "islam",
    email: "a@gmail.com"
};
for (let key in user) {
    console.log(`${key} : ${user[key]}`);
}
const user2 = {
    id: 1,
    name: "Ajharul",
    userName: "islam",
    email: "a@gmail.com",
};
for (let key in user) {
    console.log(`${key} : ${user2[key]}`);
}
export {};
