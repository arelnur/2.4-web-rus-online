let num = prompt ("введите три двузначных числа через запятую одним сообщением");
const pair1 = num.substr(0, 2);
const pair2 = num.substr(3, 2);
const pair3 = num.substr(6, 2);
if (pair1 < pair2) {
	console.log(message = 'good');
  } if (pair1 < pair3) {
	console.log(message = 'very good');
  } if (pair2 < pair3) {
	console.log(message = 'sorry');
  } else {
	console.log(message = 'Hello');
  }