import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Culto } from 'src/app/models/culto.model';
import { Musica } from 'src/app/models/musica.model';
import { CultosService } from 'src/app/services/cultos/cultos.service';

@Component({
  selector: 'app-culto-detail',
  templateUrl: './culto-detail.component.html',
  styleUrls: ['./culto-detail.component.css']
})
export class CultoDetailComponent implements OnInit {
  culto = {} as Culto;
  cultosDetailAhava: Culto[] = [];
  musica = {} as Musica;
  musicas!: Musica[];

  constructor(
    private route : ActivatedRoute,
    private cultoService: CultosService

  ) { }

  ngOnInit(): void {
    let cultoId = this.route.snapshot.params['id'];
    this.getCultoId(cultoId)
  }

  getCultoId(cultoId: number) {
    this.cultoService.getCultosId(cultoId).subscribe((cultosDetail: Culto[]) => {
      this.cultosDetailAhava = cultosDetail
    });
  }

}
