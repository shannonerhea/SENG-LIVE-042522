
//building out the headrer on the page
// make sure you call this 
const renderHeadrer = (store) => {
    const h1 = document.querySelector('h1') // selects the h1 we want in the ('header div h1)'
    h1.textContent = store.name // this puts the store name in the h1 tag on the page
    //console.log(h1)
    
};


//building out the footer on the page
//make sure i call this 
const renderFooter = (store) => {
    const footerH5 = document.querySelectorAll('footer h5')

    footerH5[0].textContent = store.name // textContent is an atribute that changes the text of the footer 
    footerH5[1].textContent = store.number
    footerH5[2].textContent = store.hours
    console.log(footerH5)

};



// all my function calls 
renderHeadrer(bookStore)
renderFooter(bookStore)




























// const renderHeader = (store) => {
//     const h1 = document.querySelector("header div h1")
//     // const header = document.querySelector('header')
//     // const h1 = header.querySelector('h1')
//     h1.textContent = store.name
//     console.log(h1)
// }

// const renderFooter = (store) => {
//     const footerH5 = document.querySelectorAll("footer h5")
//     footerH5[0].textContent = store.name
//     footerH5[1].textContent = store.number
//     footerH5[2].textContent = store.hours

// }
// //Render one book
// const renderOneBook = (item) => {
//     const card = document.createElement('li')
//     const title = document.createElement('h3')
//     const subHeading = document.createElement('p')
//     const price = document.createElement('p')
//     const img = document.createElement('img')
//     title.textContent = item.title
//     subHeading.textContent = item.author
//     price.textContent = `$${item.price}` 
//     img.src = item.imageUrl
//     card.className = 'list-li'
//     card.append(title, subHeading, price, img)
//     document.querySelector('#book-list').append(card)
// }
// //Rendering out books
// const renderInventory = (inventory, renderFoo) => {
//     inventory.forEach(renderFoo)
// }
// // //Rendering out books
// // const renderInventory = (inventory) => {
// // //Card for book
// //     //li - top level
// //         // h3 - title
// //         // p - author
// //         // p - price
// //         // img - img
   
// // //Loops through our inventory 
// // //And will build a card for every book in our inventory 
// // //One card at a time
// //     inventory.forEach((item) => {
// //         console.log(item)
// //         //item has the value of book
// //         //Build elements with .createElements
// //         //container card
// //         const card = document.createElement('li')
// //         //book title
// //         const title = document.createElement('h3')
// //         //book author
// //         const subHeading = document.createElement('p')
// //         //price 
// //         const price = document.createElement('p')
// //         //imageURL
// //         const img = document.createElement('img')
        
// //         //Add the content to the elements
// //         title.textContent = item.title
// //         subHeading.textContent = item.author
// //         price.textContent = `$${item.price}` 
// //         img.src = item.imageUrl

// //         card.className = 'list-li'

// //         //Added the elements to the card container
// //         card.append(title, subHeading, price, img)
// //         //Added the container to the DOM
// //         document.querySelector('#book-list').append(card)
// //     })
    
// // }

// document.querySelector('#book-list li').remove()
// // document.querySelector('#book-list li').innerHTML = ""
// // const cat = "rose"
// // document.querySelector('#book-list li').innerHTML = `
// //     <h1>${cat} is cool </h1>
// // `
// renderHeader(bookStore)
// renderFooter(bookStore)
// renderInventory(bookStore.inventory, renderOneBook)
