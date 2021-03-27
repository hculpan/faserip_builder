import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/model/character';

@Component({
  selector: 'app-edit-derived-stats',
  templateUrl: './edit-derived-stats.component.html',
  styleUrls: ['./edit-derived-stats.component.css']
})
export class EditDerivedStatsComponent implements OnInit {
  @Input() Hero: Character
  
  constructor() { }

  ngOnInit(): void {
  }

}
