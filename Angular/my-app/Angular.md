# Angular

## Knowledge round-up

### Component

#### Briefly explain Event Binding in Angular?
- One-way data binding like Properti Binding link between component child with their parent
- Link the component's methods directly to events of DOM.
- Ex: `(member) = "listen()"`

#### Briefly explain Data Binding in Angular?
- Two-ways Data Binding.
- Is the bridge between template and component.
- In Angular,  data  is synchronized automatically template and component by Data Binding.
- Ex: `[(ngModel)]="name"`

#### What are Event Emitters and how it works in Angular?
*Event Emitters:*
- Is a class that suport to control event in DOM
 
*Use:*
 - Create an object
		`@Output()`
		`result: EventEmitter<any> = new EventEmitter();` 
 - Access and use object that is created through emit() function:
		`result.emit("hello") `
 - In parent's template, to catch the event created by EventEmitter, we use `$event`
		`(member)="addMember($event)"`
		 
#### Explain the life cycle hooks of Angular application?
- A component has a lifecycle managed by Angular.
- Angular creates it, renders it, creates and renders its children, checks it when its data-bound properties change, and destroys it before removing it from the DOM.
-Specific :
	+ ngOnChanges : called when an input binding value changes
	+ ngOnInit : after the first ngOnChanges
	+ ngDoCheck : after every run of change detection
	+ ngAfterContentInit : after component content initialized
	+ ngAfterContentChecked : after every check of component content
	+ ngAfterViewInit : after component's view(s) are initialized
	+ ngAfterViewChecked : after every check of a component's view(s)
	+ ngOnDestroy : just before the component is destroyed

#### Explain the *ContentChild*, *ContentChildren* and write an example?
As the name suggests, @ContentChild and @ContentChildren queries will return directives existing inside the `<ng-content></ng-content>` element of your view, whereas @ViewChild and @ViewChildren only look at elements that are on your view template directly.



