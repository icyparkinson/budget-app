import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetEntry } from 'src/shared/models/budget-entry.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() entry: BudgetEntry = new BudgetEntry("", "", 0)
  @Output() formSubmit: EventEmitter<BudgetEntry> = new EventEmitter<BudgetEntry>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value)
  }

}
