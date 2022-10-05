import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service';
import {Article} from '../../models/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [
    ArticleService
  ]
})
export class BlogComponent implements OnInit {

  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) { }

  ngOnInit() {
    this._articleService.getArticles(true).subscribe(
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
