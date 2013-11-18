﻿/* Faroe +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.fo = {
	monthNames: ['Januar', 'Februar', 'Mars', 'Apríl', 'Mei', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
	dayNames: ['Sunnudagur', 'Mánadagur', 'Týsdagur', 'Mikudagur', 'Hósdagur', 'Fríggjadagur', 'Leyardagur'],
	dayNamesShort: ['Sun', 'Mán', 'Týs', 'Mik', 'Hós', 'Frí', 'Ley'],
	datePattern: 'dd-MM-yyyy',
	dateLongPattern: 'd. MMMM yyyy',
	dateTimePattern: 'dd-MM-yyyy HH.mm',
	timePattern: 'HH.mm',
	timeLongPattern: 'HH.mm.ss',
	//
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencyPositivePattern: '$ n',
	currencyNegativePattern: '$ -n',
	currencySymbol: 'kr',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('fo');
}
