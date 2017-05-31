function expressionSplit(str) {
    console.log(str.split(/[ ();,.\t]/).filter(x=>x != "").join('\n'));
}

expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');