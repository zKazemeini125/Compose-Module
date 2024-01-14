import { Component, Input } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrl: "./accordion.component.css",
})
export class AccordionComponent {
  @Input() items: any = [];
  openItemIndex: number = 0;
  OnChangeItem(index: number) {
    if (index != this.openItemIndex) {
      this.openItemIndex = index;
    } else {
      this.openItemIndex = -1;
    }
  }
}
