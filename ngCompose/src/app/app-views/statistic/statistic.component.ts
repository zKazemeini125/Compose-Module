import { Component, Input } from "@angular/core";

@Component({
  selector: "app-statistic",
  templateUrl: "./statistic.component.html",
  styleUrl: "./statistic.component.css",
})
export class StatisticComponent {
  @Input() data: any = [];
}
