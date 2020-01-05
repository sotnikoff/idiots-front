const camelCase = require('camelcase');
const decamelCase = require('decamelize');
import * as moment from 'moment';

export class Idiot {
  id: number;
  name: string;
  deathDate: string;
  rStarId: number;
  pazientDiagnos: string;
  comment: string;
  aggressive: boolean;
  momJoke: string;
  createdAt: string;
  updatedAt: string;

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

  get createdAtFormatted(): string {
    return this.createdAt ? moment(this.createdAt).format('DD.MM.YYYY') : null;
  }
}
