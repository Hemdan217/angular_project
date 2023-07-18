import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userCredit',
})
export class UserCreditPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  transformCredit(value: string, ...args: unknown[]): string {
    return value
      .replace(/\d{4}/g, (match: any) => `${match} `)
      .replace(/\s{1,}/g, ' ');
  }
  transformExpire(value: string, ...args: unknown[]): string {
    return value
      .replace(/\d{2}/g, (match: any) => `${match}/`)
      .replace(/\/{1,}/g, '/');
  }
}
