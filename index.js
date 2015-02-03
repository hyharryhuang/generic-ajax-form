$(document).ready( function() {
	$('form.ajax').on('submit', function() {
		var form = $(this),
			url = form.attr('url'),
			type = form.attr('type'),
			data = {};

		form.find('[name]').each(function() {
			var input = $(this),
				name = input.attr('name'),
				value = input.val();

			data[name] = value;
		});

		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function(response) {
      			alert(response);
      		},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert(XMLHttpRequest.status);
			}
		});

		return false; //make sure we do not trigger the original submit for the form!
	});

});