import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'
import { ProgressoComponent } from '../progresso/progresso.component';
import { destroyView } from '@angular/core/src/view/view';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo = new EventEmitter()

  constructor() {
    this.atualizarRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //console.log('Componente painel destruído!')
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      this.rodada++

      this.progresso += (100 / this.frases.length)

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria')
      }

      this.atualizarRodada()
    }

    else {
      this.tentativas--

      if (this.tentativas === -1) {

        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizarRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
