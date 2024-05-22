import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './bindding/category.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RouttingComponent } from './routting/routting.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './routting/details/details.component';

const routes: Routes =[
  {path: 'bindings', component:CategoryComponent},
  {path: 'directives', component:DirectivesComponent},
  {path: 'routes', component:RouttingComponent},
  {path: 'mentor/:id', component:DetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    DirectivesComponent,
    RouttingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
