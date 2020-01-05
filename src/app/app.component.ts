import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  constructor(translate: TranslateService) {
    const language = localStorage.getItem('idiotLanguage');
    if (language) {
      translate.setDefaultLang(language);
    } else {
      translate.setDefaultLang('ru');
    }
  }
}
