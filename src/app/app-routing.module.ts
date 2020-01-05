import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdiotsIndexComponent } from './idiots/idiots-index/idiots-index.component';
import { IdiotsShowComponent } from './idiots/idiots-show/idiots-show.component';
import { IdiotsNewComponent } from './idiots/idiots-new/idiots-new.component';
import { IdiotsEditComponent } from './idiots/idiots-edit/idiots-edit.component';


const routes: Routes = [
  { path: 'idiots', component: IdiotsIndexComponent },
  { path: 'idiots/new', component: IdiotsNewComponent },
  { path: 'idiots/:id', component: IdiotsShowComponent },
  { path: 'idiots/:id/edit', component: IdiotsEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
