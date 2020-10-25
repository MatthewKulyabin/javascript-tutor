// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// В JS 7 типов данных
// null, undefined, boolean, number, string, object, symbol
// object - не примитивный тип данных
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// console.log(typeof(0)); // number
// console.log(typeof 0); // number
// console.log(typeof true); // boolean
// console.log(typeof 'JS');	// string
// console.log(typeof undefined); // undefined
// console.log(typeof Math); // object
// console.log(typeof Symbol('js')); // symbol
// console.log(typeof null); // object =(
// console.log(typeof NaN); // number

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// undefined используется тогда, когда переменная неопределена или она была
// объявлена с помощью ключевого слово var, но при этом не имеет никакого
// значения
// + Функции, к-е нам ничего не возращают, по умолчанию возвращают undefined

// null же говорит о том, что отсутсвует именно значение, то есть переменная
// объявлена, но в ней нет никакого значения, то есть например до этого был
// какой-то объект, а потом его обнулили и записали в него null
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// ============================================================================
// Приведение типов
// let language = 'JS';

// if (language) {
// 	console.log('The best language is:', language); // The best language is: JS
// }
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// falsy values: '', 0, null, undefined, NaN, false
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// console.log(Boolean('')); // false
// console.log(Boolean('Hello')); // true
// console.log(Boolean(' ')); // true
// console.log(Boolean('0')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function() {})); // true

// ============================================================================
// Строки и числа
// console.log(1 + '2'); // 12
// console.log('' + 1 + 0); // 10
// console.log('' - 1 + 0); // -1
// console.log('3' * '8'); // 24
// console.log(4 + 10 + 'px'); // 14px
// console.log('px' + 5 + 10); // px510
// console.log('42' - 10); // 2
// console.log('42px' - 2); // NaN
// console.log(null + 2); // 2
// console.log(undefined + 42); // NaN

// ============================================================================
// == vs ===
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// '==' сравнивает с приведением типов
// '===' сравнивает по значению без приведения типов
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// console.log(2 == '2'); // true
// console.log(2 === '2'); // false
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log('0' == false); // true
// console.log('0' == 0); // true
// console.log(0 == 0); // true

// ============================================================================
// console.log(false == ''); // true
// console.log(false == []); // true
// console.log(false == {}); // false
// console.log('' == 0); // true
// console.log('' == []); // true
// console.log('' == {}); // false
// console.log(0 == []); // true
// console.log(0 == {}); // false
// console.log(0 == null); // false
// console.log(false == function() {}); // false
// console.log('' == function() {}); // false
// console.log(0 == function() {}); // false
console.log(false == NaN); // false
console.log('' == NaN); // false
console.log(0 == NaN); // false