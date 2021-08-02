import { NgModule } from '@angular/core';
import { ScTailwindComponent } from './sc-tailwind.component';
import { ScTwDropdownButtonDirective } from './directives/menu-dropdown/sc-tw-dropdown-button.directive';
import { ScTwDropdownContentDirective } from './directives/menu-dropdown/sc-tw-dropdown-content.directive';
import { ScTwDropdownComponent } from './directives/menu-dropdown/sc-tw-dropdown.component';
import { CommonModule } from "@angular/common";



@NgModule({
  declarations: [
    ScTailwindComponent,
    ScTwDropdownButtonDirective,
    ScTwDropdownContentDirective,
    ScTwDropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScTwDropdownButtonDirective,
    ScTwDropdownContentDirective,
    ScTwDropdownComponent
  ]
})
export class ScTailwindModule { }
