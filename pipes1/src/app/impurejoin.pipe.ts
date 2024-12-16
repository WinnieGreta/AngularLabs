import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'impurejoin',
    pure: false
})
export class ImpureJoinPipe implements PipeTransform {
    transform(array: any, start?: any, end?: any) {
        return array.join(', ');
    }
}