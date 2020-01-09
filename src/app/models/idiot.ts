const camelCase = require('camelcase');
const decamelCase = require('decamelize');
import * as moment from 'moment';

export class Idiot {
  id: string;
  name: string;
  deathDate: any;
  rStarId: number;
  pazientDiagnos: string;
  comment: string;
  aggressive: boolean;
  momJoke: string;

  get deathDateFormatted(): string {
    return this.deathDate ? moment(this.deathDate.seconds * 1000).format('DD.MM.YYYY') : null;
  }

  fromJson(data): Idiot {
    Object.keys(data).forEach(k => {
      this[camelCase(k)] = data[k];
    });
    return this;
  }

  toSnakeCaseObject(): object {
    const obj: any = {};
    Object.keys(this).forEach(k => {
      obj[decamelCase(k)] = this[k];
    });
    return obj;
  }
}
