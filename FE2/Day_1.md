# FE 2

# Typescript + ES6

### Knowledge round-up

#### Typescript

  - What is TypeScript and Why do we need it?
> TypeScript is "a tool" help you code javascript faster and easier. 

  - How can you get TypeScript and install it?
>  First, you have to have nvm and after that, you write "nvm install -g typescript" into terminal.

  - How do you compile TypeScript files?
> tsc file_name.ts

  - Which Object Oriented terms are supported by TypeScript? Write an example.
> support prototype-based inheritance, constructors, super calls, instance and static methods
``` typescript
class Vihicle{
	constructor()
	{
		console.log("Hi");
	}

	function run()
	{
		console.log("bich bich");
	}
};

class Motobike extends Vihicle
{
	var banh_xe= 2;
	constructor(name)
	{

	}

};
```

 
  - How do you implement inheritance in TypeScript? Write an example.
> use key "extend"
> same example above

#### **ES6**
##### Write an example for each of the following new features in ES6:  
  - `Block scope variable` 
```typescript
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}
```

  - `Template Literals` 
```typescript
var html = `<div>${lyrics}</div>`;
```

  - `Multi-line strings` 
```typescript
var lyrics = `Never gonna give you up
Never gonna let you down`;
```

  - `Arrow functions` 
```typescript
var inc = (x)=>x+1;
```

  - `For...of` 
``` typescript
var someArray = [9, 2, 5];
for (var item of someArray) {
    console.log(item); // 9,2,5
}
```

  - `Default parameters`
```typescript
function buildName(firstName: string, lastName?: string) {
    // ...
}
// and

function buildName(firstName: string, lastName = "Smith") {
    // ...
}
```






