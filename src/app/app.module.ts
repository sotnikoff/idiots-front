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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageChangerComponent } from './language-changer/language-changer.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    IdiotsIndexComponent,
    IdiotsShowComponent,
    IdiotsFormComponent,
    IdiotsNewComponent,
    IdiotsEditComponent,
    PaginatorComponent,
    LanguageChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
