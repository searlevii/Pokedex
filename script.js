//Axios client provides data for pokemon via the APIs//
axios.get('http://fizal.me/pokeapi/api/v2/name/greninja.json')
 .then(function (response){
   console.log(response.data);
   let greninjaSprite = document.createElement('img');
   greninjaSprite.src = response.data.sprites.front_shiny;
   document.getElementById('greninja').appendChild(greninjaSprite);
 });
axios.get('http://fizal.me/pokeapi/api/v2/name/magearna.json')
  .then(function (response){
    console.log(response.data);
    let magearnaSprite = document.createElement('img');
    magearnaSprite.src = response.data.sprites.front_default;
    document.getElementById('magearna').appendChild(magearnaSprite);
});
axios.get('http://fizal.me/pokeapi/api/v2/name/ariados.json')
  .then(function (response){
    console.log(response.data);
    let ariadosSprite = document.createElement('img');
    ariadosSprite.src = response.data.sprites.front_default;
    document.getElementById('ariados').appendChild(ariadosSprite);
});

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
};
console.log(Pokemon.name);
