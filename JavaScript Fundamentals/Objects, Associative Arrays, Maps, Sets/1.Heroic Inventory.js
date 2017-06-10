function heroicInventory(input) {
    let heroData = [];
    for (let line of input) {
        let inputAsStr = line.split(" / ");
        let heroName = inputAsStr[0].trim();
        let heroLevel =Number(inputAsStr[1]);
        let items =[];
        if(inputAsStr.length > 2){
             items = inputAsStr[2].split(", ");
        }
        let hero = {name: heroName, level: heroLevel, items: items};
        heroData.push(hero);
    }
  console.log(JSON.stringify(heroData));
}

heroicInventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);