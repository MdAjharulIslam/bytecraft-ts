type User = {
    id:number,
    name:string,
    userName: string,
    email:string
}


const user:User = {
    id:1,
    name:"Ajharul",
    userName:"islam",
    email:"a@gmail.com"
}

type UserKeys = keyof User;




for(let key in user){
    console.log(`${key} : ${user[key as UserKeys]}`);
}






const user2 = {
    id:1,
    name:"Ajharul",
    userName:"islam",
    email:"a@gmail.com",
}



type UserType = typeof user2


for(let key in user){
    console.log(`${key} : ${user2[key as keyof  UserType]}`);
}