import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent }      from './admin/admin.component';
import { CheckinComponent }      from './checkin/checkin.component';
import { GuestFormComponent }      from './guest-form/guest-form.component';
import { SelectComponent }      from './select/select.component';

const appRoutes: Routes = [
    { path: '', component: SelectComponent },
    { path: 'checkin', component: CheckinComponent },
    { path: 'guest', component: GuestFormComponent },
    { path: 'admin', component: AdminComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
