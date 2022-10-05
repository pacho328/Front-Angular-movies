import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article'
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import swal from 'sweetalert2'

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [ArticleService]
})
export class AddArticleComponent implements OnInit {
  public article: Article;
  public status: string;
  public msg: string;

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
    this.msg = "Crear articulo";
  }

  ngOnInit() {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      respuesta => {
        if (respuesta.status == "success") {
          this.status = "Success";
          this.article = respuesta.article;
          swal.fire("Articulo creado!", "Articulo se ha creado con exito", "success");
          this._router.navigate(['/home']);
        } else {
          this.status = "Error";
        }
      }, error => {
        this.status = "Error";
      }
    );
  }

  imageUpload(data) {

    let image_data = JSON.parse(data.response);
    this.article.image = image_data.image
  }
}
