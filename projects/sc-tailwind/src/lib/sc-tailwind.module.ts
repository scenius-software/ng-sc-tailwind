import { ScTailwindModalService } from './services/sc-tailwind-modal.service';
import { NgModule } from '@angular/core';
import { ScTailwindComponent } from './sc-tailwind.component';
import { ScTwDropdownButtonDirective } from './directives/menu-dropdown/sc-tw-dropdown-button.directive';
import { ScTwDropdownContentDirective } from './directives/menu-dropdown/sc-tw-dropdown-content.directive';
import { ScTwDropdownComponent } from './directives/menu-dropdown/sc-tw-dropdown.component';
import { CommonModule } from '@angular/common';
import { ScTwToggleDirective } from './toggle/sc-tw-toggle.directive';
import { ScTwToggleComponent } from './toggle/sc-tw-toggle.component';
import { ToggleHandleDirective } from './toggle/toggle-handle.directive';
import { ScTwModalBackdropComponent } from './modals/sc-tw-modal-backdrop/sc-tw-modal-backdrop.component';

@NgModule({
  declarations: [
    ScTailwindComponent,
    ScTwDropdownButtonDirective,
    ScTwDropdownContentDirective,
    ScTwDropdownComponent,
    ScTwToggleDirective,
    ScTwToggleComponent,
    ToggleHandleDirective,
    ScTwModalBackdropComponent,
  ],
  imports: [CommonModule],
  exports: [
    ScTwDropdownButtonDirective,
    ScTwDropdownContentDirective,
    ScTwDropdownComponent,
    ScTwToggleDirective,
    ScTwToggleComponent,
    ToggleHandleDirective,
    ScTwModalBackdropComponent,
  ],
})
export class ScTailwindModule {}
