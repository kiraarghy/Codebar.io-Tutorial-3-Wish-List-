/* Exercise 1: Wish list */

function addToList(item) {
	//$('#items')<--is jquery for html object with id items
	//this translates as append to the list 'items' the item in the parameter, use '' around html. 
	$('#items').append('<li>' + item + '</li>');
}

function addToList(item) {
	//$('#items')<--is jquery for html object with id items
	//this translates as append to the list 'items' the item in the parameter, use '' around html. 
	$('#items').append('<li>' + item + '</li>');
}

//function returnText() {
//	var text = $('text').val();
//	return (text);
//}

function returnText() {
//in this I've set the var 'text' by telling jquery to get the value from the HTML document and then from the Element ID ('item')
//in the HTML code under ID (don't forget that, it's simple) .value just tells jquery to pull the value from the text
var text = document.getElementById('item').value;
return (text);
}

//by nesting returnText() within addToList() we can then put what's typed in the box within the list 

$('#add-to-list').click(function() {
	return ('butts');
});

//$('#add-to-list').on('click', function() {
//  var text = document.getElementById('item').value;
//  return (text);
//  $('#items').append('<li>' + text + '</li>');
//});