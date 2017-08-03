import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[emptyData]'
})
export class EmptyData implements OnInit{
  constructor(private el: ElementRef, private rend: Renderer){}

  @Input() emptyData: string;
  ngOnInit(){
    if( !this.emptyData )
    {
      var emp = this.rend.createElement( this.el.nativeElement, 'td' );
      emp.innerHTML = "Empty";
      var parent = this.el.nativeElement.parentNode;
      parent.appendChild( emp );
      this.el.nativeElement.remove();
    }
    else
    {
      this.el.nativeElement.innerHTML = this.emptyData;
    }
  }
}
