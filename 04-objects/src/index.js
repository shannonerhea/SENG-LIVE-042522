const bookStore = {
    location: "Seattle",
    address:'333 st ne Seattle wa 99999',
    number: 9999999999,
    name: 'Coding Books',
    hours: 'Monday - Friday 9am - 6pm',
    inventory: [
        {
            title: 'Eloquent JavaScript: A Modern Introduction to Programming',
            author: 'Marjin Haverbeke',
            price: 10.00,
            reviews: [],
            inventory: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45.75,
            reviews: [{userID: 15, content:'good way to learn JQuery'}],
            inventory: 2,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36.00,
            reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
            inventory: 8,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25.50,
            reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
            inventory: 0,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            price: 6.00,
            reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        }, 
        {
            title: 'Learn Enough JavaScript to Be Dangerous',
            author: 'Michael Hartl',
            price: 24.00,
            reviews: [{userID: 50, content:'pretty good'}],
            inventory: 5,
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

        },
        {
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            price: 49.95,
            reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
            inventory: 20,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'

        }
    ]
  }
  console.log("Original BookStore:", bookStore)
  console.log("------------------------------------")
  //console.log(bookStore.location)
  //console.log(bookStore["number"])
  let keyName = "address"
  //console.log(bookStore[keyName])

  bookStore.customers = []
  bookStore.name = "Easley's Technical books"

//   console.log(bookStore.inventory)
//   console.log(bookStore.inventory[0])
//   console.log(bookStore.inventory[0].reviews)
//   console.log(bookStore.inventory[0].reviews[0])
//   console.log(bookStore.inventory[0].reviews[0].content)

  delete bookStore.customers

  const loopObj = (obj) => {
    for(key in obj){
        console.log(key)
        console.log(obj[key])
    }
  }
  //loopObj(bookStore)
  //loopObj(['a', 'b', 'c'])

  const objKeys = Object.keys(bookStore)
  const objValues = Object.values(bookStore)
  const objEntries = Object.entries(bookStore).map(item => {
      if(item[0] !== "inventory"){
        return `${item[0].toUpperCase()} : ${item[1]}`
      } 
      
  })
  // "LOCATION: Seattle"

// return an array with all of the book titles
// Get to the books?
// what can we use to loop through our inventory? map? forEach? filter? for...of
// map
const titles = bookStore.inventory.map(book => book.title)

// return an array with all of the books under 30
const cheaperBookArray = bookStore.inventory.filter(book => book.price < 30)

// return an array with all of the book reviews content
// review content 
// bookStore inventory
// Mapped through the inventory to get all of the reviews
//Our reviews returned an Array of Arrays with objects 
// [[{reviews}], [{reviews}, {reviews}], [{reviews}]]
//Map through the nested array to get the object and get the content from the object
// Array or Arrays with strings 
// [['content','content']]
// .flat let us remove the nested Arrays from our Array of Arrays
const reviews = bookStore.inventory.map(book => book.reviews).flat().map(review => {
    if(review){
        return review.content
    }
})


const arr = [1,2,[3, []]]
const flatArr = arr.flat(Infinity)

// Making a copy
let a = 'at'
let a2 = a 
a2 = 'cat'

let arr1 = [1,2,3]
let arr2 = arr1

const bookStoreCopy = {...bookStore, inventory: [...bookStore.inventory]}
bookStoreCopy.name = "Rose likes to code"
console.log(bookStore.name)
console.log(bookStoreCopy.name)

bookStoreCopy.inventory[0].title = 'rose likes to code pt 1'
console.log('original: ', bookStore.inventory[0].title)
console.log('copy: ', bookStoreCopy.inventory[0].title)

// const deepClone = structuredClone(bookStore)
// deepClone.inventory[0].title = 'Rose likes to code the book!'
// console.log(deepClone.inventory[0].title)
// console.log(bookStore.inventory[0].title)
// const arr3 = structuredClone(arr1)
// arr3.push('10')



//find a book written by an author called gayle
let search = 'gAyle'
//How do I get to my books

//How do we search for 1 book?

//use  toUpper or toLower on both the book title and the search 
const foundBook = bookStore.inventory.find(book =>  book.author.toLowerCase().includes(search.toLowerCase()))
const filteredBook = bookStore.inventory.filter(book =>  book.author.toLowerCase().includes(search.toLowerCase()))

//return an array of objects with a book title and all of the review for the book 
//map, filter

const bookReviews = bookStore.inventory.map(book => {
    return {title: book.title, reviews: book.reviews}
})
