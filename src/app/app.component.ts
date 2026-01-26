import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackendStatusService } from './services/backend-status.service';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, LoaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ready$!: any;

  constructor(private backend: BackendStatusService) {}

  ngOnInit() {
    this.ready$ = this.backend.ready$;
    this.backend.checkBackend();
  }
}
