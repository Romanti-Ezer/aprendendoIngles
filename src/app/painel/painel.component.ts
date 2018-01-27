import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'
import { ProgressoComponent } from '../progresso/progresso.component';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor() {
    this.atualizarRodada()
  }

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      if (this.rodada < this.frases.length - 1) this.rodada++
      this.progresso += (100 / this.frases.length)
      this.atualizarRodada()
    }

    else {
      alert('A tradução está incorreta')
    }
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada] 
    this.resposta = ''
  }
}
