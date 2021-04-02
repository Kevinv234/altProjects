

$(document).ready(function() {

	
	var addItem = function(name,cost) {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		$('#item-list').prepend('<div class="row item"> \
		  <div class="name col-s-1"> \ '
		  +  name + '\
		  </div> \
		  <div class="price col-s-1"> \
			$' + cost + '.00 \
		  </div> \
		  <div class="item-qty col-s-1"> \
			<label>QTY</label> \
			<input class="quantity" type="number"> \
		  </div> \
		  <div class="col-xs-1"> \
			<button class="remove"> \
			  Remove \
			</button> \
		  </div> \
		  <div class="item-subtotal col-xs-2"> \
		  $--.-- \
		  </div> \
		</div>');
	}

	$(document).on('click', '.remove', function() {
		$(this).parents('.row').remove();
		sum();
	});

	$(document).on('click', '#fork', function() {
		addItem($('#name').val(), $('#cost').val());
	});


	$(document).on('click', '.sum', function() {
		sum();
	});

});
