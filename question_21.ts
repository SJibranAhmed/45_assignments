// Sheikh Jibran Ahmed

/*Question: 21 :They think of something you could store in a TypeScript Object. Write a program that
 creates Objects containing these items. */

//this is called interface of an object
//it's represent how object look like
interface bookValues {
  name: string;
  auther: string;
  isBookOfScience: boolean;
  publishedNo: number | string;
  bookTitlePage: () => string;
}

//object is a collection of variables & method(function)
let books: bookValues = {
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
