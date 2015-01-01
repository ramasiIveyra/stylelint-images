import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DatatablePageComponent} from "./datatable/datatable.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'datatable', component: DatatablePageComponent, canActivate: [AuthGuard] },
  { path: 'fileupload', component: FileUploadComponent, canActivate: [AuthGuard] },
  {path : "", redirectTo : "signup",  pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
