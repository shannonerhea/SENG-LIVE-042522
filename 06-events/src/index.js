// bookStore is coming from data.js
//Deliverables
//1. Move function calls to DOMContentLoaded
//2. Create a delete button element for each card
//3. Create a form that submits a new book

//run js functions after DOM is loaded
document.addEventListener('DOMContentLoaded', () =>{
    //console.log("The DOM is loaded")
    document.querySelector('#book-list li').remove() // this removed the sample li element
    renderHeadrer(bookStore)
    renderInventory(bookStore.inventory, renderOneBook)
    renderFooter(bookStore)    // moving these into the eventlisterner makes them laod right away

  
})


//building out the headrer on the page
// make sure you call this 
const renderHeadrer = (store) => {
    const h1 = document.querySelector('header h1') // selects the h1 we want in the ('header div h1)'
    h1.textContent = store.name // this puts the store name in the h1 tag on the page
    //console.log(h1) 
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
        price.textContent = `$${book.price}`
        img.src = book.imageUrl

        card.className = 'list-li' // ref to CSS styling in CSS file
        card.append(title, author, price, img) // this adds my elements to the container (card/ container)
        //console.log(card)
        document.querySelector('#book-list').append(card) // added the container/card to the DOM
    });


//****rendering out books*********** */
const renderInventory = (inventory, renderBook) => { // second parameter can be any name that makes sense its a cb
    inventory.forEach(renderBook)
}

//building out the footer on the page
//selectAll cuz there are 3 H5's im gonna use them all below
//make sure to call this with my other calls ata the bottom of my code 
const renderFooter = (store) => {
    const footerH5 = document.querySelectorAll('footer h5')

    footerH5[0].textContent = store.name // textContent is an atribute that changes the text of the footer 
    footerH5[1].textContent = store.number
    footerH5[2].textContent = store.hours
    footerH5[3].textContent = `${store.name} .copyright 2022`
    //console.log(footerH5)

};


// all my function calls (- moved these into my eventlistener in DOMContentLoaded)
// _document.querySelector('#book-list li').remove() // this removed the sample li element
// renderHeadrer(bookStore)
// renderInventory(bookStore.inventory, renderOneBook)
// renderFooter(bookStore)






// runs JavaScript functions after DOM is loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // function calls
//     console.log('second')
//     document.querySelector('#book-list li').remove()
//     renderHeader(bookStore)
//     renderInventory(bookStore.inventory, renderOneBook)
//     renderFooter(bookStore)

//     // document.querySelector('header').addEventListener('click', ()=>{
//     //     console.log('hi')
//     // })
//     document.getElementById('book-form').addEventListener('submit', (e) => {
//         e.preventDefault()
//         // console.log(e.target['form-title'].value)
//         // console.log(e.target[0].value)
//         const book = {
//             title: e.target.title.value,
//             author: e.target.author.value,
//             price: parseInt(e.target.price.value),
//             reviews: [],
//             inventory: parseInt(e.target.inventory.value),
//             imageUrl: e.target.imageUrl.value
//         }
//         renderOneBook(book)
//         e.target.reset()
//         //document.querySelector('#book-form').reset()
//     })
// })

// console.log('first')


//Selecting and updating elements
    //Render Header
   // const renderHeader = (store) => document.querySelector('header h1').textContent = store.name

  

