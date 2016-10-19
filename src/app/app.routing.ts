import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent }      from './admin/admin.component';
import { CheckinComponent }      from './checkin/checkin.component';
import { GuestFormComponent }      from './guest-form/guest-form.component';
import { SelectComponent }      from './select/select.component';

const appRoutes: Routes = [
  { path: '', component: SelectComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: 'guest', component: GuestFormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
