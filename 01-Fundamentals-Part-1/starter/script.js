let js = ['cacca', 'merda'];
// console.log(js);
//crei variabili
let country, continent, population
// assegni contenuto alle variabili
country = 'Switzerland';
continent = 'Europe';
population = 1;
//stampi le variabili
// console.log(country);
// console.log(continent);
// console.log(population);

let gino = true;
if (gino == true) {
    // console.log('gino is true');
    // console.log(typeof gino);
} else {
    // console.log('gino is not true');
}
//constanti
const birthday = '21.07.1999';
// console.log(birthday);
//variabile var da non utilizzare
var pino;
pino = 'pino';
// console.log(pino);
const firstName = "Giada";
const surName = "Aliprandi";
const fullName = firstName + " " + surName;
// console.log(fullName);

//operatori
let x = 10 + 5;
x += 10;
x -= 10;
x /= 10;
// console.log(x);

// Controlli < > 
const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / markHeight ** 2
const johnBMI = johnWeight / johnHeight ** 2
//invece di usare un if/else per il controllo
let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

const firstname = 'Giada';
const surname = 'Aliprandi';
let birthyear = 1999;
let year = 2020;


//Stringhe  concatenazione
const frase = 'my name is ' + firstname + ' and im a' + (year - birthyear) + ' years old gal.';
const frase2 = `my name is  ${firstname} and i' m a ${year - birthyear} years old gal.`;
// console.log(frase, frase2);

//Conversioni
//converti stringa in numero
const inputYear = '1999';
// console.log(inputYear, Number(inputYear));
//conveti numero in stringa
let numero = 90;
// console.log(numero, String(numero));

//Coercion 
// i numeri vengono convertiri automaticamente in stringhe
// console.log(`i'm am ${23} years old`);


//Boolean logic && ||
let saraLicense = true;
let saraVision = true;
let isTired = false;

if (saraLicense && saraVision && !isTired) {
    // console.log('sara can drive');
} else {
    // console.log('sara can not drive');
}

//Challenge
let scoreDolphin = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphin > scoreKoalas) {
    // console.log('Dolphin wins');
} else if (scoreDolphin < scoreKoalas) {
    // console.log('Koalas wins)');
} else {
    // console.log('both wins');
}


///Switch
let day = 'thursday';
let activity;

switch (day) {
    case 'monday':
        activity = 'gym';
        break;
    case 'tuesday':
        activity = 'swim';
        break;
    case 'wednesday':
        activity = 'run';
        break;
    case 'thursday':
    case 'friday':
        activity = 'sleep';
        break;
    default:
        activity = 'sleep';
}
//console.log(`On ${day} my activity is: ${activity}`);

//trasformare switch in if statement
if (day == 'monday') {
    activity = 'gym';
} else if (day == 'tuesday') {
    activity = 'swim';
} else if (day == 'wednesday') {
    activity = 'run';
} else if (day == 'thursday' || day == 'friday') {
    activity = 'sleep';
} else {
    activity = 'sleep';
}
//console.log(`On ${day} my activity is: ${activity}`);


/// Ternario
let age = 23;
// age >= 18 ? console.log(age + ': sei maggiorenne') : console.log(age + ': sei minorenne');
//miglioriamo
let controllo = age >= 18 ? 'sei maggiorenne' : 'sei minorenne';
// console.log(age + ': ' + controllo);

///Challenge
//calcolare le tasse della ricevuta, se è tra 50/300.- la tassa è 15%, se è maggiore allora 20%
let tip = 15;
let bill = 311
let finalbil = bill >= 50 && bill <= 300
    ? bill / 100 * (100 + tip)
    : bill / 100 * (100 + tip + 5);
// console.log(finalbil);