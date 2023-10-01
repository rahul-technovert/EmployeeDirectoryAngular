import { Component, Input } from '@angular/core';
import { CategoryCount } from 'src/models/count';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() categoryCounts: CategoryCount;

  constructor() {
    this.categoryCounts = new CategoryCount();
  }
}
