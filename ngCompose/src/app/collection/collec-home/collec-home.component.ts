import { Component, Input } from "@angular/core";

@Component({
  selector: "app-collec-home",
  templateUrl: "./collec-home.component.html",
  styleUrl: "./collec-home.component.css",
})
export class CollecHomeComponent {
  datas = [
    { name: "nima", age: 22, job: "designer" },
    { name: "nader", age: 28, job: "frontend-developer" },
    { name: "sima", age: 20, job: "designer" },
  ];
  headers = [
    { key: "name", value: "Name", visible: true },
    { key: "age", value: "Age", visible: true },
    { key: "job", value: "Job", visible: true },
  ];
  constructor() {}
}
