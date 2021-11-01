import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-form-listbox',
  templateUrl: './form-listbox.component.html',
  styleUrls: ['./form-listbox.component.scss']
})
export class FormListboxComponent implements OnInit {
  form = new FormGroup({
    select: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
