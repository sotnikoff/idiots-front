import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdiotsIndexComponent } from './idiots/idiots-index/idiots-index.component';
import { IdiotsShowComponent } from './idiots/idiots-show/idiots-show.component';
import { IdiotsFormComponent } from './idiots/idiots-form/idiots-form.component';
import { IdiotsNewComponent } from './idiots/idiots-new/idiots-new.component';
import { IdiotsEditComponent } from './idiots/idiots-edit/idiots-edit.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    IdiotsIndexComponent,
    IdiotsShowComponent,
    IdiotsFormComponent,
    IdiotsNewComponent,
    IdiotsEditComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
