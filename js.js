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

// function showFirstMessage (text)
// {
//     alert(text);
//     let num = 20;
// } 
// showFirstMessage ("Всем хай");

// let num = 20;
// function showFirstMessage (text)
// {
//     alert(text);
// 	console.log(num);
// } 
// showFirstMessage ("Всем хай");
// console.log (num);

// function calc (a,b) {
// 	return (a+b);
// }

// let calc = (a,b) => a+b;
// console.log(calc(50,3));

// function retVar() {
// 	let num = 50;
// 	return num;
// }

// let anotherNum = retVar();

// let str = "test";
// console.log (str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";

// console.log(Math.round(twelve));

// console.log(parseFloat(twelve));


function learnJS (lang, callback) {
        console.log ("Я учу " + lang);
        callback();
}

function done() {
    console.log ("Я прошел 3 урок!");
}

learnJS("JavaScript", done);
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = false;
options.colors = {
        border: "black",
        bg: "red"
};

delete options.bool;

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение '+ options[key]);
}

console.log(Object.keys(options).length);

// let arr = ['first',2,3,'four',5];

// // for (let i=0; i< arr.length ; i++){
// //     console.log(arr[i]);
// // }
// arr.forEach(function (item, i, mass)){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass){
//     console.log(key);
// }

// let ans = prompt('',''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['awee', 'zzz', 'ppp','eyey'],
//     i = arr.join();
//     console.log(arr);
let arr = [1,15,4],
    i = arr.sort(compareNum);
function compareNum(a,b){
    return a-b;
}
    console.log(arr);


    let cat = {
        paws : true,
        name: "mur"
    };

    let Kisa = {
        paws: true
    };

    Kisa.__proto__ = cat;

    console.log (Kisa);
    console.log(Kisa.name);