import { NgModule } from '@angular/core';
import { ScTailwindComponent } from './sc-tailwind.component';
import { ScTwDropdown } from './directives/menu-dropdown/sc-tw-dropdown.directive';
import { ScTwDropdownButtonDirective } from './directives/menu-dropdown/sc-tw-dropdown-button.directive';
import { ScTwDropdownContentDirective } from './directives/menu-dropdown/sc-tw-dropdown-content.directive';



@NgModule({
  declarations: [
    ScTailwindComponent,
    ScTwDropdown,
    ScTwDropdownButtonDirective,
    ScTwDropdownContentDirective
  ],
  imports: [
  ],
  exports: [
    ScTwDropdown,
    ScTwDropdownButtonDirective,
    ScTwDropdownContentDirective
  ]
})
export class ScTailwindModule { }
