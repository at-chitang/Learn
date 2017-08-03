import { Directive, OnInit, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[emptyAvatar]'
})
export class EmptyAvatar implements OnInit{
  constructor(private el: ElementRef, private rend: Renderer){}

  @Input() emptyAvatar: string;
  ngOnInit(){
    if( !this.emptyAvatar )
    {
      this.el.nativeElement.src= 'http://tophinhanhdep.net/wp-content/uploads/2016/01/anh-naruto-chibi-5.jpg';
    }
    else
    {
      this.el.nativeElement.src= this.emptyAvatar;
    }
    console.log(this.emptyAvatar);
  }
}

