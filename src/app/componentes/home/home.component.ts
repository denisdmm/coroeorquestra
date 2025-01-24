import { Component, OnInit } from '@angular/core';
import { Culto } from 'src/app/models/culto.model';
import { Especial } from 'src/app/models/especial.model';
import { Musica } from 'src/app/models/musica.model';
import { CultosService } from 'src/app/services/cultos/cultos.service';
import { EspeciaisService } from 'src/app/services/especiais/especiais.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isEventoAtivo: boolean = true;
  culto = {} as Culto;
  cultosAhava: Culto[] = [];
  especial = {} as Especial;
  especiaisAhava: Especial[] = [];
  musica = {} as Musica;
  musicas!: Musica[];
  cultos: any;
  constructor(
    private cultoService: CultosService,
    private especialService: EspeciaisService
  ) { }

  ngOnInit(): void {
    this.getCultos()
    this.getEspeciais()
  }

  // Chama o serviço para obtém todos os cultos
  getCultos() {
    this.cultoService.getCultos().subscribe((cultos: Culto[]) => {
      this.cultosAhava = cultos
    });
  }

  // Chama o serviço para obtém todos os cultos
  getEspeciais() {
    this.especialService.getEspeciais().subscribe((especiais: Especial[]) => {
      this.especiaisAhava = especiais
    });
  }


  isCultoAtivo(culto: Culto): boolean {
    return culto.ativo;
  }

  isEspecialAtivo(especial: Especial): boolean {
    return especial.ativo;
  }


}
