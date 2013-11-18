/* Bulgaria +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.bg = {
	monthNames: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
	monthNamesShort: ['Яну', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Нов', 'Дек'],
	dayNames: ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота'],
	dayNamesShort: ['Нед', 'Пон', 'Вто', 'Сря', 'Чет', 'Пет', 'Съб'],
	dayNamesMin: ['Не', 'По', 'Вт', 'Ср', 'Че', 'Пе', 'Съ'],
	datePattern: 'dd.MM.yyyy г.',
	dateLongPattern: 'dd MMMM yyyy г.',
	dateTimePattern: 'dd.MM.yyyy г. HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericNegativePattern: '-n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: ' ',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: 'лв',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: ' ',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('bg');
}
