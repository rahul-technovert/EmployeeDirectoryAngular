import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from 'src/services/shared/filter.service';

@Component({
  selector: 'alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.css'],
})
export class AlphabetsComponent {
  activeAlphabets: string[] = [];

  constructor(private filterHandleService: FilterService) {}

  generateAlpbhabets() {
    const alpbhabets: string[] = [];
    const asciiValueOfA = 65;
    const asciiValueOfZ = 90;
    for (let i = asciiValueOfA; i <= asciiValueOfZ; i++)
      alpbhabets.push(String.fromCharCode(i));
    return alpbhabets;
  }

  handleClick(alphabet: string) {
    this.toggle(alphabet);
    this.filterHandleService.setAlphabets(this.activeAlphabets);
  }

  toggle(alphabet: string) {
    this.activeAlphabets = this.activeAlphabets.includes(alphabet)
      ? this.activeAlphabets.filter((a) => a !== alphabet)
      : [alphabet, ...this.activeAlphabets];
  }
}
