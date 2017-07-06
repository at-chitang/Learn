"use strict";

var acb= function(x, y)
{
	return x+y;
}

function abc()
{
	return arguments[0] + arguments[1];
}

function bac(a, b)
{
	function bca(x)
	{
		return x*x;
	}
	return bca(a) + bca(b);
}







var x = document.getElementsByTagName('table');
var create = document.createElement('div');
create.innerHTML = '<p>new html</p>';
x[0].appendChild(create);

var y = x.querySeletorAll('p');
var z = ""
for (var i of y) 
{
	z+= i.innerHTML;
}
document.getElementsById('demo').innerHTML = 'new html' + z

var x = document.getElementsByTagName('table')
x.style.fontSize = '20px';

var x = document.getElementsById('click')
x.addEventListener('click', function() {    call(3);  }   );
function call(x){
	if( x == 4 ){		
		alert('dong');
	}	
	else{
		alert('david dong');
	}
}