//Deliverables
//1. Move function calls to DOMContentLoaded
//2. Create a delete button element for each card
//3. Create a form that submits a new book

// runs JavaScript functions after DOM is loaded




//Selecting and updating elements
    //Render Header
    const renderHeader = (store) => document.querySelector('header h1').textContent = store.name

    

//Creating and appending elements
   //Render one book
    const renderOneBook = (item) => {
        const card = document.createElement('li')
        const title = document.createElement('h3')
        const subHeading = document.createElement('p')
        const price = document.createElement('p')
        const img = document.createElement('img')
        title.textContent = item.title
        subHeading.textContent = item.author
        price.textContent = `$${item.price}` 
        img.src = item.imageUrl
        card.className = 'list-li'
        card.append(title, subHeading, price, img)
        document.querySelector('#book-list').append(card)
    }
    //Rendering out books
    const renderInventory = (inventory, renderFoo) => {
        inventory.forEach(renderFoo)
    }

    //Renders Footer
    const renderFooter = (store) => {
        const footerH5 = document.querySelectorAll("footer h5")
        footerH5[0].textContent = store.name
        footerH5[1].textContent = store.number
        footerH5[2].textContent = store.hours
        footerH5[3].textContent = `${store.name} .inc copyright 2022`
    }


    


// function calls
document.querySelector('#book-list li').remove()
renderHeader(bookStore)
renderInventory(bookStore.inventory, renderOneBook)
renderFooter(bookStore)
 