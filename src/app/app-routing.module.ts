import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutopascoaComponent } from './componentes/atividades/autopascoa/autopascoa.component';
import { HomeComponent } from './componentes/home/home.component';
import { EnsaioComponent } from './componentes/atividades/ensaio/ensaio.component';
import { CultoComponent } from './componentes/atividades/culto/culto.component';
import { CultoDetailComponent } from './componentes/atividades/culto/culto-detail/culto-detail.component';
import { EspeciaisComponent } from './componentes/atividades/especiais/especiais.component';
import { EspecialDetailComponent } from './componentes/atividades/especiais/especial-detail/especial-detail.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'autospascoa', component: AutopascoaComponent},
    { path: 'ensaios', component: EnsaioComponent,
      canActivate: [AuthGuard]

    },
    { path: 'cultos', component: CultoComponent},
    { path: 'cultos/:id', component: CultoDetailComponent},
    { path: 'especiais', component: EspeciaisComponent},
    { path: 'especiais/:id', component: EspecialDetailComponent},
    { path: 'acesso', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
