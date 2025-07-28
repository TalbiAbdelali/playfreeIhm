import { Injectable } from '@angular/core';
import { Field } from '../models/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  fields: Field[] = [
    {
      id: 1,
      name: 'Stade Central',
      availability: true,
      location: 'Paris',
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', // Stade Paris
      pricePerHour: 50,
      description: 'Terrain synthétique, éclairage nocturne.'
    },
    {
      id: 2,
      name: 'Foot Arena',
      availability: false,
      location: 'Lyon',
      imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b', // Stade Lyon
      pricePerHour: 40,
      description: 'Terrain gazon naturel, vestiaires inclus.'
    },
    {
      id: 3,
      name: 'Urban Soccer',
      availability: true,
      location: 'Marseille',
      imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623066013b', // Stade Marseille
      pricePerHour: 45,
      description: 'Terrain 5 vs 5, parking gratuit.'
    },
    {
      id: 4,
      name: 'Playground 77',
      availability: true,
      location: 'Toulouse',
      imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', // Stade Toulouse
      pricePerHour: 35,
      description: 'Terrain extérieur, accès facile.'
    },
    {
      id: 5,
      name: 'Green Field',
      availability: false,
      location: 'Nice',
      imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', // Stade Nice
      pricePerHour: 55,
      description: 'Terrain premium, vue sur mer.'
    }
  ];

  constructor() {}

  getFields() {
    return this.fields;
  }
  
}
