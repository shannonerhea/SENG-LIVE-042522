
const books = [
    'JavaScript: The Definitive Guide by David Flanagan', 
    'JavaScript: The Good Parts by Douglas Crockford',  
    'JavaScript & JQuery: Interactive Front-End Web Development by Jon Duckett', 
    'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke', 
    'Learn Enough JavaScript to Be Dangerous by Michael Hartl',
    'Cracking the Coding Interview by Gayle Laakmann McDowell' 
];
 
const customers =  ['Ceredic Boulderhill', 'Wandrille Farfoot', 'Godobald Goodwort', 'Wibert Bunce', 'Burchard Riverhopper', 'Thietmar Goodwort', 'Adalbert Sandyman','Thierry Oakbottom'];



  //books[3]
  //books[books.length-1]

//   books.push('JavaScript Cookbook by Shelly Powers')
//   books.unshift('You don\'t know js by Kyle Simpson')
//   books[books.length] = 'Going Responsive by Karen McGrane'

//   books.splice(3, 0, 'Software Development, Design and Coding Development by Raul-Gabriel Urma')

//   books.pop()
//   books.shift()

//   books2 = books.slice(2)

//  // copy
//   books1 = [...books, 'Going Responsive by Karen McGrane']


function loop(array){
    for(item of array){
        //debugger
        console.log(item)
    }
}
//loop(books)

//Higher Order Function 
// const print = (book) => {
//     debugger
//     console.log(book)
// }

//const forEachReturn = books.forEach((book) => console.log(book))

//Returns a new transformed array.
const makeUpperCase = (book) => book.toUpperCase()
const mapArray = books.map(makeUpperCase)
const mapArr2 = books.map(() => 'hi')
const mapArr3 = books.map((item) => {
    if(item.startsWith('J') || item.startsWith('j')){
        return 1
    } else {
        return item
    }
})

const filterCB = (book) =>{
    //debugger
 return book.startsWith('J')
}

const filterBooks = books.filter(filterCB)

const findBook = books.find((book, index, array) =>{
        //debugger
     return book.startsWith('E')
    })
                     // ['jbook1', 'jbook2', 'jbook3']   / ['JBOOK1', 'JBOOK12', 'JBOOK13'] / ['jbook1', 'jbook2', 'jbook3'] 
const startsWithJAndUpCase = books.filter(filterCB).map(makeUpperCase)
const rose = 'rose'.split('').filter((char) => char !== 'e').join('')





function loop2(array, foo){
    //debugger
    for(item of array){
        foo(item)
    }
}

const printItem = (item) => {
    debugger
    console.log(item)
}

//loop2(books, printItem)

let arr = [1,2,10, 15]
arr.reduce((prevSum, current) => {
    console.log(prevSum)
    console.log(current)
    console.log('---------')
    return prevSum * current
},100)