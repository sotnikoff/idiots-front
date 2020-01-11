import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiotsIndexComponent } from './idiots/idiots-index/idiots-index.component';
import { IdiotsShowComponent } from './idiots/idiots-show/idiots-show.component';
import { IdiotsNewComponent } from './idiots/idiots-new/idiots-new.component';
import { IdiotsEditComponent } from './idiots/idiots-edit/idiots-edit.component';
import { IdiotsDeleteComponent } from './idiots/idiots-delete/idiots-delete.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sign_up', component: SignUpComponent },
  { path: 'idiots', component: IdiotsIndexComponent },
  { path: 'idiots/new', component: IdiotsNewComponent },
  { path: 'idiots/:id', component: IdiotsShowComponent },
  { path: 'idiots/:id/edit', component: IdiotsEditComponent },
  { path: 'idiots/:id/delete', component: IdiotsDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
