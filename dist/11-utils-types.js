// interface User {
//   name: string;
//   age: number;
//   email: string;
// }
export {};
// // Normally  need all fields
// const user1: User = {
//   name: "Ajhar",
//   age: 18,
//   email: "ajhar@example.com"
// };
// // Using Partial
// const user2: Partial<User> = {
//   name: "Ajhar" // only one property is enough
// };
// interface User {
//   name?: string;
//   age?: number;
// }
// const user1: User = {}; // ✅ ok normally
// const user2: Required<User> = {}; // ❌ Error! All properties are now required
// //Required means optional and normal  all data need to add
// const user3: Required<User> = {
//   name: "Ajhar",
//   age: 18
// }; // ✅ now it works
