import { Component, OnInit, Input } from '@angular/core';
import { PowersService, PowersListType, PowerDefinition } from 'src/app/service/powers.service';
import { Character } from '../../../model/character'

@Component({
  selector: 'app-edit-powers',
  templateUrl: './edit-powers.component.html',
  styleUrls: ['./edit-powers.component.css']
})
export class EditPowersComponent implements OnInit {
  @Input() Hero: Character
  powerList: PowerDefinition[]
  selectedPower: PowerDefinition


  constructor(public powers: PowersService) { 
    var powersArray:any = powers.GetPowers()
    this.powerList = []
    for (let i = 0; i < powersArray.default.length; i++) {
      this.powerList.push(powersArray.default[i])
    }
    this.powerList.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.selectedPower = this.powerList[0]
  }

  ngOnInit(): void {
  }

  powerSelected(event: any) {
    this.selectedPower = this.powerList[event.srcElement.selectedOptions[0].value]
  }

  addPower() {
    this.Hero.AddNewPower(this.selectedPower)
  }
}
