


async function getPokemons(id) {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        let data = await fetch(url)
        let result = await data.json()
        return result
    }
    catch (error) {
        console.log(error)
        return error
    }
}
