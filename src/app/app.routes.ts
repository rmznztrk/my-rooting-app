import { Route, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';
import { indexRoute } from './components/index/index.route';
import { c1Route } from './components/c1/c1.route';
import { c2Route } from './components/c2/c2.route';
import { c3Route } from './components/c3/c3.route';
import { NotFoundComponent } from './components/not-found/not-found.component';


const notFound: Route = {  
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found 404!'
}

export const routes: Routes = [
    indexRoute, c1Route, c2Route, c3Route, notFound
];
