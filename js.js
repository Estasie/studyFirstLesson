/* let num = 50;

if (num < 49){
    console.log("Неверно!")
} else if(num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
}

(num == 50) ? console.log('Верно!') : console.log('Неверно!');

switch (num) {
    case num < 49: 
        console.log ("Неверно!");
        break;
    case num > 100:
        console.log ("Много!");
        break;
    case num > 80:
        console.log ("Много!");
        break;
    case 50:
        console.log ("Верно!");
        break;
    default:
        console.log("Что-то пошло не так!");
        break;
}

//while (num < 55) {
//    console.log(num);
//    num++;
//}
let num = 50;
//do {
//    console.log(num);
//    num++;
//}
//while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
}
*/

// ФУНКЦИИ

function showFirstMessage (text)
{
    alert(text);
    let num = 20;
} 
showFirstMessage ("Всем хай");

let num = 20;
function showFirstMessage (text)
{
    alert(text);
	console.log(num);
} 
showFirstMessage ("Всем хай");
console.log (num);

function calc (a,b) {
	return (a+b);
}

let calc = (a,b) => a+b;
console.log(calc(50,3));

function retVar() {
	let num = 50;
	return num;
}

let anotherNum = retVar();

let str = "test";
console.log (str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

console.log(Math.round(twelve));

console.log(parseFloat(twelve));