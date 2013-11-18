/* Slovenia +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.sl = {
	monthNames: ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
	dayNames: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', 'Četrtek', 'Petek', 'Sobota'],
	dayNamesShort: ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob'],
	datePattern: 'd.M.yyyy',
	dateLongPattern: 'd. MMMM yyyy',
	dateTimePattern: 'd.M.yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericNegativePattern: '-n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: '€',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('sl');
}
