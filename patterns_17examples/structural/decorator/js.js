// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// С помощью данного патерна мы имеем возможность добавлять новое поведение
// или какую-то новую функционал существовующих классов
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
class Server {
	constructor(ip, port) {
		this.ip = ip;
		this.port = port;
	}

	get url() {
		return `https://${this.ip}:${this.port}`;
	}
}
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// Декораторами является, в данном случае, посути обычные ф-ии, которые
// принимают инстанс какого-то класса, модифицируя его так или иначе
// и соответственно возвращая его обратно
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
function aws(server) {	// функции aws - декоратор. Принимает инстанс класс 
												// Server
	server.isAWS = true;
	server.awsInfo = function() {
		return server.url;
	}
	return server;
}

function azure(server) {
	server.isAzure = true;
	server.port += 500;
	return server;
}

const s1 = aws(new Server('12.31.14.50', 4000));
console.log(s1);	// Server {ip: "12.31.14.50", 
									// port: 4000, isAWS: true, awsInfo: ƒ}
console.log(s1.awsInfo()); // https://12.31.14.50:4000

const s2 = azure(new Server('98.00.24.15', 4000));
s2.port;
console.log(s2); // Server {ip: "98.00.24.15", port: 4500, isAzure: true}