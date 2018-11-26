class Trainer {
  constructor(){
    this.pokemon=[];
  }
  all(){
    return this.pokemon;
  }
  add(champions){
    this.pokemon.push(champions);
  }
  get(name){
    for(let i=0; i<this.pokemon.length; i++){
      if(name === this.pokemon[i].name){
        return this.pokemon[i];
      }
    }
  }
}
let King = new Trainer();


//Axios client provides data for pokemon via the APIs//
axios.get('https://pokeapi.co/api/v2/pokemon/greninja-ash/')
  .then(function (response){
    console.log(response.data);
    let ab = response.data.abilities;
    let abarray = [];
    for (i=0; i < ab.length; i++){
      abarray.push(ab[i].ability.name)
    }

    console.log(abarray);

    let greninja = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);
    console.log(greninja);
    greninja.sprite()
    King.add(greninja);
    greninja.display();
});
axios.get('https://fizal.me/pokeapi/api/v2/name/magearna.json')
  .then(function (response){
    console.log(response.data);
    let ab = response.data.abilities;
    let abarray = [];
    for (i=0; i < ab.length; i++){
      abarray.push(ab[i].ability.name)
    }

    console.log(abarray);

    let magearna = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);
    magearna.sprite2()
    King.add(magearna);
    magearna.display2();
});
axios.get('https://fizal.me/pokeapi/api/v2/name/ariados.json')
  .then(function (response){
    console.log(response.data);
    let ab = response.data.abilities;
    let abarray = [];
    for (i=0; i < ab.length; i++){
      abarray.push(ab[i].ability.name)
    }

    console.log(abarray);

    let ariados = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name);
    ariados.sprite3()
    King.add(ariados);
    ariados.display3();
});

class Pokemon {
  constructor(id, name, hp, attack, defense, abilities){
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.element1 = document.getElementById("element1");
    this.element2 = document.getElementById("element2");
    this.element3 = document.getElementById("element3");
    this.container = document.getElementById("status1");
    this.container2 = document.getElementById("status2");
    this.container3 = document.getElementById("status3");
  }
  sprite() {
    let div = document.getElementById("greninja");
    let img = document.createElement("img");
    div.appendChild(img)
    img.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ this.name +".gif"
    img.id = "ninjutsu"
  }
  sprite2() {
    let div = document.getElementById("magearna");
    let img = document.createElement("img");
    div.appendChild(img)
    img.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ this.name +".gif"
    img.id = "gears"
  }
  sprite3() {
    let div = document.getElementById("ariados");
    let img = document.createElement("img");
    div.appendChild(img)
    img.src = "https://play.pokemonshowdown.com/sprites/xyani/"+ this.name +".gif"
    img.id = "silk"
  }
  sprite4(){
    let div = document.getElementById("champion");

  }

  display(){
    let nameElement = document.getElementById("pkmn");
    nameElement.innerHTML = "Name: " + this.name;
    let abilityElement = document.getElementById("ab");
    abilityElement.innerHTML = "Ability: " + this.abilities;
    let attackElement = document.getElementById("attack");
    attackElement.innerHTML = "ATK: " + this.attack;
    let defenseElement = document.getElementById("defense");
    defenseElement.innerHTML = "DEF: " + this.defense;
    let hpElement = document.getElementById("health");
    hpElement.innerHTML = "HP: " + this.hp;
  }
  display2(){
    let nameElement = document.getElementById("pkmn2");
    nameElement.innerHTML = "Name: " + this.name;
    let abilityElement = document.getElementById("ab2");
    abilityElement.innerHTML = "Ability: " + this.abilities;
    let attackElement = document.getElementById("attack2");
    attackElement.innerHTML = "ATK: " + this.attack;
    let defenseElement = document.getElementById("defense2");
    defenseElement.innerHTML = "DEF: " + this.defense;
    let hpElement = document.getElementById("health2");
    hpElement.innerHTML = "HP: " + this.hp;
  }
  display3(){
    let nameElement = document.getElementById("pkmn3");
    nameElement.innerHTML = "Name: " + this.name;
    let abilityElement = document.getElementById("ab3");
    abilityElement.innerHTML = "Ability: " + this.abilities;
    let attackElement = document.getElementById("attack3");
    attackElement.innerHTML = "ATK: " + this.attack;
    let defenseElement = document.getElementById("defense3");
    defenseElement.innerHTML = "DEF: " + this.defense;
    let hpElement = document.getElementById("health3");
    hpElement.innerHTML = "HP: " + this.hp;
  }
};
console.log(Pokemon.name);
let greninjaclick = document.getElementById('greninja');
greninjaclick.addEventListener('onclick', greninja);
let magearnaclick = document.getElementById('magearna');
magearnaclick.addEventListener('onclick', magearna);
let ariadosclick = document.getElementById('ariados');
ariadosclick.addEventListener('onclick', ariados);
