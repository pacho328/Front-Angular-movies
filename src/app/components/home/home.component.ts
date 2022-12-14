import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit {
  public articles: Article[];
  constructor(
    private _articleService: ArticleService,
  ) { }

  ngOnInit() {
    this._articleService.getArticles().subscribe(
      response => {
        if(response.articles){
          this.articles = response.articles;
        }     
      },
      error => {
        console.log();        
      }
    );
  }

}
