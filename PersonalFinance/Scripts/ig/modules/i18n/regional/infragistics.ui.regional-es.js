/* Spain +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.es = {
	monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
	monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
	dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
	dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
	datePattern: 'dd/MM/yyyy',
	dateLongPattern: 'dddd, dd \\de MMMM \\de yyyy',
	dateTimePattern: 'dd/MM/yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericNegativePattern: '- n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: '.',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: '€',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: '.',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: '.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('es');
}
