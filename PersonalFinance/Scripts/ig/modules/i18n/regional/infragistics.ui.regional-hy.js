/* Armenia +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.hy = {
	monthNames: ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս', 'Օգոստոս', 'Սեպտեմբեր', 'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր'],
	monthNamesShort: ['Հունվ', 'Փետր', 'Մարտ', 'Ապր', 'Մայիս', 'Հունիս', 'Հուլ', 'Օգս', 'Սեպ', 'Հոկ', 'Նոյ', 'Դեկ'],
	dayNames: ['կիրակի', 'եկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ'],
	dayNamesShort: ['կիր', 'երկ', 'երք', 'չրք', 'հնգ', 'ուրբ', 'շբթ'],
	datePattern: 'dd.MM.yyyy',
	dateLongPattern: 'd MMMM, yyyy',
	dateTimePattern: 'dd.MM.yyyy HH:mm:ss',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericNegativePattern: '-n$',
	numericMaxDecimals: 2,
	currencyPositivePattern: 'n $',
	currencyNegativePattern: '-n $',
	currencySymbol: 'դր.'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('hy');
}
