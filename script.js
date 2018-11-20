//Axios client provides data for pokemon via the APIs//
axios.get('https://pokeapi.co/api/v2/pokemon/greninja-ash/')
 .then(function (response){
   console.log(response.data);
   let greninja = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, response.data.moves[54].move.name, response.data.moves[54].move.name, response.data.moves[54].move.name, response.data.moves[54].move.name);
   greninja.sprite()
 });
axios.get('http://fizal.me/pokeapi/api/v2/name/magearna.json')
  .then(function (response){
    console.log(response.data);
    let magearna = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, response.data.moves[10].move.name, response.data.moves[10].move.name, response.data.moves[10].move.name, response.data.moves[10].move.name);
    magearna.sprite2()
});
axios.get('http://fizal.me/pokeapi/api/v2/name/ariados.json')
  .then(function (response){
    console.log(response.data);
    let ariados = new Pokemon(response.data.id, response.data.name, response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, response.data.moves[54].move.name, response.data.moves[54].move.name, response.data.moves[54].move.name, response.data.moves[54].move.name);
    ariados.sprite3()
});
class Trainer {
  
}
class Pokemon {
  constructor(id, name, hp, attack, defense, abilities, move1, move2, move3, move4){
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.move1 = move1;
    this.move2 = move2;
    this.move3 = move3;
    this.move4 = move4;
  }
  sprite() {
    let div = document.getElementById("greninja");
    let img = document.createElement("img");
    div.appendChild(img)
    img.src = "http://play.pokemonshowdown.com/sprites/xyani/"+ this.name +".gif"
    img.id = "ninjutsu"
  }
  sprite2() {
    let div = document.getElementById("magearna");
    let img = document.createElement("img");
    div.appendChild(img)
    img.src = "http://play.pokemonshowdown.com/sprites/xyani/"+ this.name +".gif"
    img.id = "gears"
  }
  sprite3() {
    let div = document.getElementById("ariados");
    let img = document.createElement("img");
    div.appendChild(img)
    img.src = "http://play.pokemonshowdown.com/sprites/xyani/"+ this.name +".gif"
    img.id = "silk"
  }
  display(){
    let hp = document.createElement("h1");
    hp.innerHTML = this.hp;
    this.element.appendChild(hp);
    this.container.appendChild(this.element);
  }
};
console.log(Pokemon.name);
