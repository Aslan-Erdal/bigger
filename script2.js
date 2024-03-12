console.log('---------- LONGEST WORD  ---------');

let phrase = 'ajouter un script dans un autre fichier permettant de trouver le mot le plus long';
let tabPhrase = phrase.split(' ');
const longestWord = tabPhrase.sort((a, b) =>  b.length - a.length )[0];
console.log({ 'THE LONGEST WORD IS : ' : longestWord});

console.log('---------- END OF LONGEST WORD  ---------');