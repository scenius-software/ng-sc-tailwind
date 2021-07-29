import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsPageComponent } from "./pages/cards-page/cards-page.component";
import { TablesPageComponent } from "./pages/tables-page/tables-page.component";
import { DataDisplayPageComponent } from "./pages/data-display-page/data-display-page.component";
import { HeadingsPageComponent } from "./pages/headings-page/headings-page.component";
import { ScTailwindModule } from "../../../sc-tailwind/src/lib/sc-tailwind.module";

@NgModule({
  declarations: [
    AppComponent,
    CardsPageComponent,
    TablesPageComponent,
    DataDisplayPageComponent,
    HeadingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScTailwindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
