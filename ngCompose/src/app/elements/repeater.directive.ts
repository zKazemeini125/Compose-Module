import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]',
})
export class RepeaterDirective {
  @Input('appRepeater') set renderr(time: number) {
    for (let i = 0; i < time; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}
