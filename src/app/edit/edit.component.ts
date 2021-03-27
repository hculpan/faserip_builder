import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../model/character'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Hero: Character

  constructor() {
    this.Hero = new Character(300)
    this.Hero.Name = "Your Hero's Name Here"
  }

  ngOnInit(): void {
  }

}
