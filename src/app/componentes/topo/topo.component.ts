import { Component, OnInit } from '@angular/core';
import { Autopascoa } from 'src/app/models/autopascoa';
import { Ensaio } from 'src/app/models/ensaio.model';
import { AutoPascoaService } from 'src/app/services/auto-pascoa.service';
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

  constructor(
    private autopascoaService: AutoPascoaService,
    private ensaioService: EnsaioService
  ) { }

  ngOnInit(): void {

  }


}
