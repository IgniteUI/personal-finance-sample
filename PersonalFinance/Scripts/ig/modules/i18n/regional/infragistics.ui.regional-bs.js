﻿/* Bosnia +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.bs = {
	monthNames: ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'August', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
	dayNames: ['Nedelja', 'Ponedeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'],
	dayNamesShort: ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'],
	datePattern: 'd.M.yyyy.',
	dateLongPattern: 'd. MMMM yyyy.',
	dateTimePattern: 'd.M.yyyy. HH:mm:ss',
	timePattern: 'HH:mm:ss',
	timeLongPattern: 'HH:mm:ss',
	//
	numericNegativePattern: '- n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: 'KM',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('bs');
}