import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material-module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink
  ],
  templateUrl: './top-navbar.html',
  styleUrls: ['./top-navbar.scss']
})
export class TopNavbar {

}
