import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { AutopascoaComponent } from './componentes/atividades/autopascoa/autopascoa.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { EnsaioComponent } from './componentes/atividades/ensaio/ensaio.component';
import { CultoComponent } from './componentes/atividades/culto/culto.component';
import { CultoDetailComponent } from './componentes/atividades/culto/culto-detail/culto-detail.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
