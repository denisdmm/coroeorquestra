import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './componentes/login/login.component';
import { UsuariosModule } from './componentes/usuarios/usuarios.module';
import { InterceptorService } from './auth/interceptor.service';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
    bootstrap: [AppComponent],

    imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        FontAwesomeModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        UsuariosModule

      ],

        providers: [
        AuthService,
        AuthGuard,
        provideHttpClient(withInterceptorsFromDi()), // Novo padrão para configurar HTTP com interceptores
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    ]
  })
export class AppModule { }

