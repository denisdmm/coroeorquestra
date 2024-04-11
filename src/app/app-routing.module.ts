import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutopascoaComponent } from './componentes/atividades/autopascoa/autopascoa.component';
import { HomeComponent } from './componentes/home/home.component';
import { EnsaioComponent } from './componentes/atividades/ensaio/ensaio.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'autospascoa', component: AutopascoaComponent},
    { path: 'ensaios', component: EnsaioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
