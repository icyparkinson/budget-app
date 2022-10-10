import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetEntry } from 'src/shared/models/budget-entry.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() budgetEntries: BudgetEntry[] = []
  @Output() removeFromArray:EventEmitter<BudgetEntry> = new EventEmitter<BudgetEntry>()

  constructor() { }

  ngOnInit(): void {
  }

  delete(item:BudgetEntry){
    this.removeFromArray.emit(item)
  }

}
