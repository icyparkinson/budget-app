import { Component, Input, OnInit } from '@angular/core';
import { BudgetEntry } from 'src/shared/models/budget-entry.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() budgetEntries: BudgetEntry[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
