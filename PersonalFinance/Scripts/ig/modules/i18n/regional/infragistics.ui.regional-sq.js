﻿/* Albania +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.sq = {
	monthNames: ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'],
	monthNamesShort: ['Jan', 'Shk', 'Mar', 'Pri', 'Maj', 'Qer', 'Kor', 'Gus', 'Sht', 'Tet', 'Nën', 'Dhj'],
	dayNames: ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtune'],
	dayNamesShort: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'],
	am: 'PD',
	pm: 'MD',
	datePattern: 'yyyy-MM-dd',
	dateLongPattern: 'd. MMMM yyyy',
	dateTimePattern: 'yyyy-MM-dd h:mm.tt',
	timePattern: 'h:mm.tt',
	timeLongPattern: 'h:mm:ss.tt',
	//
	numericNegativePattern: '-n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n$',
	currencyNegativePattern: '-n$',
	currencySymbol: 'Lek',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('sq');
}
