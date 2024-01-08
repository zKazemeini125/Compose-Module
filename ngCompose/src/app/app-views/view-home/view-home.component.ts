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
  items = [
    {
      image: "assets/images/horrer.jpg",
      title: "book",
      description: "this is horrer book",
    },
    {
      image: "assets/images/desk.jpg",
      title: "desk",
      description: "this is white desk",
    },
    {
      image: "assets/images/monitor.jpg",
      title: "book",
      description: "this is fullHD monitor",
    },
  ];
}
