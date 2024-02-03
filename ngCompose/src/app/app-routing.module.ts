import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "elemenets",
    loadChildren: () =>
      import("./elements/elements.module").then((m) => m.ElementsModule),
  },
  {
    path: "collections",
    loadChildren: () =>
      import("./collection/collection.module").then((m) => m.CollectionModule),
  },
  {
    path: "views",
    loadChildren: () =>
      import("./app-views/app-views.module").then((m) => m.AppViewsModule),
  },
  {
    path: "modules",
    loadChildren: () => import("./mods/mods.module").then((m) => m.ModsModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
  },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
