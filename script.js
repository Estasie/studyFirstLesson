let money,
	time;
function start () {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(Number.isNaN(money) || money == "" || money == null ) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}

}

start();


let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function(){
		for (let i = 0 ; i <2; i ++) {
			let a = +prompt('Введите обязательную статью расходов в этом месяце', ' ' ),
			b = +prompt('Во сколько обойдется?', ' ');
			if (typeof a != 'string' && typeof b != 'string' && a.toString().length < 50 && a != null && b != null){
				console.log("done"); 
				appData.expenses[a] = b;
			} else { 
				console.log("ne kek"); 
				i--; 
			}
		}
	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.budget / 30).toFixed(); 

		alert("Ежедневный бюджет: " + appData.moneyPerDay);
	},
	detectLevel: function (){
		if (appData.moneyPerDay < 100) {
			console.log ("Минимальный уровень достатка");
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
				console.log ("Средний уровень достатка");
			} else if (appData.moneyPerDay > 2000) {
				console.log ("Высокий уровень достатка");
	
		} else {
			console.log ("Произошла ошибка");
		} 
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
	
				appData.monthIncome = save/100/12* percent;
				alert("Ваш доход в месяц с депозита составит: " + appData.monthIncome);
		}
	
	},
	chooseOptExpenses: function() {
		for (let j=0; j<4; j++) {
			let opt = +prompt ("Статья необязательных расходов?");
				if (typeof opt != 'string' && opt != null) {
				appData.optionalExpenses[opt]= opt;
				console.log ("Записали значения в необязательные расходы");
				} else {
					console.log("Значения не записаны из-за несоблюдения условий");
					j--;
				}
	
	
		}
	},
	chooseIncome: function() {
		for (let i= 0; i< 1; i++) {
			let items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)", '');
				if (typeof items == 'string' && items != null && items !== ' ') {
				appData.income = items.split(', ');
				appData.income.push(prompt("Может что-то ещё?", ''));
				appData.income.sort();
				}
				else {
					alert("Попробуйте снова :)");
					i--;
			}
		}
		appData.income.forEach(function (letter,i){
			alert('Способы доп. заработка: '+ letter + ':' + (i+1) );
		});
	}

	
}; 
function retInfo(){
    for (let key in appData){
       console.log("Наша программа включает в себя данные: " + key + "-"); 
    }
}
retInfo();

// let i = 0;


// do {
// 	let a = +prompt('Введите обязательную статью расходов в этом месяце', ' ' ),
// 		b = +prompt('Во сколько обойдется?', ' ');
// 		if (typeof a != 'string' && typeof b != 'string' && a.toString().length < 50 && a != null && b != null){
// 			console.log("done"); 
// 		    appData.expenses[a] = b;
// 		} else { 
// 			console.log("ne kek"); 
// 			i--; 
// 		}
		
// 		i++;
// } while (i < 2);

 /*for (let i = 0; i < 2; i++) {
	let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = +prompt("Во сколько обойдется?", '');
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;
	} else {
		console.log("Попробуйте снова.");
		i--;
	}
}

/* WHILE */

/*let i = 0;
while (i< 2) {
	let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = +prompt("Во сколько обойдется?", '');
		if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
		
			console.log("done");
			
			appData.expenses[a] = b;
			i++;
} else {
	console.log("Попробуйте снова.");
	i--; 
	 }
	
} */

/* DO... WHILE */

//do {
//	let a = +prompt('Введите обязательную статью расходов в этом месяце', ' ' ),
//		b = +prompt('Во сколько обойдется?', ' ');
//		
//		if (typeof(a) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//			console.log ("Done");
//			appData.expenses[a]= b;
//		} else {
//			console.log ("Попробуйте снова");
//			i--;
//		}
//		
//		i++;
//} while (i < 2); 





