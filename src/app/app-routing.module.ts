import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path:'quotes', component:QuotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
