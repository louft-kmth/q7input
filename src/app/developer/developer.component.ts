import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/developper';
import { skills } from '../models/skills';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports : [SkillsComponent],
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  developer: Developer;
  skills: skills[]; // Ajoutez cette ligne pour définir la propriété skills

  constructor() {
    this.developer = new Developer('', '', 0, '', '', []);
    this.skills = []; // Initialisez la propriété skills
  }

  ngOnInit() {
    this.developer = new Developer(
      'Doe',
      'John',
      30,
      'Male',
      'John is a software developer with 10 years of experience.',
      [
        { name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.png', site: 'https://angular.io' },
        { name: 'TypeScript', logo: 'https://www.typescriptlang.org/assets/images/icons/favicon-32x32.png', site: 'https://www.typescriptlang.org' }
      ]
    );
    this.skills = this.developer.skills; // Assignez les compétences du développeur à la propriété skills
  }
}
