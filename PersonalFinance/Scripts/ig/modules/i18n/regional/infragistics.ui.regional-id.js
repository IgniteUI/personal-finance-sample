/* Indonesia +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.id = {
	monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'],
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agus', 'Sep', 'Okt', 'Nop', 'Des'],
	dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
	dayNamesShort: ['Min', 'Sen', 'Sel', 'Rab', 'kam', 'Jum', 'Sab'],
	datePattern: 'dd/MM/yyyy',
	dateLongPattern: 'dd MMMM yyyy',
	dateTimePattern: 'dd/MM/yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencySymbol: 'Rp',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	currencyMaxDecimals: 0,
	currencyMinDecimals: 0,
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('id');
}
