// bookStore is coming from data.js
//Deliverables
//1. Move function calls to DOMContentLoaded
//2. Create a delete button element for each card
//3. Create a form that submits a new book

// runs JavaScript functions after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // function calls
    console.log('second')
    document.querySelector('#book-list li').remove()
    renderHeader(bookStore)
    renderInventory(bookStore.inventory, renderOneBook)
    renderFooter(bookStore)
    handleSearch()

    // document.querySelector('header').addEventListener('click', ()=>{
    //     console.log('hi')
    // })
    document.getElementById('book-form').addEventListener('submit', (e) => {
        e.preventDefault()
        // console.log(e.target['form-title'].value)
        // console.log(e.target[0].value)
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
        //document.querySelector('#book-form').reset()
    })
})

console.log('first')


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


  