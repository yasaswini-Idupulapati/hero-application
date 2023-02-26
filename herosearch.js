console.log('OH!! just like magic')


const nameDiv = document.getElementById("heroName")
const imgDiv = document.getElementById("heroImage")
const powerstatsDiv = document.getElementById("powerStats")

const searchB = document.getElementById("searchHero")
const newherobutton = document.getElementById("newHeroButt")
//api's

//token and bse urls
const token = '10223569763528853'

const base_url = `https://www.superheroapi.com/api.php/${token}`


function getNewHero(id) {
    fetch(`${base_url}/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        getHTML(json)
      /*  const heroname = json.name
        const img = json.image.url
        const powerstats = json.powerstats

        nameDiv.innerHTML = `<h2>${heroname}</h2>`
        imgDiv.innerHTML = `<img src="${img}" width=100 height=100/>`
        const intelle= json.powerstats.intelligence
        const stre = json.powerstats.strength
        
        powerstatsDiv.innerHTML = `<p>INTELLEGENCE : ${intelle} <br> STRENGTH : ${stre}</p>`*/
    })
}

function randomN(){
    let number = Math.floor(Math.random()*731 + 1)
    console.log(number)
    return number
}


//GET HERO BYT NAME FUNCTION



function search(nam) {
    fetch(`${base_url}/search/${nam}`)
    .then(response => response.json())
    .then(json => {
      //console.log(json)
      const hero = json.results[0]
      getHTML(hero)
})
}


function getHTML(character) {

    const name2 = character.name

    const img = `<img id="new-img" src ="${character.image.url}" width=100 height=100/>`

    const stats = Object.keys(character.powerstats).map(stat =>{
    return   `<p>${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
    }).join('')

    //console.log(stats.join(''))
    nameDiv.innerHTML= `<h2>${name2}</h2><br>${img}<br>${stats}`

}





const inputDiv = document.getElementById("input")

function inputname() {
    const nameSearched = inputDiv.value 
    console.log(nameSearched)
    return nameSearched
}


searchB.onclick = () => search(inputname())

newherobutton.onclick = () => getNewHero(randomN())



  
//for every onclick on 'new hero' button, get a random hero
//get api from superhero api, 
//in their json, consolelog what content is needed
//create html element, therfore include strings
//for powerstats,  .... change object to string ...?????




//for every random number, make a function 1 to 731 or whtv length+1
//id as random number
//