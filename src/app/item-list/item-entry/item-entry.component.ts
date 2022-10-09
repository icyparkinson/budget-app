import { Component, Input, OnInit } from '@angular/core';
import { BudgetEntry } from 'src/shared/models/budget-entry.model';

@Component({
  selector: 'app-item-entry',
  templateUrl: './item-entry.component.html',
  styleUrls: ['./item-entry.component.css']
})
export class ItemEntryComponent implements OnInit {

  @Input() isIncome: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
