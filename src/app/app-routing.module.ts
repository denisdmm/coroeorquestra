import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutopascoaComponent } from './componentes/atividades/autopascoa/autopascoa.component';

const routes: Routes = [
    { path: 'autospascoa', component: AutopascoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
