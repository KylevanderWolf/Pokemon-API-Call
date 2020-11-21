let body = document.getElementsByTagName('body')[0]
let card1 = document.getElementsByClassName('card1')[0]
let generateBtn = document.getElementsByClassName('generate')[0]
let img1 = document.getElementsByClassName('img1')[0]
let id = document.getElementsByClassName('id')[0]
let name = document.getElementsByClassName('name')[0]
let type = document.getElementsByClassName('type')[0]

img1.src = `https://i.pinimg.com/originals/04/a3/43/04a343ea7b886980bcc1082b333e5590.jpg`

async function getPokeInfo() {
    let randomId = Math.floor(Math.random() * 20) + 1
    let results = await getPokemons(randomId)
    let pokemon = {
        id: results.id,
        name: results.name.toUpperCase(),
        type: results.types.map(e => e.type.name).join(", ").toUpperCase()
    }
    //create card
    img1.src = ""
    img1.src = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    id.innerHTML = `#${pokemon.id}`
    name.innerHTML = `${pokemon.name}`
    type.innerHTML = `Type: ${pokemon.type}`
}

generateBtn.addEventListener('click', getPokeInfo)


