import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivenFormComponent } from './register/driven-form/driven-form.component';
import { ReactiveFormComponent } from './register/reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'', redirectTo:'/driven-form', pathMatch:'full'},
  {path: 'driven-form', component: DrivenFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
