﻿/* Sweden +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.sv = {
	monthNames: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
	dayNamesShort: ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör'],
	dayNames: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
	datePattern: 'yyyy-MM-dd',
	dateLongPattern: 'dddd d MMMM yyyy',
	dateTimePattern: 'yyyy-MM-dd HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericNegativePattern: '-n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: ' ',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: 'kr',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: ' ',
	percentDecimalSeparator: ',',
	percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('sv');
}
