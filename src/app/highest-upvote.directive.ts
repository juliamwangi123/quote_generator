import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighestUpvote]'
})
export class HighestUpvoteDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor='#006D77';
  }

}
