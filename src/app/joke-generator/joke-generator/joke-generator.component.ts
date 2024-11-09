import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-joke-generator',
  standalone: true,
  imports: [HttpClientModule],  // Import HttpClientModule here
  templateUrl: './joke-generator.component.html',
  styleUrls: ['./joke-generator.component.scss']
})
export class JokeGeneratorComponent implements OnInit{
  joke: string = '';
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(): void {

    const apiUrl = 'https://icanhazdadjoke.com/';

    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http.get<jokeResponse>(apiUrl, { headers }).pipe(
      map(response => response.joke),
      catchError(error => {
        console.error('Error fetching joke:', error);
        return of('Error fetching joke');
      })
    ).subscribe(joke => {
      this.joke = joke;
    });
  }
}

export interface jokeResponse{
  id: string;
  joke: string;
  status: number;
}