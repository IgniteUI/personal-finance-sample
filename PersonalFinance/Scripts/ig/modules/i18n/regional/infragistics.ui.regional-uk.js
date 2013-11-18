/* Ukraine +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.uk = {
	monthNames: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
	monthNamesShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
	dayNames: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'],
	dayNamesShort: ['нед', 'пнд', 'вів', 'срд', 'чтв', 'птн', 'сбт'],
	datePattern: 'dd.MM.yyyy',
	dateLongPattern: 'd MMMM yyyy р.',
	dateTimePattern: 'dd.MM.yyyy H:mm',
	timePattern: 'H:mm',
	timeLongPattern: 'H:mm:ss',
	//
	numericNegativePattern: '-n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: ' ',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: 'грн.',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: ' ',
	percentDecimalSeparator: ',',
	percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('uk');
}
