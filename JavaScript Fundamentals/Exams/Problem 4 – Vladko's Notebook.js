function solve(input) {
   let result = new  Map();

    for (let line of input) {
          let inputAsStr = line.split("|");
          let color = inputAsStr[0];
          let secondParameter = inputAsStr[1];
          let thirdParameter = inputAsStr[2];

          if(!result.has(color)){
              result.set(color, new Map());
              result.get(color).set('age', '');
              result.get(color).set('name', '');
              result.get(color).set('wins', 1);
              result.get(color).set('losses', 1);
              result.get(color).set('opponents', []);
              result.get(color).set('rank',0)

          }

          switch (secondParameter){
              case 'age':
                  result.get(color).set('age', thirdParameter);
                  break;
              case 'name':
                  result.get(color).set('name', thirdParameter);
                  break;
              case 'win':
                  result.get(color).set('wins', result.get(color).get('wins') + 1);
                  result.get(color).get("opponents").push(thirdParameter);
                  break;
              case 'loss':
                  result.get(color).set('losses',result.get(color).get('losses') + 1);
                  result.get(color).get("opponents").push(thirdParameter);
                  break;
          }

    }

    for (let key of result.keys()) {
       if(result.get(key).get("name") === '' || result.get(key).get("age") === ''){
            result.delete(key);
        }

    }

    for (let key of result.keys()) {
        let rank = result.get(key).get("wins") / result.get(key).get("losses");
        result.get(key).set("rank", rank.toFixed(2));
       result.get(key).delete("wins");
       result.get(key).delete("losses");
       result.get(key).get("opponents").sort();
    }

    let finalResult = [...result.entries()].sort((a,b) => a[0].localeCompare(b[0]));

    var finalObject = {};

    for (let [key,value] of finalResult) {
        finalObject[key] = {};
        for (let [k, v] of value) {
            finalObject[key][k] = v;
        }
        
    }

 console.log(JSON.stringify(finalObject));
}

solve([
    " purple|age|99",
   " red|age|44",
   " blue|win|pesho",
   " blue|win|mariya",
   " purple|loss|Kiko",
   " purple|loss|Kiko",
   " purple|loss|Kiko",
   " purple|loss|Yana",
   " purple|loss|Yana",
   " purple|loss|Manov",
   " purple|loss|Manov",
   " red|name|gosho",
   " blue|win|Vladko",
   " purple|loss|Yana",
   " purple|name|VladoKaramfilov",
   " blue|age|21",
   " blue|loss|Pesho"]);