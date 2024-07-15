import { Component, OnInit } from '@angular/core';
import { Especial } from 'src/app/models/especial.model';
import { Musica } from 'src/app/models/musica';
import { EspeciaisService } from 'src/app/services/especiais/especiais.service';

@Component({
  selector: 'app-especiais',
  templateUrl: './especiais.component.html',
  styleUrls: ['./especiais.component.css']
})
export class EspeciaisComponent implements OnInit {
  especial = {} as Especial;
  especiaisAhava: Especial[] = [];
  musica = {} as Musica;
  musicas!: Musica[];

  constructor(
    private especiaisService: EspeciaisService
  ) { }

  ngOnInit(): void {
  }

      // Chama o serviço para obtém todos os cultos Especiais
      getEspecias() {
        this.especiaisService.getEspeciais().subscribe((especiais: Especial[]) => {
          this.especiaisAhava = especiais
        });
      }

}



