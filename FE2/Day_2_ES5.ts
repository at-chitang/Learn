var $input = document.getElementById("js-name");
var $submit = document.getElementById("js-submit");
var $list = document.getElementById("js-members");

$submit.addEventListener('click', addMember);

function addMember() {
	var $name= $input.value;

	var $newMember = document.createElement('li');
	$newMember.className = 'btn btn-danger';

	var $span = document.createElement('span');
	$span.innerHTML= $name;

	var $delBtn = document.createElement('button');
	$delBtn.className = 'btn ';
	$delBtn.innerHTML = 'Del';

	$newMember.appendChild($span);
	$newMember.appendChild($delBtn);

	$list.appendChild($newMember);

	$delBtn.addEventListener( 'click', function() {
		var $parentElement = this.parentNode;
		$list.removeChild($parentElement);
	})
}
