import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import swal from 'sweetalert2';

@Component({
  selector: 'app-article-det',
  templateUrl: './article-det.component.html',
  styleUrls: ['./article-det.component.css'],
  providers: [ArticleService]
})
export class ArticleDetComponent implements OnInit {
  public articleDet: Article;
  public idArt: string;
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._articleService.getArticle(id).subscribe(
          response => {
            if (response.article) {
              this.articleDet = response.article;
              this.idArt = this.articleDet._id;
            } else {
              this._router.navigate(['/homes']);
            }
          },
          error => {
            console.log(error);

          }
        )
      }
    );
  }

  delele() {
    swal.fire({
      title: "Estas seguro?",
      text: "El articulo se eliminara definitivamente",
      icon: "warning",
      showCancelButton: true,
    }).then((willDelete) => {
        if (willDelete) {
          this._articleService.delete(this.idArt).subscribe(
            respuesta => {
              if (respuesta.status == "success") {
                swal.fire({
                  text: "Eliminado! Se ha sido borrado!",
                  icon: "success",
                });
                this._router.navigate(['/home']);
              } else {}
            }, error => {
            }
          );
        } else {
          swal.fire("Tranquilo no se ha borrado nada!");
        }
      });
  }

}
