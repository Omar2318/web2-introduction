import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arreglos',
  imports: [],
  templateUrl: './arreglos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Arreglos {

  numbers: number[] = [1, 2, 3, 4, 5, 6];

  mappedNumbers: number[] = [];
  filteredNumbers: number[] = [];
  slicedNumbers: number[] = [];
  foundNumber: number | undefined;
  includesFour: boolean | null = null;

  addNumber() {
    this.numbers = [...this.numbers, 100];
  }

  removeLast() {
    this.numbers = this.numbers.slice(0, -1);
  }

  removeFirst() {
    this.numbers = this.numbers.slice(1);
  }

  addFirst() {
    this.numbers = [0, ...this.numbers];
  }

  doubleNumbers() {
    this.mappedNumbers = this.numbers.map(n => n * 2);
  }

  filterGreaterThanFive() {
    this.filteredNumbers = this.numbers.filter(n => n > 5);
  }

  findNumber() {
    this.foundNumber = this.numbers.find(n => n === 3);
  }

  sliceNumbers() {
    this.slicedNumbers = this.numbers.slice(1, 4);
  }

  reverseNumbers() {
    this.numbers = [...this.numbers].reverse();
  }

  checkIncludes() {
    this.includesFour = this.numbers.includes(4);
  }
}
