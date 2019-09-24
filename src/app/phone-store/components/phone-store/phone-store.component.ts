import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-phone-store',
  templateUrl: './phone-store.component.html',
  styleUrls: ['./phone-store.component.css']
})
export class PhoneStoreComponent implements OnInit {

  dataForm = [
    {
      param: {
        type: 'password',
        name: 'password',
        value: '3l6&4das#Da9',
        child_params: [
          [
             {
                param: {
                  type: 'text',
                  name: 'min-password-length',
                  value: 5
                }
              },
              {
                param: {
                  type: 'text',
                  name: 'min-number-complex',
                  value: 5
                }
              }
           ]
        ]
      }
    },
    {
      param: {
        type: 'text',
        name: 'maximum-failed-attempts',
        value: 5,
      }
    },
    {
      param: {
        type: 'text',
        name: 'autolock',
        value: 'Tak'
      }
    }
  ];

  phoneDataForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();

    console.log(this.phoneDataForm.get('child_params'));
  }

  private createForm() {
    this.phoneDataForm = this.fb.group({
      'password': '',
      'maximum-failed-attempts': '',
      'autolock': '',
      'child_params': this.fb.array([
        this.fb.group({
          'min-password-length': '',
          'min-number-complex': ''
        })
      ])
    });
  }

}
