import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './sidebar/category-list/category-list.component';
import { ContentComponent } from './content/content.component';
import { AlphabetsComponent } from './content/alphabets/alphabets.component';
import { AdvancedFiltersComponent } from './content/advanced-filters/advanced-filters.component';
import { EmployeesComponent } from './content/employees/employees.component';
import { EmployeeCardComponent } from './content/employees/employee-card/employee-card.component';
import { ProfileComponent } from './content/employees/profile/profile.component';
import { EmployeeFormComponent } from './content/form/employee-form.component';

import Utils from 'src/common/utils';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CategoryListComponent,
    ContentComponent,
    AlphabetsComponent,
    AdvancedFiltersComponent,
    EmployeesComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [Utils],
  bootstrap: [AppComponent],
})
export class AppModule {}
