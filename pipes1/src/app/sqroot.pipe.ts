import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sqroot'
})
export class SqRootPipe implements PipeTransform {
    transform(value: number) : number {
        return Math.sqrt(value);
    }
}