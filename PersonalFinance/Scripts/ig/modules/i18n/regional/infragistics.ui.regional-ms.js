/* Malaysia +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.ms = {
	monthNames: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
	monthNamesShort: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
	dayNames: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
	dayNamesShort: ['Aha', 'Isn', 'Sel', 'Rab', 'kha', 'Jum', 'Sab'],
	datePattern: 'dd/MM/yyyy',
	dateLongPattern: 'dd MMMM yyyy',
	dateTimePattern: 'dd/MM/yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencySymbol: 'R',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	currencyMaxDecimals: 0,
	currencyMinDecimals: 0,
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setDefaultCulture('ms');
}
