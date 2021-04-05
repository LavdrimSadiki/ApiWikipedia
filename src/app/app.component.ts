import {Component} from '@angular/core';
import {WikipediaService} from './wikipedia.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private  wiki: WikipediaService) {
  }

  formSubmitted(searchTerm: string) {
    this.wiki.search(searchTerm)
      .subscribe((response: any) => {
        this.pages = response.query.search;
      });

  }
}
