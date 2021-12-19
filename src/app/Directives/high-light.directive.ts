import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighlight') appHighlight = 'blue';

  constructor(private el: ElementRef) {}

  ngOnInit():void {
    console.log('ngOnInit HighLightDirective', this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;

  }
}
