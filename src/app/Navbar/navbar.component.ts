import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.template.html',
  styleUrls: ['navbar.styles.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})

export class NavbarComponent {}
