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
  active = false;
  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    localStorage.setItem('idiotLanguage', lang);
    this.translate.setDefaultLang(lang);
    this.active = false;
  }

}
