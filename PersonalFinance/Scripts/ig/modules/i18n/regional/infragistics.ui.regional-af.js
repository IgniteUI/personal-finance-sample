/* South Africa +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.af = {
	monthNames: ['Januarie', 'Februarie', 'Maart', 'April', 'Mei', 'Junie', 'Julie', 'Augustus', 'September', 'Oktober', 'November', 'Desember'],
	monthNamesShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
	dayNames: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
	dayNamesShort: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
	pm: 'nm',
	datePattern: 'yyyy/MM/dd',
	dateLongPattern: 'dd MMMM yyyy',
	dateTimePattern: 'yyyy/MM/dd hh:mm tt',
	timePattern: 'hh:mm tt',
	timeLongPattern: 'hh:mm:ss tt',
	//
	numericMaxDecimals: 2,
	currencyPositivePattern: '$ n',
	currencyNegativePattern: '$-n',
	currencySymbol: 'R'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('af');
}
