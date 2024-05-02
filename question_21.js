// Sheikh Jibran Ahmed
//object is a collection of variables & method(function)
let books = {
    name: "Chemistry",
    auther: "prof. Wasi Askari",
    isBookOfScience: true,
    publishedNo: "F" + 4431019,
    bookTitlePage() {
        //use lexical for refrence of an object
        return `\n
        Name : ${this.name}
        Auther : ${this.auther}
        Published No : ${this.publishedNo}`;
    },
};
//get and print the value of object
console.log(books.bookTitlePage());
export {};
