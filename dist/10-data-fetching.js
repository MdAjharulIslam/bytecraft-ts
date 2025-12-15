var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dataFetch(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(url);
        if (!res.ok) {
            throw Error("Internal server error");
        }
        const data = yield res.json();
        return data;
    });
}
const url = "https://jsonplaceholder.typicode.com/todos/1";
dataFetch(url).
    then(data => {
    const title = data.map(todo => todo.title);
    console.log(title);
});
const url2 = "https://jsonplaceholder.typicode.com/posts";
dataFetch(url2).
    then(data => {
    const body = data.map(post => post.body);
    console.log(body);
});
export {};
