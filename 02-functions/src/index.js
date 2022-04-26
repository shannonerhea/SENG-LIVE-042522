//Review 
//1. Create a constant variable called bookstore with the value 'Easley\'s Technical Books'
//2. Crate a variable that can be reassigned called open with the value false
const bookstore = 'Easley\'s Technical Books'
let open = false

let book1 = "You don\t know js, yet:Get Started by Kyle Simpson"
let b1Price = 10

let book2 = "Eloquent JavaScript, 3rd Edition by Marijn Haverbeke"
let b2Price = 15

let book3 = "Javascript: The Definitive Guide by David Flanagan"
let b3Price = 40

let book4 = "Cracking the Coding Interview by Gayle Laakmann McDowell"
let b4Price = 45

let total = 0




const toggleStoreOpen = () => {
    
    open = !true
    if(open === true){
        console.log(`Welcome to ${bookstore}!`)
    } else {
        console.log('sorry we are close')
    }
}
toggleStoreOpen()

// const printBook = function(book){
//     console.log(book)
// return book
// }

const printBook = book => console.log(book)
// printBook(book1)
// printBook(book2)
// printBook(book4)

const printPromo = (book, promo) => {
    return `${book} is ${promo} off`
}

//const book = 'rose is cute the book'

console.log(printPromo(book1, '%50'))
// Our book store will have sales 
// I want to add our book price with it's discount 


const promoTotal = (book, bookPrice, discount) => {
    //debugger
    let total = discount(bookPrice)
    return `${book} : ${total}`
}

const halfOff = (price) => {
    //debugger
    return `${price/2} - %50`
} 

console.log(promoTotal(book1, b1Price, halfOff))

const changeBook = (book, cb) => {
    //debugger
    console.log(cb(book))
}

// changeBook(book1, (bookParm) => {
//     //debugger
//     return bookParm.toUpperCase()
// })

const makeSmall = (smolBook) => {
    debugger
     return smolBook.toLowerCase()
}

//changeBook(book2, makeSmall)

// changeBook(book2, 'rose')

const doMath = (num, mathFoo) => {
    return mathFoo(num)
}

const addNum = (num) => num+num

const byThree = (num) => num*3

console.log(doMath(5, addNum))

// const doMath = (5, addNum) => {
//     return addNum(5)
// }
//console.log(doMath(3, byThree))
// const doMath = (10, byThree) => {
//     return byThree(10)
// }
// console.log(doMath(10, byThree))
// console.log(doMath(100, byThree))
// console.log(doMath(50, byThree))

// function sayHi(){
//     return 'hi'
// }
const sayHi = () =>  {
    debugger
    return 'hello world'
}
sayHi()

