import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-changer',
  templateUrl: './language-changer.component.html',
  styleUrls: ['./language-changer.component.sass']
})
export class LanguageChangerComponent implements OnInit {

  languages = [
    { code: 'en', title: 'English' },
    { code: 'ru', title: 'Русский' },
    { code: 'de', title: 'Deutsch' },
    { code: 'gd', title: 'Gandeutsch' }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

}
