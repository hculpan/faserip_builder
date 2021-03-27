import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UtilsService } from 'src/app/service/utils.service';
import { Character } from '../../../model/character'

@Component({
  selector: 'app-edit-attribs',
  templateUrl: './edit-attribs.component.html',
  styleUrls: ['./edit-attribs.component.css']
})
export class EditAttribsComponent implements OnInit {
  @Input() Hero: Character

  constructor(public utils: UtilsService) { }

  ngOnInit(): void {
  }

  updateDescriptor(elementName: string, value: number) {
    this.Hero.BalancePoints()
    document.getElementById(elementName).innerHTML = this.utils.GetDescriptor(value)
  }

}
