/* Netherlands (Dutch) +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.nl = {
	monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
	monthNamesShort: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
	dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
	dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
	datePattern: 'd-M-yyyy',
	dateLongPattern: 'dddd d MMMM yyyy',
	dateTimePattern: 'd-M-yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencyPositivePattern: '$ n',
	currencyNegativePattern: '$ -n',
	currencySymbol: '€',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setDefaultCulture('nl');
}
