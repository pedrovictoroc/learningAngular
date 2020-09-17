import { Component, OnInit} from '@angular/core';

import { CursosService } from './services/cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})

export class CursosComponent implements OnInit {
  nomePortal:string;
  cursos:string[];

  constructor(private cursoService: CursosService){
    this.nomePortal = "https://loiane.training/"

    this.cursos = this.cursoService.getCursos()
  }

  ngOnInit() {
  }
}
