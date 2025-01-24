import { Component, OnInit } from '@angular/core';
import { Autopascoa } from 'src/app/models/autopascoa';
import { Culto } from 'src/app/models/culto.model';
import { Ensaio } from 'src/app/models/ensaio.model';
import { Especial } from 'src/app/models/especial.model';
import { Musica } from 'src/app/models/musica.model';
import { AutoPascoaService } from 'src/app/services/auto-pascoa.service';
import { CultosService } from 'src/app/services/cultos/cultos.service';
import { EnsaioService } from 'src/app/services/ensaio/ensaio.service';
import { EspeciaisService } from 'src/app/services/especiais/especiais.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  autopascoa = {} as Autopascoa;
  autosPascoa: Autopascoa[] = [];
  ensaio = {} as Ensaio;
  ensaiosAhava: Ensaio[] = [];
  culto = {} as Culto;
  cultosAhava: Culto[] = [];
  especial = {} as Especial;
  especiaisAhava: Especial[] = [];
  musica = {} as Musica;
  musicas!: Musica[];

  constructor(
    private autopascoaService: AutoPascoaService,
    private ensaioService: EnsaioService,
    private router: Router,
    private cultoService: CultosService,
    private especiaisService: EspeciaisService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      this.getCultos();
      this.getEspecias();
    }
  }

  isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  // Chama o serviço para obtém todos os cultos
  getCultos() {
    this.cultoService.getCultos().subscribe((cultos: Culto[]) => {
      this.cultosAhava = cultos
    });
  }

  getEspecias() {
    this.especiaisService.getEspeciais().subscribe((especiais: Especial[]) => {
      this.especiaisAhava = especiais
    });
  }

  isCultoAtivo(culto: Culto): boolean {
    return culto.ativo;
  }

  isEspecialAtivo(especial: Especial): boolean {
    return especial.ativo;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']); // redireciona para a página principal

  }
}
