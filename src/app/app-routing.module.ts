import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/master/master.component';
import { HomeComponent } from './home/home.component';
import { BookingHistoryComponent } from './shared/booking-history/booking-history.component';
import { ManageProfileComponent } from './shared/manage-profile/manage-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'artist',
        loadChildren: () => import('./artist/artist.module').then(m => m.ArtistModule)
      },
      {
        path: 'studio',
        loadChildren: () => import('./studio/studio.module').then(m => m.StudioModule)
      },
    ]

  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'booking-history',
    component: BookingHistoryComponent
  },
  {
    path: 'manage-profile',
    component: ManageProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
