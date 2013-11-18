/*!@license
* Infragistics.Web.ClientUI Tree localization resources 13.2.20132.1010
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Tree) {
	$.ig.Tree = {};

	$.extend($.ig.Tree, {
		locale: {
			invalidArgumentType: 'Подаденият аргумент е от невалиден тип.',
			errorOnRequest: 'Проблем при извличане на данните: ',
			noDataSourceUrl: 'igTree изисква опцията dataSourceUrl да бъде попълнена, за да се оправят заявки за данни.',
			incorrectPath: 'Връх със следната пътека не беше намерен: ',
			incorrectNodeObject: 'Подаденият аргумент не е jQuery елемент.',
			setOptionError: 'Стойността на следната опция не може да бъде променяна след инициализация: ',
			moveTo: '<strong>Премести върху</strong> {0}',
			moveBetween: '<strong>Премести между</strong> {0} и {1}',
			moveAfter: '<strong>Премести след</strong> {0}',
			moveBefore: '<strong>Премести преди</strong> {0}',
			copyTo: '<strong>Копирай върху</strong> {0}',
			copyBetween: '<strong>Копирай между</strong> {0} и {1}',
			copyAfter: '<strong>Копирай след</strong> {0}',
			copyBefore: '<strong>Копирай преди</strong> {0}',
			and: 'и'
		}
	});

}
