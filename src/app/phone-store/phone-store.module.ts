import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneStoreComponent } from './components/phone-store/phone-store.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PhoneInputComponent } from './components/phone-input/phone-input.component';

@NgModule({
  declarations: [PhoneStoreComponent, PhoneInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PhoneStoreComponent
  ]
})
export class PhoneStoreModule { }
