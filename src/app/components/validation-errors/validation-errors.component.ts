import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
})
export class ValidationErrorsComponent {
  @Input() errors: ValidationErrors | null | undefined;
}
