import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { GrillaComponent } from './components/grilla/grilla.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: GrillaComponent },
    { path: '', component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{

}
