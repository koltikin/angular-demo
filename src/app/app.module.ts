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
import { ParentComponent } from './xcom/parent/parent.component';
import { ChildComponent } from './xcom/child/child.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

const routes: Routes =[
  {path: 'bindings', component:CategoryComponent},
  {path: 'directives', component:DirectivesComponent},
  {path: 'routes', component:RouttingComponent},
  {path: 'mentor/:id', component:DetailsComponent},
  {path: 'xcom', component:ParentComponent},
  {path: 'service', component:ServiceDemoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    DirectivesComponent,
    RouttingComponent,
    DetailsComponent,
    ParentComponent,
    ChildComponent,
    ServiceDemoComponent
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
