https://www.evernote.com/shard/s543/sh/77cf479c-3361-4eb9-abf4-73d873be6776/bf4b274869622fed053103a3b06534fc

[toc]

#FE Basic

##Basic style
``` htmlbars
<!DOCTYPE html>
<html>
	<head>
		<title>Hello world</title>
	</head>
	
	<body>
		<header>
		</header>
			
		<main id="page-content">
			<p>Chi Thuong sida</p>
			<nav>
				<ul>
					<li>
						<a href="">	
						</a>	
					</li>
				</ul>
			</nav>
		</main>
	
		<footer>
		</footer>
	</body>
</html>
```

## Tab
Long time ago, Dev usually used tab "div" when they need to contain something and it is complicated to read it.
Now, html5 had many kind of tab so that everyone can use it and make their code more clearly.

## Form
``` html
<form>
	<div>
		<label for="name">Name :</label>
		<input id="name" type="text" name="name">			
	</div>

	<div>
		<label for="pass">Pass :</label>
		<input id="pass" type="password" name="pass">
	</div>

	<div>
		<label for="gender">Gender</label>
		<input type="radio" name="gender" id="gender" value="Male" checked>Male
		<input type="radio" name="gender" id="gender" value="Female">Female
	</div>

	<div>
		<label for="content">Content :</label>
		<textarea rows="4" cols="50" id="content" name="content"></textarea>
	</div>

	<div>
		<label for="mail">Mail :</label>
		<input id="mail" type="email" name="mail">			
	</div>

	<input type="submit" name="submit">

</form>
```

## CSS

### Selector

#### Class
``` css
.class {}
```
#### Id
``` css
#id {}
```

### Sass

``` scss
div{
	background-color: pink;
	
	a{
		color: red;
	}
	>div{}
	a+div{}
	ul~li{}
	&:first-child{}
}
```

# Javascript
Javascript is a programming language support to make effects.

## Basic

### Create variable
``` javascript
var 	a= 123;	//  you can var again, global
let 	b= 234;	//	you can't let again, local
const 	c= 345;	//	you can const only one time, global
```

### Create function
``` javascript
function a() {}
var b= function() {}
```

### Control Flow
``` javascript
if ( condition_1 ){
	// do something here
}
else if ( condition_2 ){
	// do something more
}
else{
	// this is your last try :D
}
switch( n ){
	case 1: // do something
		break;
	case m: ...
	default: ....
}
```

### Loop
``` javascript
for( let i= 0; i < 10; i++);
test= [1,2,3,4,4];
for( let i in test);
test.forEach( function(x){...} )	//	just for array
```

### Get value
``` javascript
console.log();
document.write( i + '<br/>' );

alert();

confirm();
cprompt();
```

### Declaration & Expression
``` javascript
var declaration= function( x, y) { }
function expression( x, y) { }
```

### Get Value by arguments[...]
``` javascript
function v( x, y)
{
	console.log( arguments[0] );
}
v( 2, 3, 4)
```
>  #==> 2

### function in function
``` javascript
function bac(a, b) {
	function bca(x) {
		return x*x;
	}
	return bca(a) + bca(b);
}
```

### Note
``` javascript
"use strict";
```

## Dom

### Finding HTML Element
``` javascript
document.getElementById('id')
document.getElementsByTagName('id')
document.getElementsByClassName('id')

querySelectorAll();
```
> var x = document.getElementsByTagName('table');
> var create = document.createElement('div');

### Edit HTML Element
``` javascript
element.innewHTML = new html content
element.setAtribute(attribute, value)
element.style.property = new style
```
> var x = document.getElementsByTagName('table');
> var create = document.createElement('div');
> create.innerHTML = '< p>new html< /p>';
> x[0].appendChild(create);

### Adding and Delete Elements
``` javascript
document.createElement(element)
document.appendChild(element)
```
> var y = x.querySeletorAll('p');
> var z = ""
> for (var i of y) {
>     z+= i.innerHTML;
> }
> document.getElementsById('demo').innerHTML = 'new html' + z

### Event
+	onclick:
+	ondbclick:
+	onchange:
+	onmouseover: khi chuột bắt đầu đi vào

``` javascript
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
```







[toc]
