import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FieldService } from '../services/field.service';
import { Field } from '../models/field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fields',
  imports: [
    CommonModule
  ],
  templateUrl: './fields.component.html',
  styleUrl: './fields.component.scss'
})
export class FieldsComponent implements OnInit {

  fields!: Field[];
  cardHover: boolean = false;

  constructor(private fieldService: FieldService) {}

  ngOnInit(): void {
    this.fields = this.fieldService.getFields();
  }

  reserveField(field: any) {
    // Implémentation simple : redirige vers une page de réservation avec l'id du terrain
    // Remplacez 'reservation' par la route réelle si besoin
    window.location.href = `/reservation?fieldId=${field.id}`;
  }

  goToLandingPage() {
    window.location.href = '/';
  }
}
