import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
    counter = 5;
    private intervalId?: number;
    private timeoutId?: number;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.intervalId = window.setInterval(() => {
        if (this.counter > 0) {
            this.counter -= 1;
        } else {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = undefined;
            }
        }
        }, 1000);

        this.timeoutId = window.setTimeout(() => {
        this.router.navigate(['/']);
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
        }, 5000);
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
    }
}

