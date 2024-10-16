import { Component, OnInit } from '@angular/core';
import { Culto } from 'src/app/models/culto.model';
import { Musica } from 'src/app/models/musica.model';
import { CultosService } from 'src/app/services/cultos/cultos.service';

@Component({
  selector: 'app-culto',
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.css']
})
export class CultoComponent implements OnInit {

  culto = {} as Culto;
  cultosAhava: Culto[] = [];
  musica = {} as Musica;
  musicas!: Musica[];
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

}

