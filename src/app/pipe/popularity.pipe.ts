import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popularity'
})
export class PopularityPipe implements PipeTransform {

  transform(popularity: number): string {
    if (popularity < 1) return 'Freezing';
    if (popularity >= 1 && popularity <= 2) return 'Normal';
    if (popularity >= 3 && popularity <= 4) return 'Popular';
    return 'Sizzling hot!';
  }

}
