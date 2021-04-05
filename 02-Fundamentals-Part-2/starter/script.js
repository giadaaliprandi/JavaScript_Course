'use strict'; //avoid bugs in the code, create visibible errors in the console

let driversLicense = false;
const passTest = true;

if (passTest) driversLicense = true;
// if (driversLicense) console.log('i can drive');

////Functions
//creating the function
function logger(input) {
    // console.log(input);
}
//envocing the function
let myName = 'giada';
logger(myName);

//example
function foodProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
let myJuice = foodProcessor(3, 7);
// console.log(myJuice);


//Function declaration 
function calcAge1(birthYear) {
    return 2021 - birthYear;
}
const age1 = calcAge1(1999);
// questo tipo di funzioni puoi richiamarle prima di dichiararle 

//function expression (crei una funzione 'senza nome' e la assegni in una variabile)
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}
const age2 = calcAge2(1999);

//Arrow function
const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1999);
// console.log(age1, age2, age3);

//calcolare quanti anni alla pensione
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`
}
// console.log(yearsUntilRetirement(1999, 'Giada'));

//Calling functions in another function
//funzione che taglia la frutta 
function cutFruit(fruit) {
    return fruit * 4;
}
//funzione che fa il succo, chiamanto la funzione sopra 
function foodProcessor(apples, oranges) {
    //tagli la frutta
    let applePieces = cutFruit(apples);
    let orangesPieces = cutFruit(oranges);
    // fai il succo
    const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange`;
    return juice;
}

//recap
function calcAge(birthYear) {
    return 2021 - birthYear;
}
const yearsUntilRetirement1 = function (birthYear, firstName) {
    let age = calcAge(birthYear);
    let retirement = 65 - age;
    return retirement > 0 ? retirement : 'già pensionato';
}
// console.log(yearsUntilRetirement1(1929, 'Giada'));

//Challenge
//punteggio squadre
const dolphinScore = 10 + 10 + 10;
const koalasScore = 20 + 20 + 21;
//funzione media punteggio
const calcAverage = score => score / 3;
//funzione che determina il vinvitore
function checkWinner(dolphinScore, koalasScore) {
    //richiama funzione per la  media
    const dolphinScoreAverage = calcAverage(dolphinScore);
    const koalasScoreAverage = calcAverage(koalasScore);
    //determina vincitore
    if (dolphinScoreAverage >= (koalasScoreAverage * 2)) {
        return `Dolphins win (${dolphinScoreAverage} vs. ${koalasScoreAverage})`;
    } else if (koalasScoreAverage >= (dolphinScoreAverage * 2)) {
        return `Koalas win (${koalasScoreAverage} vs. ${dolphinScoreAverage})`;
    } else {
        return 'No team has won';
    }
}
// console.log(calcAverage(dolphinScore));
// console.log(calcAverage(koalasScore));
// console.log(checkWinner(dolphinScore, koalasScore));


//Arrays
//dichiarazione
const friends = ['me', 'myself', 'and I'];
const years = new Array('me', 'myself', 'and I');

let arraylenght = friends.length;
let arraylastvalue = friends[friends.length - 1];
let replacefriend = friends[2] = 'waldo';

const user1 = ['giada', 'aliprandi'];
const user2 = ['mario', 'bros'];
const Users = [user1, user2];
console.log(Users);

//Methods
//insert element in first position inside the array
friends.unshift('Giada');
//insert a element at the end of the array
friends.push('io');
//remove the first element in the array
friends.shift();
//remove the last element
friends.pop();
//position of the element inside the array;
friends.indexOf('Giada');
//check if there a element called Giada in the array
friends.includes('Giada');


//Challenge

function calcTip(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}
let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);
