import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditCompComponent } from './edit-comp/edit-comp.component';
import { DeleteCompComponent } from './delete-comp/delete-comp.component';
import { ListCompComponent } from './list-comp/list-comp.component';
import { ViewCompComponent } from './view-comp/view-comp.component';



@NgModule({
  declarations: [AddContactComponent, EditCompComponent, DeleteCompComponent, ListCompComponent, ViewCompComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
