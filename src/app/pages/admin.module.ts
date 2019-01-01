import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule, TimepickerModule } from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxAdminLteModule } from 'ngx-admin-lte';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    HttpClientModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    ImageCropperModule,
    NgxSpinnerModule,
    NgxAdminLteModule
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminFooterComponent,
  ],
  providers: [],
  exports: [AdminComponent]
})
export class AdminModule { }
