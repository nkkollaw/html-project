// handle locales
var currLang = 'it';

function i18n(selector, data) {
	$(selector).find('[data-i18n]').each(function(i, elem) {
		var val = $(this).attr('data-i18n');

		$(elem).html(data[val]);
	});
}

$(document).ready(function() {
	$.getJSON('/locales/' + currLang + '.json', function(data) {
		i18n('*', data);
	});
});
