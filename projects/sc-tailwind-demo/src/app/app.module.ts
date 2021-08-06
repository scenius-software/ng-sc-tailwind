import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScTailwindModule } from '../../../sc-tailwind/src/lib/sc-tailwind.module';
import { MenuDropdownComponent } from './pages/Menu/menu-dropdown/menu-dropdown.component';
import { FormToggleComponent } from './pages/Form/form-toggle/form-toggle.component';
import { ModalToggleComponent } from './pages/Modal/modal-toggle/modal-toggle/modal-toggle.component';
import { CommonModule } from '@angular/common';
import { MyModalComponent } from 'projects/sc-tailwind-demo/src/app/pages/Modal/modal-toggle/modal-toggle/test-modal.component';
import { SidebarShowcaseComponent } from './pages/Sidebar/sidebar-showcase/sidebar-showcase.component';
import { FormListboxComponent } from './pages/Form/form-listbox/form-listbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDropdownComponent,
    FormToggleComponent,
    ModalToggleComponent,
    MyModalComponent,
    SidebarShowcaseComponent,
    FormListboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ScTailwindModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
