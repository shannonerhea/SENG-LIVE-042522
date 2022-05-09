//1. Review post
//2. Update a book using PATCH.
// - Add a sell button to a book. On button click the inventory number decreases both on the client and the server. If inventory is 0 remove the buy button.
//3. Delete a book using DELETE
// On click of the delete button the book should be removed from the client and server.
//4. Stretch async and await 
//5. Stretch .catch
document.addEventListener('DOMContentLoaded', () => {
    // GET Fetch 
    // Fetch one store
    fetch('http://localhost:3000/store_info/1')
    .then(res => res.json())
    .then(data => {
        renderHeader(data)
        renderFooter(data)
    })



    //Make a Fetch to get our inventory 
    //http://localhost:3000/inventory
    fetch('http://localhost:3000/inventory')
    .then(res => res.json())
    .then(data =>  renderInventory(data, renderOneBook))


    document.querySelector('#book-list li').remove()
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
        postContent(book, 'inventory')
        .then(data => renderOneBook(data))
        e.target.reset()
    })
    document.querySelector('#location-form').addEventListener('submit',(e)=> {
        e.preventDefault()
        const location = {
            location: e.target.location.value,
            address: e.target.address.value,
            number: e.target.number.value,
            name: e.target.name.value,
            hours: e.target.hours.value
        }
        postContent(location, 'store_info')
        .then(data => console.log(data))
    })


    document.querySelector('#form-toggle').addEventListener('click',(e)=>{
       document.querySelector('#book-form').classList.toggle('hidden')
       document.querySelector('#location-form').classList.toggle('hidden')
       e.target.textContent === 'Toggle To Store Form'? e.target.textContent = 'Toggle To Book Form':e.target.textContent = 'Toggle To Store Form'
    })
})

//Fetch calls 
const postContent = (obj, endpoint) => {
    return fetch(`http://localhost:3000/${endpoint}`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    .then(res => res.json())
}


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


  