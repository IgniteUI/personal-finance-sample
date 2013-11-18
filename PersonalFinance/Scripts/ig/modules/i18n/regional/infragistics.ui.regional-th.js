﻿/* Thailand +*/
/*global $ */
$.ig = $.ig || {};
$.ig.regional = $.ig.regional || {};
$.ig.regional.th = {
	monthNames: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฏาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
	monthNamesShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
	dayNames: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
	dayNamesShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
	datePattern: 'd/M/yyyy',
	dateLongPattern: 'd MMMM yyyy',
	dateTimePattern: 'd/M/yyyy H:mm',
	timePattern: 'H:mm',
	timeLongPattern: 'H:mm:ss',
	//
	numericMaxDecimals: 2,
	currencyNegativePattern: '-$n',
	currencySymbol: '฿',
	percentPositivePattern: 'n $',
	percentNegativePattern: '-n $'
};
if ($.ig.setRegionalDefault) {
	$.ig.setRegionalDefault('th');
}
