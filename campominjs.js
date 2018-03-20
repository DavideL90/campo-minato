var bombarray = [];
for (var i = 0; i < 16; i++) {
  do {
    var number = Math.floor((Math.random() * 100) + 1);
  } while (bombarray.includes(number)==true)
  bombarray.push(number);
}
alert (bombarray[0]);
var usedNumbers = [];
do {
  do { //Mi assicuro che il numero non sia già stato inserito
    var guess = parseInt(prompt ("Inserisci un numero"));
  } while((usedNumbers.includes(guess)) || (!isCorrectValue(guess)))
  usedNumbers.push(guess);
} while ((bombarray.includes(guess)==false) && (usedNumbers.length<84))

if (usedNumbers.length==84) {
  alert ("Hai stravinto!");
}
else {
  alert ("Hai perso " + usedNumbers.length);
}

function isCorrectValue(userInput){
  if((userInput < 1) || (userInput > 100) || (isNaN(userInput))){
    return false;
  }
  else{
    return true;
  }
}
