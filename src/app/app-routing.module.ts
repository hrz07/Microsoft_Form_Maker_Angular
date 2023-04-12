import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOutPutComponent } from './all-out-put/all-out-put.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '/', component: AppComponent},
 { path: '/view', component: AllOutPutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
