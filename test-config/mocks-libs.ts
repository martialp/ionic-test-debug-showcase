import { Observable } from "rxjs/Observable";

export class TranslateServiceMock {

       public get(key: any): any {
               return Observable.of(key);
       }

       public setDefaultLang(lang: string): void {

  }

  public getBrowserLang(): string {
         return 'en';
  }

  public use(lang: string): Observable<any> {
         return Observable.of(lang);
  }
}
