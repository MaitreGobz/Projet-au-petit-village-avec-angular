import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'products', component: ProductsPageComponent},
    {path:'products/:id', component: ProductDetailsComponent},
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path: '**', redirectTo: ''}
];
