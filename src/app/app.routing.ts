// importar los modulos del router de angular
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importar componentes a los cuales les quiero hacer una pagina exclusiva

import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormularioComponent} from './components/formulario/formulario.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
import {PaginaComponent} from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleDetComponent } from './components/article-det/article-det.component';
import { SearchComponent } from './components/search/search.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleUpdateComponent } from './components/article-update/article-update.component';

//ARRay de rutas

const appRoutes: Routes =[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/crear', component: AddArticleComponent},
    {path: 'blog/articulo/:id', component: ArticleDetComponent},
    {path: 'blog/editar/:id', component: ArticleUpdateComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: 'pagina/:nombre', component: PaginaComponent},
    {path: 'search/:searchstring', component: SearchComponent},
    {path: '**', component: ErrorComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);