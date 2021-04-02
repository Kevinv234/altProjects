

$(document).ready(function() {

	var sum = function() {
		// collet div of all item-qty and store in array qtys
		// var qtys = $('#item-list .item-qty input');
		var prices = $('.item-price');
		var qtys = $('.quantity');
			// qtys.splice(9,1);
			total = 0;
	
		for (i=0; i<qtys.length; i++) {
		  // convert the value of each element in qtys into number and
		  // multiply by corresponding item price, then add to sum
		  var price = Number($(prices[i]).text().replace(/\$/,""));
		  var subtotal = (Number($(qtys[i]).val())) * price;
		  if (subtotal != 0) {
			$($('.item-subtotal')[i]).text("$" + subtotal);
		  } else {
			$($('.item-subtotal')[i]).text("$--.--");
		  }
		  total += subtotal    
		}
		$('#total-price').text("$ " + total);
		var addspace = "";
		var spaces = total.toString();
			spaces = spaces.length;
			spaces = 12 - spaces;
			for (i=0; i<spaces; i++) {
			  addspace += " ";
			}
	
		return total;
	  }

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
