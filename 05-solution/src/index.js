
//building out the headrer on the page
// make sure you call this 
const renderHeadrer = (store) => {
    const h1 = document.querySelector('h1') // selects the h1 we want in the ('header div h1)'
    h1.textContent = store.name // this puts the store name in the h1 tag on the page
    //console.log(h1)
    
};


//building out the footer on the page
//selectAll cuz there are 3 H5's im gonna use them all below
//make sure to call this with my other calls ata the bottom of my code 
const renderFooter = (store) => {
    const footerH5 = document.querySelectorAll('footer h5')

    footerH5[0].textContent = store.name // textContent is an atribute that changes the text of the footer 
    footerH5[1].textContent = store.number
    footerH5[2].textContent = store.hours
    //console.log(footerH5)

};

//****adding/creating elements to the DOM*********** */..i need to add li h3 p p img
const renderOneBook = ((book) => {
    const card = document.createElement('li') //building container card
        const title = document.createElement('h3') // building h3 and so on below
        const author = document.createElement('p')  
        const price = document.createElement('p')
        const img = document.createElement('img')
        //adding content to elements below
        title.textContent = book.title // adding content to the elements i built above
        author.textContent = book.author
        price.textContent = book.price
        img.src = book.imageUrl

        card.className = 'list-li' // ref to CSS styling in CSS file
        card.append(title, author, price, img) // this adds my elements to the container
        //console.log(card)
        document.querySelector('#book-list').append(card) // added the container to the DOM
    });


//****rendering out books*********** */
const renderInventory = (inventory, renderBook) => { // second parameter can be any name that makes sense its a cb
    inventory.forEach(renderBook)
}
document.querySelector('#book-list li').remove() // this removed the sample li element



// all my function calls 
renderHeadrer(bookStore)
renderFooter(bookStore)
renderInventory(bookStore.inventory, renderOneBook)

/********NOTES************ */
// If want to remove something from the DOM (eleminate/remove the node) 
//document.querySelector('#book-list li').remove()
//document.querySelector('#book-list li').innerHTML= "" // this is good for empting out an li but not for removing it all togehter

/***************************** */
