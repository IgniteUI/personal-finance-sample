/* Latvia +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.lv = {
	monthNames: ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn', 'Jūl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
	dayNames: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena'],
	dayNamesShort: ['svt', 'prm', 'otr', 'tre', 'ctr', 'pkt', 'sst'],
	datePattern: 'yyyy.MM.dd',
	dateLongPattern: 'dddd, yyyy. g\\a\\d\\a d. MMMM',
	dateTimePattern: 'yyyy.MM.dd HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericDecimalSeparator: ',',
	numericGroupSeparator: ' ',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: 'Ls',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: ' ',
	percentDecimalSeparator: ',',
	percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('lv');
}
