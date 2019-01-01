import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          }]
        }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
