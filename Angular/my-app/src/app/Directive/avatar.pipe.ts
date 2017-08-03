import { Pipe, PipeTransform } from '@angular/core'
@Pipe({  name: 'image'})export class DefaultImageAvatarDirective implements PipeTransform {
  transform(src: string){
    if(!src){
      var defaultImg = 'http://tophinhanhdep.net/wp-content/uploads/2016/01/anh-naruto-chibi-5.jpg';
      return defaultImg;
    }    
    else{
      return src;
    }
  }
}