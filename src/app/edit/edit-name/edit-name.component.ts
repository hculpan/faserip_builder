import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../../model/character'

@Component({
  selector: 'app-edit-name',
  templateUrl: './edit-name.component.html',
  styleUrls: ['./edit-name.component.css']
})
export class EditNameComponent implements OnInit {
  @Input() Hero: Character

  constructor() { }

  ngOnInit(): void {
  }

}
