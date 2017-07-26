var $input = document.getElementById("js-name");
var $submit = document.getElementById("js-submit");
var $list = document.getElementById("js-members");

class Member{
	eleMem: any;

	constructor(name: string= 'anonymous')
	{
		this.eleMem = document.createElement('li');
		this.eleMem.className = 'btn btn-danger';
		this.spanTag(name);
		this.buttonTag();
	}

	spanTag(name)
	{
		var $span = document.createElement('span');
		$span.innerHTML= name;
		this.eleMem.appendChild($span);
	}

	buttonTag()
	{
		var $delBtn = document.createElement('button');
		$delBtn.className = 'btn ';
		$delBtn.innerHTML = 'Del';
		$delBtn.addEventListener( 'click', function() {
			var $parentElement = this.parentNode;
			$list.removeChild($parentElement);
		});
		this.eleMem.appendChild($delBtn);
	}

};

$submit.addEventListener('click', function(){
	let name: any = $input.value;
	let member = new Member(name);
	$list.appendChild(member.eleMem);
});