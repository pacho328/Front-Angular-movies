import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert2';


@Component({
  selector: 'app-article-update',
  templateUrl: '../add-article/add-article.component.html',
  styleUrls: ['./article-update.component.css'],
  providers: [ArticleService]
})
export class ArticleUpdateComponent implements OnInit {
  public article: Article;
  public status: string;
  public isedit: boolean;
  public msg: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "5",
    uploadAPI: {
      url: Global.url + "/uploadimage",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'sube una foto...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('', '', '', null, null);
    this.isedit = true;
    this.msg = "Editar articulo";
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(
      params => {
        let id = params['id'];
        this._articleService.getArticle(id).subscribe(
          response =>{
            if(response.article){
              this.article = response.article;
            }else{
              this._router.navigate(['/homes']);
            }
          },
          error => {
            console.log(error);

          }
        )
      });
  }
  onSubmit() {
    this._articleService.update(this.article._id,this.article).subscribe(
      respuesta => {
        if (respuesta.status == "success") {
          this.status = "Success";
          this.article = respuesta.article;
          swal.fire("Articulo Editado!", "Articulo se ha editado con exito", "success");
          this._router.navigate(['/blog/articulo/'+this.article._id]);
        } else {
          this.status = "Error";
        }
      }, error => {
        swal.fire("Error!", "Articulo NO se ha editado con exito", "error");

        this.status = "Error";
      }

    );
  }

  imageUpload(data){

    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image
  }
}
