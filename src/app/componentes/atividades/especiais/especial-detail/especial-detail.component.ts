import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Especial } from 'src/app/models/especial.model';
import { Musica } from 'src/app/models/musica.model';
import { EspeciaisService } from 'src/app/services/especiais/especiais.service';

@Component({
  selector: 'app-especial-detail',
  templateUrl: './especial-detail.component.html',
  styleUrls: ['./especial-detail.component.css']
})
export class EspecialDetailComponent implements OnInit {
  especial = {} as Especial;
  especiaisDetailAhava: Especial[] = [];
  musica = {} as Musica;
  musicas!: Musica[];
  constructor(
    private route : ActivatedRoute,
    private especiaisService: EspeciaisService
  ) { }

  ngOnInit(): void {
    let especialId = this.route.snapshot.params['id'];
    this.getEspecialId(especialId)
  }

  getEspecialId(especialId: number) {
    this.especiaisService.getEspecialsId(especialId).subscribe((especiaisDetail: Especial[]) => {
      this.especiaisDetailAhava = especiaisDetail
    });
  }
}
