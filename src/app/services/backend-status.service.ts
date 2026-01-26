import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendStatusService {
    private readySubject = new BehaviorSubject<boolean>(false);
    ready$ = this.readySubject.asObservable();

    constructor(private http: HttpClient) {}

    checkBackend() {
      this.http.get(`${environment.apiBaseUrl}/healthy`).subscribe({
        next: () => this.readySubject.next(true),
        error: () => {
          setTimeout(() => this.checkBackend(), 3000);
        }
      });
    }

}
