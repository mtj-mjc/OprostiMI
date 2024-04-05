import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ConfessionsService {
  constructor(
    protected readonly http: HttpClient,
    protected readonly translateService: TranslateService
  ) {}

  async loadConfessions(): Promise<any[]> {
    const pathToConfessionFileIndex = `assets/confessions/${this.translateService.currentLang}/confessions.json`;
    const confessionFileIndex = await firstValueFrom(
      this.http.get<any>(pathToConfessionFileIndex)
    );

    console.log(confessionFileIndex);
    const listOfConfessions = await Promise.all(
      confessionFileIndex.confessions.map(
        async (confession: { fileName: string }) => {
          const pathToConfession = `assets/confessions/${this.translateService.currentLang}/${confession.fileName}`;
          return await firstValueFrom(this.http.get<any>(pathToConfession));
        }
      )
    );
    console.log(listOfConfessions);
    return listOfConfessions;
  }
}
