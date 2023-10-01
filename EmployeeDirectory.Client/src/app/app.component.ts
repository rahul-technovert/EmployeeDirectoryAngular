import { Component, OnInit } from '@angular/core';

import { FilterService } from 'src/services/shared/filter.service';
import { EmployeeService } from 'src/services/employee.service';
import { CategoryCount } from 'src/models/count';
import CategoryFilter from 'src/models/category-filter';
import EmployeeCard from 'src/models/employee-card';
import Utils from 'src/common/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  categoryCounts: CategoryCount;
  employeeCards: EmployeeCard[] = [];
  filteredCards: EmployeeCard[] = [];

  //category filters
  selectedAlphabets: string[] = [];
  searchBoxValue = '';
  selectedCategories: CategoryFilter;

  constructor(
    private employeeServices: EmployeeService,
    private filterService: FilterService,
    private utils: Utils
  ) {
    this.categoryCounts = new CategoryCount();
    this.selectedCategories = new CategoryFilter();
  }

  onAddCard(card: EmployeeCard) {
    this.employeeCards = this.filteredCards = [...this.employeeCards, card];
    this.updateCount();
  }

  onDeleteCard(id: number) {
    this.employeeCards = this.filteredCards = this.employeeCards.filter(
      (card) => card.id !== id
    );
    this.updateCount();
  }

  onEditCard(card: EmployeeCard) {
    this.employeeCards = this.filteredCards = this.replaceCard(card);
    this.updateCount();
  }

  filterCards() {
    return this.employeeCards.filter((cards) => {
      const matchesDepartment =
        !this.selectedCategories.department ||
        cards.department === this.selectedCategories.department;

      const matchesOffice =
        !this.selectedCategories.office ||
        cards.office === this.selectedCategories.office;

      const matchesJobTitle =
        !this.selectedCategories.jobTitle ||
        cards.jobTitle === this.selectedCategories.jobTitle;

      const matchesName =
        !this.searchBoxValue ||
        cards.firstName
          .toLocaleLowerCase()
          .startsWith(this.searchBoxValue.toLocaleLowerCase());

      const matchesAlphabet =
        this.selectedAlphabets.length === 0 ||
        this.selectedAlphabets.includes(cards.firstName[0]);

      return (
        matchesDepartment &&
        matchesOffice &&
        matchesJobTitle &&
        matchesName &&
        matchesAlphabet
      );
    });
  }

  ngOnInit(): void {
    this.setCardsAndCount();

    // subscribing alphabet filter
    this.filterService.alphabets$.subscribe((alphabets) => {
      this.selectedAlphabets = alphabets;
      this.filteredCards = this.filterCards();
    });

    // subscribing searchbox filter
    this.filterService.searchValue$.subscribe((value) => {
      this.searchBoxValue = value;
      this.filteredCards = this.filterCards();
    });

    // subscribing category filters
    this.filterService.categories$.subscribe((categoreis) => {
      this.selectedCategories = categoreis;
      this.filteredCards = this.filterCards();
    });
  }

  private replaceCard(card: EmployeeCard) {
    const updatedCards = [...this.employeeCards];
    const index = updatedCards.findIndex((c) => c.id === card.id);
    updatedCards[index] = card;
    return updatedCards;
  }

  private updateCount() {
    this.categoryCounts = this.utils.getCounts(this.employeeCards);
  }

  private setCardsAndCount() {
    this.employeeServices.getCards().subscribe((cards) => {
      this.employeeCards = this.filteredCards = cards;
      this.categoryCounts = this.utils.getCounts(this.employeeCards);
    });
  }
}
