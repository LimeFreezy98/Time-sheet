import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopNavbar} from './components/top-navbar/top-navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavbar],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'hr-timesheet';
}
