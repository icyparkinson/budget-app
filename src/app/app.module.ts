import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InputComponent } from './input/input.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEntryComponent } from './item-list/item-entry/item-entry.component';
import { EditEntryModalComponent } from './edit-entry-modal/edit-entry-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InputComponent,
    ItemListComponent,
    ItemEntryComponent,
    EditEntryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
