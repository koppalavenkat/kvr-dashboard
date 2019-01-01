import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './accounts/signin/signin.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SigninComponent}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
