import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() control!: FormControl | any; //bashlangic deyeri olmadiqda !-ile errorun qarshisini ala bilirik. !-difind assigment.
  @Input() label!: string;

  showErrors() {
    // const { dirty, touched, errors } = this.control;
    // return dirty && touched && errors;
    return this.control.dirty && this.control.touched && this.control.errors;
  }
}
