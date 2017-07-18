var $bin= document.getElementById("js-name");
$bin.addEventListener('click', add_member);

function add_member()
{
	var name= document.getElementById("name").value;
	document.getElementById("list-name").innerHTML += `${name} </br>`;
}


class Vihicle{
	constructor()
	{
		console.log("Hi");
	}
};

class Motobike extends Vihicle
{
	var banh_xe= 2;
	constructor(name)
	{

	}

};
