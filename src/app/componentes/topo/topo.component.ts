import { Component, OnInit } from '@angular/core';
import { Autopascoa } from 'src/app/models/autopascoa';
import { Culto } from 'src/app/models/culto.model';
import { Ensaio } from 'src/app/models/ensaio.model';
import { Musica } from 'src/app/models/musica';
import { AutoPascoaService } from 'src/app/services/auto-pascoa.service';
import { CultosService } from 'src/app/services/cultos/cultos.service';
import { EnsaioService } from 'src/app/services/ensaio/ensaio.service';

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
  musica = {} as Musica;
  musicas!: Musica[];
  constructor(
    private autopascoaService: AutoPascoaService,
    private ensaioService: EnsaioService,
    private cultoService: CultosService
  ) { }

  ngOnInit(): void {
    this.getCultos()
  }

      // Chama o serviço para obtém todos os cultos
      getCultos() {
        this.cultoService.getCultos().subscribe((cultos: Culto[]) => {
          this.cultosAhava = cultos
        });
      }


      isCultoAtivo(culto: Culto): boolean {
        return culto.ativo;
      }


}
