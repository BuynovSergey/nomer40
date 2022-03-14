$(document).ready(function(){
	$( '#price' ).slider({
		animate: 'slow',
		range: true,
		min: 0,
		max: 100000,    
		values: [0,100000],
		slide : function(event, ui) {   
				$('input[name=priceot]').val(ui.values[0]);
				$('input[name=pricedo]').val(ui.values[1]);
			}
	});
	//$( "#num1" ).selectmenu().addClass( "selnum" );;
});