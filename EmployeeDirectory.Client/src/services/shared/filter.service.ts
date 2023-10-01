import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import CategoryFilter, { CategoryType } from 'src/models/category-filter';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private searchValueSubject = new BehaviorSubject<string>('');
  private alphabetsSubject = new BehaviorSubject<string[]>([]);
  private categoriesSubject = new BehaviorSubject<CategoryFilter>(
    new CategoryFilter()
  );

  searchValue$ = this.searchValueSubject.asObservable();
  alphabets$ = this.alphabetsSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

  setAlphabets(alphabets: string[]) {
    this.alphabetsSubject.next(alphabets);
  }

  setSearchValue(value: string) {
    this.searchValueSubject.next(value);
  }

  setCategories(type: CategoryType, name: string) {
    let categories = this.categoriesSubject.value;

    categories =
      categories[type] === name
        ? { ...categories, [type]: '' }
        : { ...categories, [type]: name };

    this.categoriesSubject.next(categories);
  }
}
