import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  quotes = [
    {
      text: 'Small steps every day lead to big results.',
      author: 'Unknown'
    },
    {
      text: 'Your future is created by what you do today.',
      author: 'Robert Kiyosaki'
    },
    {
      text: 'Discipline is choosing between what you want now and what you want most.',
      author: 'Abraham Lincoln'
    },
    {
      text: 'Success is the sum of small efforts repeated daily.',
      author: 'Robert Collier'
    }
  ];

  currentQuoteIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentQuoteIndex =
        (this.currentQuoteIndex + 1) % this.quotes.length;
    }, 4000);
  }
}

