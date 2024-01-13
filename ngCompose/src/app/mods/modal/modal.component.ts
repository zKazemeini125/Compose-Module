import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrl: "./modal.component.css",
})
export class ModalComponent {
  @Output() OnClose = new EventEmitter();
  OnCloseModal() {
    this.OnClose.emit();
  }
}
