import { Component, OnInit } from '@angular/core';
import { Autopascoa } from 'src/app/models/autopascoa';
import { AutoPascoaService } from 'src/app/services/auto-pascoa.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  autopascoa = {} as Autopascoa;
  autosPascoa:  Autopascoa[] = [];

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
