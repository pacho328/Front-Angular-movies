import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../models/article';
import {Global} from './global';

@Injectable()
export class ArticleService {
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }
    pruebas(){
        return "serivicio articulos";
    }
    getArticles(last:any = null):Observable<any>{
        var articles = "/getArticles";
        if(last != null){
            articles = "/getArticles/true";
        }
        return this._http.get(this.url+articles);
    }
    getArticle(articleId):Observable<any>{
        return this._http.get(this.url+'/getArticle/'+articleId);
    }
    search(article):Observable<any>{
        return this._http.get(this.url+'/search/'+article);
    }
    create(article):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'/save',params,{headers: headers});
    }  
    update(id,article):Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'/getArticle/'+id,params,{headers: headers});
    }
    delete(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'/article/'+id,{headers: headers});
    }
}