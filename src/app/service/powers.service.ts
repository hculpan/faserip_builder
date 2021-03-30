import { Injectable } from '@angular/core';

import * as powers_data from '../../assets/data/powers.json'

export class PowerDefinition {
  name: string
  basecost: number
  multiplier: number
  description: string
}

export type PowersListType = PowerDefinition[]

@Injectable({
  providedIn: 'root'
})
export class PowersService {

  constructor() { }

  GetPowers(): PowerDefinition[] {
    return powers_data
  }
}
