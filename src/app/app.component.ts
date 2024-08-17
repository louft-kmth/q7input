import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MagicovenComponent } from './magicoven/magicoven.component';
import { DeveloperComponent } from './developer/developer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, KitchenComponent, DeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'q7';
}
