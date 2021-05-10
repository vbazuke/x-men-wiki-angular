import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JumbotronComponent } from './jumbotron/jumbrotron.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: JumbotronComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