//Creating and appending elements
   //Render one book
    // const renderOneBook = (item) => {
    //     const card = document.createElement('li')
    //     const title = document.createElement('h3')
    //     const subHeading = document.createElement('p')
    //     const price = document.createElement('p')
    //    // const inventory = document.createElement('p')
    //     const img = document.createElement('img')
    //    // const btn = document.createElement('button')
    //    // const miniForm = document.createElement('form')
    //    // const miniInput = document.createElement('input')
    //    // const miniSubmit = document.createElement('input')


    //     title.textContent = item.title
    //     subHeading.textContent = item.author
    //     price.textContent = `$${item.price}`
    //    // inventory.textContent = `Inventory: ${item.inventory}`
    //    // btn.textContent = 'Delete' 
        
    //     img.src = item.imageUrl
    //    // miniForm.className = 'book-inventory-form'
    //    // miniInput.type = 'number'
    //    // miniInput.name = 'inventory'
    //     // miniInput.value = item.inventory
    //    // miniSubmit.type = 'submit'
    //     card.className = 'list-li'

    //    // btn.addEventListener('click',() => card.remove())

    //    // miniForm.addEventListener('submit', (e) => {
    //     //    e.preventDefault()
    //         //console.log(e.target[0].value)
    //     //    item.inventory += parseInt(e.target.inventory.value)
    //     //    inventory.textContent = `Inventory: ${item.inventory}`

    //     })

    //    // miniForm.append(miniInput, miniSubmit)
    //     card.append(title, subHeading, price, inventory, img, btn, miniForm)
    //     document.querySelector('#book-list').append(card)
    // }
    // //Rendering out books
    // const renderInventory = (inventory, renderFoo) => {
    //     inventory.forEach(renderFoo)
    // }

    // //Renders Footer
    // const renderFooter = (store) => {
    //     const footerH5 = document.querySelectorAll("footer h5")
    //     footerH5[0].textContent = store.name
    //     footerH5[1].textContent = store.number
    //     footerH5[2].textContent = store.hours
    //     footerH5[3].textContent = `${store.name} .inc copyright 2022`
    // }


    


   const json = {
        "abilities": [
        {
        "ability": {
        "name": "limber",
        "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        "is_hidden": false,
        "slot": 1
        },
        {
        "ability": {
        "name": "imposter",
        "url": "https://pokeapi.co/api/v2/ability/150/"
        },
        "is_hidden": true,
        "slot": 3
        }
        ],
        "base_experience": 101,
        "forms": [
        {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
        }
        ],
        "game_indices": [
        {
        "game_index": 76,
        "version": {
        "name": "red",
        "url": "https://pokeapi.co/api/v2/version/1/"
        }
        },
        {
        "game_index": 76,
        "version": {
        "name": "blue",
        "url": "https://pokeapi.co/api/v2/version/2/"
        }
        },
        {
        "game_index": 76,
        "version": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version/3/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "gold",
        "url": "https://pokeapi.co/api/v2/version/4/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "silver",
        "url": "https://pokeapi.co/api/v2/version/5/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version/6/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
        }
        },
        {
        "game_index": 132,
        "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
        }
        }
        ],
        "height": 3,
        "held_items": [
        {
        "item": {
        "name": "metal-powder",
        "url": "https://pokeapi.co/api/v2/item/234/"
        },
        "version_details": [
        {
        "rarity": 5,
        "version": {
        "name": "ruby",
        "url": "https://pokeapi.co/api/v2/version/7/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "sapphire",
        "url": "https://pokeapi.co/api/v2/version/8/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version/9/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "firered",
        "url": "https://pokeapi.co/api/v2/version/10/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "leafgreen",
        "url": "https://pokeapi.co/api/v2/version/11/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
        }
        },
        {
        "rarity": 5,
        "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
        }
        }
        ]
        },
        {
        "item": {
        "name": "quick-powder",
        "url": "https://pokeapi.co/api/v2/item/251/"
        },
        "version_details": [
        {
        "rarity": 50,
        "version": {
        "name": "diamond",
        "url": "https://pokeapi.co/api/v2/version/12/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "pearl",
        "url": "https://pokeapi.co/api/v2/version/13/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version/14/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "heartgold",
        "url": "https://pokeapi.co/api/v2/version/15/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "soulsilver",
        "url": "https://pokeapi.co/api/v2/version/16/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "black",
        "url": "https://pokeapi.co/api/v2/version/17/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "white",
        "url": "https://pokeapi.co/api/v2/version/18/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "black-2",
        "url": "https://pokeapi.co/api/v2/version/21/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "white-2",
        "url": "https://pokeapi.co/api/v2/version/22/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "x",
        "url": "https://pokeapi.co/api/v2/version/23/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "y",
        "url": "https://pokeapi.co/api/v2/version/24/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "omega-ruby",
        "url": "https://pokeapi.co/api/v2/version/25/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version/26/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "sun",
        "url": "https://pokeapi.co/api/v2/version/27/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "moon",
        "url": "https://pokeapi.co/api/v2/version/28/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "ultra-sun",
        "url": "https://pokeapi.co/api/v2/version/29/"
        }
        },
        {
        "rarity": 50,
        "version": {
        "name": "ultra-moon",
        "url": "https://pokeapi.co/api/v2/version/30/"
        }
        }
        ]
        }
        ],
        "id": 132,
        "is_default": true,
        "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
        "moves": [
        {
        "move": {
        "name": "transform",
        "url": "https://pokeapi.co/api/v2/move/144/"
        },
        "version_group_details": [
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "red-blue",
        "url": "https://pokeapi.co/api/v2/version-group/1/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "yellow",
        "url": "https://pokeapi.co/api/v2/version-group/2/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "gold-silver",
        "url": "https://pokeapi.co/api/v2/version-group/3/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "crystal",
        "url": "https://pokeapi.co/api/v2/version-group/4/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "ruby-sapphire",
        "url": "https://pokeapi.co/api/v2/version-group/5/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "emerald",
        "url": "https://pokeapi.co/api/v2/version-group/6/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "firered-leafgreen",
        "url": "https://pokeapi.co/api/v2/version-group/7/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "diamond-pearl",
        "url": "https://pokeapi.co/api/v2/version-group/8/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "platinum",
        "url": "https://pokeapi.co/api/v2/version-group/9/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "heartgold-soulsilver",
        "url": "https://pokeapi.co/api/v2/version-group/10/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "black-white",
        "url": "https://pokeapi.co/api/v2/version-group/11/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "colosseum",
        "url": "https://pokeapi.co/api/v2/version-group/12/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "xd",
        "url": "https://pokeapi.co/api/v2/version-group/13/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "black-2-white-2",
        "url": "https://pokeapi.co/api/v2/version-group/14/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "x-y",
        "url": "https://pokeapi.co/api/v2/version-group/15/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "omega-ruby-alpha-sapphire",
        "url": "https://pokeapi.co/api/v2/version-group/16/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "sun-moon",
        "url": "https://pokeapi.co/api/v2/version-group/17/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "ultra-sun-ultra-moon",
        "url": "https://pokeapi.co/api/v2/version-group/18/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "lets-go-pikachu-lets-go-eevee",
        "url": "https://pokeapi.co/api/v2/version-group/19/"
        }
        },
        {
        "level_learned_at": 1,
        "move_learn_method": {
        "name": "level-up",
        "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
        },
        "version_group": {
        "name": "sword-shield",
        "url": "https://pokeapi.co/api/v2/version-group/20/"
        }
        }
        ]
        }
        ],
        "name": "ditto",
        "order": 214,
        "past_types": [],
        "species": {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
        },
        "sprites": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
        "front_shiny_female": null,
        "other": {
        "dream_world": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
        "front_female": null
        },
        "home": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
        "front_shiny_female": null
        },
        "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        }
        },
        "versions": {
        "generation-i": {
        "red-blue": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png",
        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png",
        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/132.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png",
        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png",
        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png"
        },
        "yellow": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png",
        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png",
        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/132.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png",
        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png",
        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/132.png"
        }
        },
        "generation-ii": {
        "crystal": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/132.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/132.png",
        "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/132.png",
        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/132.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/132.png",
        "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/132.png",
        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png"
        },
        "gold": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/132.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/132.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/132.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/132.png",
        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/132.png"
        },
        "silver": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/132.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/132.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/132.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/132.png",
        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/132.png"
        }
        },
        "generation-iii": {
        "emerald": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/132.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/132.png"
        },
        "firered-leafgreen": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/132.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/132.png"
        },
        "ruby-sapphire": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/132.png",
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/132.png",
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png",
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/132.png"
        }
        },
        "generation-iv": {
        "diamond-pearl": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png",
        "front_shiny_female": null
        },
        "heartgold-soulsilver": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/132.png",
        "front_shiny_female": null
        },
        "platinum": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png",
        "front_shiny_female": null
        }
        },
        "generation-v": {
        "black-white": {
        "animated": {
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/132.gif",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif",
        "front_shiny_female": null
        },
        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/132.png",
        "back_female": null,
        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/132.png",
        "back_shiny_female": null,
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/132.png",
        "front_shiny_female": null
        }
        },
        "generation-vi": {
        "omegaruby-alphasapphire": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/132.png",
        "front_shiny_female": null
        },
        "x-y": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/132.png",
        "front_shiny_female": null
        }
        },
        "generation-vii": {
        "icons": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png",
        "front_female": null
        },
        "ultra-sun-ultra-moon": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/132.png",
        "front_female": null,
        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/132.png",
        "front_shiny_female": null
        }
        },
        "generation-viii": {
        "icons": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png",
        "front_female": null
        }
        }
        }
        },
        "stats": [
        {
        "base_stat": 48,
        "effort": 1,
        "stat": {
        "name": "hp",
        "url": "https://pokeapi.co/api/v2/stat/1/"
        }
        },
        {
        "base_stat": 48,
        "effort": 0,
        "stat": {
        "name": "attack",
        "url": "https://pokeapi.co/api/v2/stat/2/"
        }
        },
        {
        "base_stat": 48,
        "effort": 0,
        "stat": {
        "name": "defense",
        "url": "https://pokeapi.co/api/v2/stat/3/"
        }
        },
        {
        "base_stat": 48,
        "effort": 0,
        "stat": {
        "name": "special-attack",
        "url": "https://pokeapi.co/api/v2/stat/4/"
        }
        },
        {
        "base_stat": 48,
        "effort": 0,
        "stat": {
        "name": "special-defense",
        "url": "https://pokeapi.co/api/v2/stat/5/"
        }
        },
        {
        "base_stat": 48,
        "effort": 0,
        "stat": {
        "name": "speed",
        "url": "https://pokeapi.co/api/v2/stat/6/"
        }
        }
        ],
        "types": [
        {
        "slot": 1,
        "type": {
        "name": "normal",
        "url": "https://pokeapi.co/api/v2/type/1/"
        }
        }
        ],
        "weight": 40
        }

     //   console.log(JSON.parse(json))
    
