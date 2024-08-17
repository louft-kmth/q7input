import { Component, OnInit, Input } from '@angular/core';
import { skills } from '../models/skills';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] // Correction ici : styleUrls au lieu de styleUrl
})
export class SkillsComponent implements OnInit {
  @Input() skills: skills []=[];
  

  constructor() { }

  ngOnInit(): void {
    // Initialisation si nécessaire
  }
}
