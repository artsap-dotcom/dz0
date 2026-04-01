/*
Задача:
Вася положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить 
дом за 13 500$ через 2 года после снятия вклада и остаток после покупки.

Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

*/

const lang = prompt('Введите язык (en, ru, de):').toLowerCase();

switch (lang) {
    case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Привет!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Язык не поддерживается');
}