const jsonString = `{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]
}`;

const superHeroes = JSON.parse(jsonString); //Convertir el string JSON a un objeto JavaScript

//Acceder a los datos
console.log(superHeroes.homeTown);
console.log(superHeroes.members[0].name);
console.log(superHeroes["formed"]);
console.log(superHeroes["members"][1]["secretIdentity"]);


//Añadir un nuevo miembro
superHeroes.members.push({
    name: "Superman",
    age: 35,
    secretIdentity: "Clark Kent",
    powers: ["Flight", "Super strength", "X-ray vision"]
});


//Convertir el objeto JavaScript de nuevo a un string JSON
const updatedJsonSDtring = JSON.stringify(superHeroes, null, 2);
console.log(updatedJsonSDtring);