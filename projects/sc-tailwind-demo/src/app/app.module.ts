import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScTailwindModule } from "../../../sc-tailwind/src/lib/sc-tailwind.module";
import { MenuDropdownComponent } from './pages/Menu/menu-dropdown/menu-dropdown.component';
import { FormToggleComponent } from './pages/Form/form-toggle/form-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDropdownComponent,
    FormToggleComponent,
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
