import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'payment-page',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './payment-page.component.html',
})
export class PaymentPageComponent implements OnChanges {

  formDelivery!: FormGroup;
  formPaymethod!: FormGroup;
  selectedOption: string = 'delivery';
  selectedMethod: string = 'yape';

  constructor(private fb: FormBuilder) {
    this.formDelivery = this.fb.group({
      entrega: ['']
    });
    this.formPaymethod = this.fb.group({
      metodo: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formDelivery']) {
      console.log('Valor del formulario cambiado:', this.formDelivery.value.entrega);
    }
  }

  captureValue(value: string): void {
    this.selectedOption = value;
    this.selectedMethod = value;
    // console.log('Opción seleccionada:', value);
  }

}
