import Book from "./Book.js"

const book1 = new Book(

    "El secreto",
    "BobRoss",
    "December 10, 2019",
    "Norma",
    "400 paginas"
)

console.log("Este es el primer libro",book1);
console.log("Este libro es",book1.bookAge(),"dias viejo");