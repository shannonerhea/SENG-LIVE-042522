//Deliverables
//1. Remove bookStore data from data.js
//2. Retrieve data from REST API json-server 
//     - Make a GET request to json-server
//     - Handle promise, convert response with .json  
//     - render data
//3. Stretch Goal - Make a request to an external API



// runs JavaScript functions after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // function calls
    console.log('second')
    document.querySelector('#book-list li').remove()
    renderHeader(bookStore)
    renderInventory(bookStore.inventory, renderOneBook)
    renderFooter(bookStore)
    handleSearch()

    document.getElementById('book-form').addEventListener('submit', (e) => {
        e.preventDefault()
        const book = {
            title: e.target.title.value,
            author: e.target.author.value,
            price: parseInt(e.target.price.value),
            reviews: [],
            inventory: parseInt(e.target.inventory.value),
            imageUrl: e.target.imageUrl.value
        }
        renderOneBook(book)
        e.target.reset()
    })
})



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
        const inventory = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')
        const miniForm = document.createElement('form')
        const miniInput = document.createElement('input')
        const miniSubmit = document.createElement('input')


        title.textContent = item.title
        subHeading.textContent = item.author
        price.textContent = `$${item.price}`
        inventory.textContent = `Inventory: ${item.inventory}`
        btn.textContent = 'Delete' 
        
        img.src = item.imageUrl
        miniForm.className = 'book-inventory-form'
        miniInput.type = 'number'
        miniInput.name = 'inventory'
        // miniInput.value = item.inventory
        miniSubmit.type = 'submit'
        card.className = 'list-li'

        btn.addEventListener('click',() => card.remove())

        miniForm.addEventListener('submit', (e) => {
            e.preventDefault()
            //console.log(e.target[0].value)
            item.inventory += parseInt(e.target.inventory.value)
            inventory.textContent = `Inventory: ${item.inventory}`

        })

        miniForm.append(miniInput, miniSubmit)
        card.append(title, subHeading, price, inventory, img, btn, miniForm)
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


  