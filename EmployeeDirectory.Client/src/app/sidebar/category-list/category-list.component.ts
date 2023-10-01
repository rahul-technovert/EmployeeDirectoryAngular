import { Component, Input } from '@angular/core';

import { FilterService } from 'src/services/shared/filter.service';
import { CategoryType } from 'src/models/category-filter';
import { Category } from 'src/models/count';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  @Input() heading: string = '';
  @Input() categoryType: string = '';
  @Input() categoryCounts: Category[] = [];

  activeCategory = '';

  constructor(private filterHandleService: FilterService) {}

  onCategoryClick(value: string) {
    this.toggleCategory(value);

    this.filterCards(value);
  }

  private filterCards(value: string) {
    this.filterHandleService.setCategories(
      this.categoryType as CategoryType,
      value
    );
  }

  private toggleCategory(value: string) {
    this.activeCategory = this.activeCategory === value ? '' : value;
  }
}
