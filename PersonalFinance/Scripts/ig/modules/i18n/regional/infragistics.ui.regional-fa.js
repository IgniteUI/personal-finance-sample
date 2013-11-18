/* Iran (Farsi) +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.fa = {
	monthNames: ['فروردين', 'ارديبهشت', 'خرداد', 'تير', 'مرداد', 'شهريور', 'مهر', 'آبان', 'آذر', 'دي', 'بهمن', 'اسفند'],
	monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	dayNames: ['يکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
	dayNamesShort: ['ي', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
	am: 'ظق',
	pm: 'ظب',
	datePattern: 'MM/dd/yyyy',
	dateLongPattern: 'yyyy ,dd MMMM dddd',
	dateTimePattern: 'MM/dd/yyyy hh:mm tt',
	timePattern: 'hh:mm tt',
	timeLongPattern: 'hh:mm:ss tt',
	//
	numericNegativePattern: 'n$-',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: 'n$-',
	currencySymbol: 'ريال',
	currencyDecimalSeparator: '/',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('fa');
}
