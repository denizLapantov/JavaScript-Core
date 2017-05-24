
function FruitOrVegetable(name) {
  switch (name){
      case 'banana':
      case 'apple':
      case 'peach':
      case 'cherry':
      case 'lemon':
      case 'kiwi':
      case 'grapes':
          console.log("fruit");
          break;

      case 'tomato':
      case 'cucumber':
      case 'onion':
      case 'parsley':
      case 'garlic':
      case 'pepper':
          console.log("vegetable");
          break;
      default:
          console.log("unknown");
  }
}