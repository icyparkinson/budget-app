import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetEntry } from 'src/shared/models/budget-entry.model';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  @Input() isIncome: boolean = true
  @Input() entry: BudgetEntry = new BudgetEntry("", "", 0)
  @Output() deleteEntry: EventEmitter<any> = new EventEmitter<any>()


  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(){
    this.deleteEntry.emit()
  }

}
