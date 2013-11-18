/* China (Hong Kong SAR, PRC) +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional['zh-HK'] = {
	datePattern: 'd/M/yyyy',
	dateLongPattern: 'dddd, d MMMM, yyyy',
	dateTimePattern: 'd/M/yyyy H:mm',
	timePattern: 'H:mm',
	timeLongPattern: 'H:mm:ss',
	//
	numericMaxDecimals: 2,
	currencySymbol: 'HK$'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('zh-HK');
}
