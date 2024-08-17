import { Component , Input, OnInit} from '@angular/core';
import { ingredient } from '../ingredient.modele';
@Component({
  selector: 'app-magicoven',
  standalone: true,
  imports: [],
  templateUrl: './magicoven.component.html',
  styleUrl: './magicoven.component.css'
})
export class MagicovenComponent implements OnInit {
  //in app-magic-oven 
@Input()
startCooking: boolean = false;

@Input()
number: number = 0;

@Input()
flour: number = 0;

@Input()
salt: number = 0;

@Input()
sugar: number = 0;

@Input()
egg: number = 0;

constructor (){}

ngOnInit(): void {
  
}
}
