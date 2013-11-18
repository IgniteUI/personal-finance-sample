/* Norway +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.no = {
	monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
	dayNamesShort: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
	dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
	datePattern: 'dd.MM.yyyy',
	dateLongPattern: 'd. MMMM yyyy',
	dateTimePattern: 'dd.MM.yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericDecimalSeparator: ',',
	numericGroupSeparator: ' ',
	numericMaxDecimals: 2,
	currencyPositivePattern: '$ n',
	currencyNegativePattern: '$ -n',
	currencySymbol: 'kr',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: ' ',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
	$.ig.setDefaultCulture('no');
}
