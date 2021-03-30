import { Injectable } from '@angular/core';

import * as ranks_data from '../../assets/data/ranks.json'

export class RankDefinition {
  name: string
  min: number
  max: number
  standard: number
}

@Injectable({
  providedIn: 'root'
})
export class RanksService {

  constructor() { }

  GetRanks(): RankDefinition[] {
    return ranks_data
  }
}
