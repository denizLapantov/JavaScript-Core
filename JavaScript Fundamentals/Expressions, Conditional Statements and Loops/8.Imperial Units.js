function ImperialUnits(number) {
    let feet =Number.parseInt(number /12) ;
     let inches = number % 12;

    console.log(`${feet}'-${inches}"`);
}
ImperialUnits(11);