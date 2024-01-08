import { Component } from "@angular/core";

@Component({
  selector: "app-view-home",
  templateUrl: "./view-home.component.html",
  styleUrl: "./view-home.component.css",
})
export class ViewHomeComponent {
  data = [
    { value: 22, label: "# of users" },
    { value: 80, label: "# likes" },
    { value: 10, label: "# coments" },
  ];
}
