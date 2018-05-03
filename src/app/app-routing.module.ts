import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';

const routes: Routes = [
  {path: '', component:IndexComponent},
  {path: 'calculadora', component:CalculadoraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [IndexComponent, CalculadoraComponent]
