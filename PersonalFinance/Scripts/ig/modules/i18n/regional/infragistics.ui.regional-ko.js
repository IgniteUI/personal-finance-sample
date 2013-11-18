/* Korea +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.ko = {
	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	am: '오전',
	pm: '오후',
	datePattern: 'yyyy-MM-dd',
	dateLongPattern: 'yyyy MM dd dddd',
	dateTimePattern: 'yyyy-MM-dd tt hh:mm',
	timePattern: 'tt hh:mm',
	timeLongPattern: 'tt hh:mm:ss',
	//
	numericMaxDecimals: 2,
	currencyNegativePattern: '-$n',
	currencySymbol: '₩',
	currencyMaxDecimals: 0,
	currencyMinDecimals: 0,
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('ko');
}
