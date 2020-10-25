// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Proxy позволяет ставить ловушки на поля объектов, на вызов ф-ии, что
// в действительности помогает нам очень гибко опредялять работу приложения
// в дальнейшем и например как практический пример этого может быть избавление
// от лишних запросов на сервер, что в контексте WEB-разработки крайне важная
// задача
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function networkFetch(url) {
	return `${url} - answer from server`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
	apply(target, thisArg, args) {
		const url = args[0];
		if (cache.has(url)) {
			return `${url} - answer from cache`;
		} else {
			cache.add(url);
			return Reflect.apply(target, thisArg, args);
		}
	}
});

console.log(proxiedFetch('angular.io')); // angular.io - answer from server
console.log(proxiedFetch('react.io')); // react.io - answer from server
console.log(proxiedFetch('angular.io')); // angular.io - answer from cache
console.log(proxiedFetch('react.io')); // react.io - answer from cache