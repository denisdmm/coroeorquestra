import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { AutopascoaComponent } from './componentes/atividades/autopascoa/autopascoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { EnsaioComponent } from './componentes/atividades/ensaio/ensaio.component';
import { CultoComponent } from './componentes/atividades/culto/culto.component';
import { CultoDetailComponent } from './componentes/atividades/culto/culto-detail/culto-detail.component';
import { EspeciaisComponent } from './componentes/atividades/especiais/especiais.component';
import { EspecialDetailComponent } from './componentes/atividades/especiais/especial-detail/especial-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './componentes/login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './componentes/login/login.component';
import { UsuariosModule } from './componentes/usuarios/usuarios.module';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    AutopascoaComponent,
    HomeComponent,
    EnsaioComponent,
    CultoComponent,
    CultoDetailComponent,
    EspeciaisComponent,
    EspecialDetailComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

