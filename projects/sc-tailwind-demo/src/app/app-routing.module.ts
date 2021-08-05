import { SidebarShowcaseComponent } from './pages/Sidebar/sidebar-showcase/sidebar-showcase.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuDropdownComponent } from './pages/Menu/menu-dropdown/menu-dropdown.component';
import { FormToggleComponent } from './pages/Form/form-toggle/form-toggle.component';
import { ModalToggleComponent } from 'projects/sc-tailwind-demo/src/app/pages/Modal/modal-toggle/modal-toggle/modal-toggle.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu-dropdown', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'menu-dropdown',
        component: MenuDropdownComponent,
      },
      {
        path: 'form-toggle',
        component: FormToggleComponent,
      },
      {
        path: 'modal-toggle',
        component: ModalToggleComponent,
      },
      {
        path: 'sidebar',
        component: SidebarShowcaseComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
