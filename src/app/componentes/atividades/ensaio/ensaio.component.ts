import { Component, OnInit } from '@angular/core';
import { Ensaio } from 'src/app/models/ensaio.model';
import { Musica } from 'src/app/models/musica.model';
import { EnsaioService } from 'src/app/services/ensaio/ensaio.service';

@Component({
  selector: 'app-ensaio',
  templateUrl: './ensaio.component.html',
  styleUrls: ['./ensaio.component.css']
})
export class EnsaioComponent implements OnInit {

  ensaio = {} as Ensaio;
  ensaiosAhava: Ensaio[] = [];
  musica = {} as Musica;
  musicas!: Musica[];

  constructor(
    private ensaioService: EnsaioService
  ) { }

  ngOnInit(): void {
    this.getEnsaios()
  }

  // Chama o serviço para obtém todos os ensaios
  getEnsaios() {
    this.ensaioService.getEnsaios().subscribe((ensaios: Ensaio[]) => {
      this.ensaiosAhava = ensaios
    });
  }

}
