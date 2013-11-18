﻿/* Switzerland, French +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional['fr-CH'] = {
	monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
	monthNamesShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
	dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
	dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
	datePattern: 'dd.MM.yyyy',
	dateLongPattern: 'dddd, d. MMMM yyyy',
	dateTimePattern: 'dd.MM.yyyy HH:mm',
	timePattern: 'HH:mm',
	timeLongPattern: 'HH:mm:ss',
	//
	numericDecimalSeparator: ',',
	numericGroupSeparator: "'",
	numericMaxDecimals: 2,
	currencyPositivePattern: '$ n',
	currencyNegativePattern: '$-n',
	currencySymbol: 'SFr.',
	currencyDecimalSeparator: ',',
	currencyGroupSeparator: "'",
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $',
	percentDecimalSeparator: ',',
	percentGroupSeparator: "'"
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('fr-CH');
}
