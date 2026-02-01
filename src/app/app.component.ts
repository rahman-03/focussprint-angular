import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    loader = inject(LoaderService);
}
