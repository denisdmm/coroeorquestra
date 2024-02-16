import { Component, OnInit } from '@angular/core';
import { Autopascoa } from 'src/app/models/autopascoa';
import { Musica } from 'src/app/models/musica';
import { AutoPascoaService } from 'src/app/services/auto-pascoa.service';

@Component({
  selector: 'app-autopascoa',
  templateUrl: './autopascoa.component.html',
  styleUrls: ['./autopascoa.component.css']
})
export class AutopascoaComponent implements OnInit {

    autopascoa = {} as Autopascoa;
    autosPascoa:  Autopascoa[] = [];
    musica = {} as Musica;
    musicas! : Musica[] ;


  constructor(
    private autopascoaService : AutoPascoaService
  ) { }

  ngOnInit(): void {
    this.getAutos()
  }

    // Chama o serviço para obtém todos os autos
    getAutos() {
      this.autopascoaService.getAutos().subscribe((autos: Autopascoa[]) => {
        this.autosPascoa = autos
      });
    }

}
