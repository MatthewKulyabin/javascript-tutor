// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Замыкание - это когда ф-я замыкает в себе значения вышестоящего scope'а
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// function sayHello(name) {
// 	const message = 'Hello ' + name;

// 	return function() {
// 		console.log(message);
// 	}
// }

// const helloToElena = sayHello('Elena');
// const helloToIgor = sayHello('Igor');
// console.log(helloToElena); // [Function (anonymous)]
// helloToElena(); // Hello Elena
// helloToIgor(); // Hello Igor
// ------------------------------------------------------
// function createFrameworkManager() {
// 	const fw = ['Angular', 'React'];

// 	return {
// 		print: function() {
// 			console.log(fw);
// 		},
// 		add: function(framework) {
// 			fw.push(framework);
// 		}
// 	};
// }
// const manager = createFrameworkManager();
// console.log(manager); // { print: [Function: print], add: [Function: add] }
// console.log(fw); // fw is not defined
// manager.print(); // [ 'Angular', 'React' ]
// manager.add('VueJS');
// manager.print(); // [ 'Angular', 'React', 'VueJS' ]
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Мы взаимодействуем с fw, но она является приватной для объекта manager
// Мы это сделали с помощью замыканий
// Эти две функции, к-е мы возвращаем - они замкнули в себе fw, оно нигде
// недоступно извне, но при этом мы всё равно можем с ним взаимодействовать
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// setTimeout =================================================================
// const fib = [1, 1, 2, 3, 5, 8, 13];

// for (var i = 0; i < fib.length; i++) {
// 	setTimeout(function() {
// 		console.log(`fib[${i}]`, fib[i]);
// 	}, 500);
// }
/*  
fib[7] undefined
fib[7] undefined
fib[7] undefined
fib[7] undefined
fib[7] undefined
fib[7] undefined
fib[7] undefined
*/
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// В действительности мы всего лишь один раз создаём переменную i и дальше она
// у нас изменяется как ссылка.
// То есть у нас одна переменная i существует
// И цикл for отрабатывает достаточно быстро
// Самый простой способ поменять на переменную let
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// const fib = [1, 1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
// 	setTimeout(function() {
// 		console.log(`fib[${i}]`, fib[i]);
// 	}, 500);
// }
/*
fib[0] 1
fib[1] 1
fib[2] 2
fib[3] 3
fib[4] 5
fib[5] 8
fib[6] 13*/

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Так как переменная let существует только внутри блочного scope'а
// Однако если нет ES6, то тогда приходит на помощь замыкание
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
const fib = [1, 1, 2, 3, 5, 8, 13];

for (let i = 0; i < fib.length; i++) {
	(function(j) { 
		setTimeout(function() {
		console.log(`fib[${j}]`, fib[j]);
	}, 500)
	})(j);
}
/*
fib[0] 1
fib[1] 1
fib[2] 2
fib[3] 3
fib[4] 5
fib[5] 8
fib[6] 13*/
