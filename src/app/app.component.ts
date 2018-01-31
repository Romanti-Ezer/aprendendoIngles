import { Component } from '@angular/core';
import { asTextData } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

  public reiniciarJogo() {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
