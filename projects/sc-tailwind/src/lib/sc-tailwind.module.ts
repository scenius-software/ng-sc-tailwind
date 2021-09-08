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
import { ScTwNavItemDirective } from './directives/sidebar-nav-item-expandable/sc-tw-nav-item.directive';
import { ScTwListboxComponent } from './listbox/listbox/sc-tw-listbox.component';
import { ScTwListboxButtonComponent } from './listbox/sc-tw-listbox-button/sc-tw-listbox-button.component';
import { ScTwListboxOptionComponent } from './listbox/sc-tw-listbox-option/sc-tw-listbox-option.component';
import { ScTwListboxOptionsComponent } from './listbox/sc-tw-listbox-options/sc-tw-listbox-options.component';
import { ScTwToastContainerComponent } from './toasts/sc-tw-toast-container/sc-tw-toast-container.component';
import { ScTwDefaultToastComponent } from './toasts/sc-tw-default-toast/sc-tw-default-toast.component';

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
    ScTwNavItemDirective,
    ScTwListboxComponent,
    ScTwListboxButtonComponent,
    ScTwListboxOptionComponent,
    ScTwListboxOptionsComponent,
    ScTwToastContainerComponent,
    ScTwDefaultToastComponent,
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
    ScTwListboxComponent,
    ScTwListboxButtonComponent,
    ScTwListboxOptionComponent,
    ScTwListboxOptionsComponent,
    ScTwToastContainerComponent,
    ScTwDefaultToastComponent
  ],
})
export class ScTailwindModule { }
