import { Component, OnInit } from '@angular/core';
import { BudgetEntry } from 'src/shared/models/budget-entry.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  totalNum: number = 0

  budgetEntries: BudgetEntry[] = new Array<BudgetEntry>()
  constructor() { }

  ngOnInit(): void {
  }

  addEntry(newItem: BudgetEntry) {
    this.budgetEntries.push(newItem)
    this.totalNum += newItem.amount
  }

  deleteEntry(item: BudgetEntry){
    let index = this.budgetEntries.indexOf(item)
    this.budgetEntries.splice(index, 1)
    this.totalNum -= item.amount
  }

}
