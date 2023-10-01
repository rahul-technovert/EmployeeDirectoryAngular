import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from 'src/services/shared/filter.service';

@Component({
  selector: 'advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.css'],
})
export class AdvancedFiltersComponent {
  @Output() toggleFormEvent = new EventEmitter();

  searchValue = '';
  filterBy = 'name';

  constructor(private filterHandleService: FilterService) {}

  handleSearch() {
    this.filterHandleService.setSearchValue(this.searchValue);
  }
  clearInput() {
    this.searchValue = '';
  }
  handleFilterBy() {
    console.log(this.filterBy);
  }

  emitToggleFormEvent(id: number) {
    this.toggleFormEvent.emit(id);
  }
}
