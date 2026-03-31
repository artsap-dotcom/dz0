/*
Задача:
Написать код, рассчитывающий дистанцию о объекта: 

addressLat - адрес назначения lat (например: 10)
addressLong - адрес назначения long
positionLat - текущее положение пользователя lat
positionLong - текущее положение пользователя long
В результате на основе этих координат нужно посчитать расстояние от текущего месторасположения до назначения.
*/
const addressLat = 10;
const addressLong = 20;
const positionLat = 5;
const positionLong = 15;

const deltaLat = addressLat - positionLat;
const deltaLong = addressLong - positionLong;

const distance = (deltaLat ** 2 + deltaLong ** 2) ** (1/2);

console.log(`Расстояние: ${distance}`); // 7.0710678118654755