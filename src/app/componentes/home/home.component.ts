import { Component, OnInit } from '@angular/core';
import { Culto } from 'src/app/models/culto.model';
import { Musica } from 'src/app/models/musica';
import { CultosService } from 'src/app/services/cultos/cultos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isEventoAtivo: boolean = true;
  culto = {} as Culto;
  cultosAhava: Culto[] = [];
  musica = {} as Musica;
  musicas!: Musica[];
cultos: any;
  constructor(
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
