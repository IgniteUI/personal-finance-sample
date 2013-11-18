/* Finland +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
   $.ig.regional.fi = {
	monthNames: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
	monthNamesShort: ['Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko', 'Kesä', 'Heinä', 'Elo', 'Syys', 'Loka', 'Marras', 'Joulu'],
	dayNamesShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'Su'],
	dayNames: ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'],
	datePattern: 'd.M.yyyy',
	dateLongPattern: 'd. MMMM yyyy',
	dateTimePattern: 'd.M.yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericNegativePattern: '-n$',
	numericDecimalSeparator: ',',
	numericGroupSeparator: ' ',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: '€',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: ' ',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: ' '
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('fi');
}
