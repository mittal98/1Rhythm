import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { ManageStudioProfileComponent } from './manage-studio-profile/manage-studio-profile.component';
import { StudioBookingFormComponent } from './studio-booking-form/studio-booking-form.component';
import { StudioDescriptionComponent } from './studio-description/studio-description.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    StudioComponent,
    ManageStudioProfileComponent,
    StudioBookingFormComponent,
    StudioDescriptionComponent,
    StudioListComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
    HttpClientModule
  ]
})
export class StudioModule { }
