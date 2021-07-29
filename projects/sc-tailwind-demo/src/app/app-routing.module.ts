import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { HeadingsPageComponent } from "./pages/headings-page/headings-page.component";
import { CardsPageComponent } from "./pages/cards-page/cards-page.component";
import { DataDisplayPageComponent } from "./pages/data-display-page/data-display-page.component";
import { TablesPageComponent } from "./pages/tables-page/tables-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/headings', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'headings',
        component: HeadingsPageComponent
      },
      {
        path: 'cards',
        component: CardsPageComponent
      },
      {
        path: 'data-display',
        component: DataDisplayPageComponent
      },
      {
        path: 'tables',
        component: TablesPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
