/* Israel (Hebrew) +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.he = {
	monthNames: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
	monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	dayNames: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
	dayNamesShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
	datePattern: 'dd/MM/yyyy',
	dateLongPattern: 'dd. MMMM yyyy dddd',
	dateTimePattern: 'dd/MM/yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericMaxDecimals: 2,
	currencyPositivePattern: '$ n',
	currencyNegativePattern: '$-n',
	currencySymbol: 'KM'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('he');
}
