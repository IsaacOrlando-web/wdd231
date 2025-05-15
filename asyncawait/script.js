const jsonString = '[{"name": "Molecule Man", "age": 29, "secretIdentity": "Dan Jukes", "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]}, {"name": "Madame Uppercut", "age": 39, "secretIdentity": "Jane Wilson", "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]}]';

const superHeroes = JSON.parse(jsonString);

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall(){
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result); // Waits for 2 seconds
}

asyncCall(); // calling