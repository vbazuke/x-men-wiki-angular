import { getLocaleDateFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11,
        name: 'Professor X',
        color: 'Gold',
        powers: [
          'Telepathy',
          'Telekinesis'
        ]},
      { id: 12,
        name: 'Cyclops',
        color: 'FireBrick',
        powers: [
          'Physics/Optics'
        ] },
      { id: 13,
        name: 'Beast',
        color: 'DodgerBlue',
        powers: [
          'Strength',
          'Speed',
          'Stamina',
          'Agility',
          'Durability',
          'Self-Healing',
          'Acute Sensitivity',
          'Claws/Fangs'
        ] },
      { id: 14,
        name: 'Phoenix',
        color: 'DeepPink',
        powers: [
          'Telepathy',
          'Telekinesis',
          'Pyrokinesis',
        ] },
      { id: 15,
        name: 'Iceman',
        color: 'DeepSkyBlue',
        powers: [
          'Thermokinesis',
          'Cryokinesis',
          'Hydrokinesis',
        ] },
      { id: 16,
        name: 'Wolverine',
        color: 'yellow',
        powers: [
          'Self-Healing',
          'Acute Sensitivity',
          'Strength',
          'Stamina',
          'Agility',
          'Claws/Fangs'
        ] },
      { id: 17,
        name: 'Scarlet Witch',
        color:'Purple',
        powers: [
          'Hexes/Sorcery',
          'Telekinesis',
          'Teleporting',
          'Flying'
        ]
      },
      { id: 18,
        name: 'Storm',
        color: 'grey',
        powers: [
          'Hexes/Sorcery',
          'Teleporting',
          'Divinity',
          'Weatherkinesis',
          'Flying'
        ]
       },
      { id: 19,
        name: 'Magneto',
        color: 'DarkSlateBlue',
        powers: [
          'Matter Manipulation',
          'Magnetokinesis',
          'Flying',
          'Strength',
          'Stamina',
          'Durability',
          'Reflexes',
          'Speed',
        ]
       },
      { id: 20,
        name: 'Banshee',
        color: 'DarkGreen',
        powers: [
          'Acoustikinesis',
        ] }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
