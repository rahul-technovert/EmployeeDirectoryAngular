import { Component, Input, Output, EventEmitter } from '@angular/core';
import EmployeeCard from 'src/models/employee-card';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() cards: EmployeeCard[] = [];

  @Output() addCardEvent = new EventEmitter<EmployeeCard>();
  @Output() deleteCardEvent = new EventEmitter<number>();
  @Output() editCardEvent = new EventEmitter<EmployeeCard>();

  isFormVisible = false;
  selectedId = 0;

  addCard(card: EmployeeCard) {
    this.addCardEvent.emit(card);
  }

  deleteCard(id: number) {
    this.deleteCardEvent.emit(id);
  }

  editCard(card: EmployeeCard) {
    this.editCardEvent.emit(card);
  }

  onToggleForm(id: number) {
    this.isFormVisible = !this.isFormVisible; //toggling form
    this.selectedId = this.selectedId ? 0 : id; //resetting selected Id
  }
}
