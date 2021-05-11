

$(document).ready(function() {
  var total = 0;

  var sum = function() {

	//price and quantity will be multiplied. 
    var prices = $('.item-price');
    var qtys = $('.quantity');
    total = 0;
	
	//loop through quanities and multiply the price the the amount
    for (i=0; i<qtys.length; i++) {

      var price = Number($(prices[i]).text().replace(/\$/,""));
      var subtotal = (Number($(qtys[i]).val())) * price;

		
	  //if it is not zero, add the replace the empyty text
      if (subtotal != 0) {
        $($('.item-subtotal')[i]).text("$" + subtotal)rm ;
      } else {
        $($('.item-subtotal')[i]).text("$--.--");
      }
      total += subtotal    
    }

	//Display total price
    $('#total-price').text("$ " + total);

    var addspace = "";
    var spaces = total.toString();
        spaces = 12 - spaces.length;
        for (i=0; i<spaces; i++) {
          addspace += " ";
        }

    return total;
  }
  
	var addItem = function(name,cost) {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		$('#item-list').prepend('<div class="row item"> \
		  <div class="item-name col-xs-3"> \ '
		  +  name + '\
		  </div> \
		  <div class="item-price col-xs-3"> \
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

	var sortItem = function() {
		var prices = $('.item-price');
		var names = $('.item-name');
		var priceName = [];

		for (i=0; i<prices.length; i++) {
		  var price = $(prices[i]).text().trim();
		  var name = $(names[i]).text().trim();
		  priceName.push([name,price]);
		} 

		priceName.sort();




		for (i=0; i<priceName.length; i++) {
		  $($('.item-name')[i]).text(priceName[i][0]);
		  $($('.item-price')[i]).text(priceName[i][1]);
		}
	  }
	
	
	$(document).on('click', '.remove', function() {
		$(this).parents('.row').remove();
		sum();
	});

	$(document).on('click', '.sum', function() {
		sum();
	});


	$(document).on('click', '#sort', function() {
		sortItem();
	  });
	
	  $(document).on('click', '#fork', function() {
		addItem($('#name').val(), $('#cost').val());
	  });
	
	  $(document).on('click', '.remove', function() {
		$(this).parents('.row').remove();
		sum();
	  });
	
	  $('input').keydown(function(e){
		// console.log(e.which);
		if (e.which == 13) {
		  sum();
		};
	  });
	
	  $(document).on('keyup', '.quantity', function(){
		sum();
	  });
	
	  $(document).on('keydown', '#cost', function(e){
		// console.log(e.which);
		if (e.which == 13) {
		  addItem($('#name').val(), $('#cost').val());
		};
	  });
});
