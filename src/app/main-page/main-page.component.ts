import { Component, OnInit } from '@angular/core';
import { BudgetEntry } from 'src/shared/models/budget-entry.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  budgetEntries: BudgetEntry[] = new Array<BudgetEntry>()
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetEntry) {
    this.budgetEntries.push(newItem)
  }

}
