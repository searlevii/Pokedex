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
axios.get('https://fizal.me/pokeapi/api/v2/name/greninja.json')
 .then(function (response){
   console.log(response.data);
   let ab = response.data.abilities;
   let abarray = [];
   for (i=0; i < ab.length; i++){
     abarray.push(ab[i].ability.name)
   }
   console.log(abarray);

   let greninja = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat,
   response.data.abilities[0].ability.name);
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

    let magearna = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name)
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
    this.element = document.getElementById("element");
    this.element2 = document.getElementById("element2");
    this.element3 = document.getElementById("element3");
    this.container = document.getElementById("status");
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
    let name = document.querySelector('ol');
    name.innerHTML = "Name: " + this.name;
    this.element.appendChild(name);
    this.container.appendChild(this.element);

    let hp = document.querySelector('ol');
    hp.innerHTML = "HP: " + this.hp;
    this.element.appendChild(hp);
    this.container.appendChild(this.element);

    let attack = document.querySelector('ol');
    attack.innerHTML = "ATK: " + this.attack;
    this.element.appendChild(attack);
    this.container.appendChild(this.element);

    let defense = document.querySelector('ol');
    defense.innerHTML = "DEF: " + this.defense;
    this.element.appendChild(defense);
    this.container.appendChild(this.element);

    let abilities = document.querySelector('ol');
    abilities.innerHTML = "ABILITIES: " + this.abilities;
    this.element.appendChild(abilities);
    this.container.appendChild(this.element);
  }
 display2(){
   let ol = document.querySelector('ol');
   ol.innerHTML = ""
   let name = document.querySelector('ol');
   name.innerHTML = "Name: " + this.name;
   this.element2.appendChild(name);
   this.container2.appendChild(this.element2);

   let hp = document.querySelector('ol');
   hp.innerHTML = "HP: " + this.hp;
   this.element2.appendChild(hp);
   this.container2.appendChild(this.element2);

   let attack = document.querySelector('ol');
   attack.innerHTML = "ATK: " + this.attack;
   this.element2.appendChild(attack);
   this.container2.appendChild(this.element2);

   let defense = document.querySelector('ol');
   defense.innerHTML = "DEF: " + this.defense;
   this.element2.appendChild(defense);
   this.container2.appendChild(this.element2);

   let abilities = document.querySelector('ol');
   abilities.innerHTML = "ABILITIES: " + this.abilities;
   this.element2.appendChild(abilities);
   this.container2.appendChild(this.element2);
 }
 display3(){
   let name = document.querySelector('ol');
   name.innerHTML = "Name: " + this.name;
   this.element3.appendChild(name);
   this.container3.appendChild(this.element3);

   let hp = document.querySelector('ol');
   hp.innerHTML = "HP: " + this.hp;
   this.element3.appendChild(hp);
   this.container3.appendChild(this.element3);

   let attack = document.querySelector('ol');
   attack.innerHTML = "ATK: " + this.attack;
   this.element3.appendChild(attack);
   this.container3.appendChild(this.element3);

   let defense = document.querySelector('ol');
   defense.innerHTML = "DEF: " + this.defense;
   this.element3.appendChild(defense);
   this.container3.appendChild(this.element3);

   let abilities = document.querySelector('ol');
   abilities.innerHTML = "ABILITIES: " + this.abilities;
   this.element3.appendChild(abilities);
   this.container3.appendChild(this.element3);
 }
};
console.log(Pokemon.name);
let greninjaclick = document.getElementById('greninja');
greninjaclick.addEventListener('onclick', greninja);
let magearnaclick = document.getElementById('magearna');
magearnaclick.addEventListener('onclick', magearna);
let ariadosclick = document.getElementById('ariados');
ariadosclick.addEventListener('onclick', ariados);
