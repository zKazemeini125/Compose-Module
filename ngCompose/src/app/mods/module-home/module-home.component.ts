import { Component } from "@angular/core";

@Component({
  selector: "app-module-home",
  templateUrl: "./module-home.component.html",
  styleUrl: "./module-home.component.css",
})
export class ModuleHomeComponent {
  showModal: boolean = false;
  AccList = [
    { title: "question1", content: "this is answer." },
    { title: "question2", content: "this is answer." },
    { title: "question3", content: "this is answer." },
    { title: "question4", content: "this is answer." },
  ];
  OnChangeModal() {
    this.showModal = !this.showModal;
  }
}
